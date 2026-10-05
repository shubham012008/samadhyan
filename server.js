/* Samadhyan server: serves the site and keeps a shared database in data.json.
   Run:  node server.js   then open http://localhost:3000
   No packages to install. Needs Node.js 16 or newer. */
const http = require('http'), fs = require('fs'), path = require('path');
const PORT = process.env.PORT || 3000;
const ROOT = __dirname, DB_FILE = path.join(ROOT, 'data.json');
const STATIC = { '/': 'index.html', '/index.html': 'index.html', '/style.css': 'style.css', '/action.js': 'action.js', '/logo.png': 'logo.png' };
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png' };
const SEED = [['Rally', 'Clean river walk', 'Sunday, 7:00 am', 'Riverfront'], ['Rally', 'Road safety awareness march', 'Next Saturday, 9:00 am', 'Main road'],
  ['Protest', 'Peaceful gathering for street lighting', 'Friday, 5:00 pm', 'Ward office'], ['Event', 'Tree plantation drive', 'Sunday, 8:00 am', 'Community park'], ['Event', 'Citizen help desk', 'Monday, 10:00 am', 'Community hall']];

let db = { complaints: [], events: [] };
try { db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8')); } catch (_) {}
if (!Array.isArray(db.complaints)) db.complaints = [];
if (!Array.isArray(db.events) || !db.events.length) db.events = SEED.map((e, i) => ({ id: 'seed' + i, type: e[0], title: e[1], when: e[2], place: e[3], participants: [] }));
function save() { const tmp = DB_FILE + '.tmp'; fs.writeFileSync(tmp, JSON.stringify(db, null, 2)); fs.renameSync(tmp, DB_FILE); }
save();

const str = (v, n) => String(v == null ? '' : v).slice(0, n);
const send = (res, code, data) => { res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(data)); };
function body(req) {
  return new Promise((ok, no) => {
    let s = ''; req.on('data', c => { s += c; if (s.length > 300000) { no(new Error('too large')); req.destroy(); } });
    req.on('end', () => { try { ok(s ? JSON.parse(s) : {}); } catch (e) { no(e); } });
    req.on('error', no);
  });
}
const pub = c => { const { client, ...rest } = c; return rest; };

async function api(req, res, url) {
  const p = url.pathname, client = str(url.searchParams.get('client'), 80);
  if (p === '/api/ping') return send(res, 200, { ok: true });

  if (p === '/api/complaints') {
    if (req.method === 'GET') return send(res, 200, db.complaints.filter(c => c.client === client).map(pub));
    if (req.method === 'POST') {
      const b = await body(req);
      if (!b.client || !b.subject || !b.description) return send(res, 400, { error: 'Missing fields' });
      const c = {
        id: str(b.id, 40), client: str(b.client, 80), subject: str(b.subject, 200), description: str(b.description, 4000), name: str(b.name, 100), phone: str(b.phone, 30),
        area: str(b.area, 200), gps: b.gps && isFinite(b.gps.lat) && isFinite(b.gps.lng) ? { lat: +b.gps.lat, lng: +b.gps.lng } : null, photos: Math.max(0, parseInt(b.photos, 10) || 0),
        createdAt: str(b.createdAt, 40) || new Date().toISOString(), status: 'Filed', priority: b.priority === 'Urgent' ? 'Urgent' : 'Normal', confidence: +b.confidence || 0,
        matched: Array.isArray(b.matched) ? b.matched.slice(0, 6).map(x => str(x, 40)) : [], authorityId: str(b.authorityId, 40), authorityName: str(b.authorityName, 120),
        email: str(b.email, 200), mailSubject: str(b.mailSubject, 400), body: str(b.body, 8000)
      };
      db.complaints.unshift(c); save(); return send(res, 201, pub(c));
    }
  }
  let m = p.match(/^\/api\/complaints\/([^/]+)$/);
  if (m) {
    const id = decodeURIComponent(m[1]);
    if (req.method === 'PATCH') {
      const b = await body(req), c = db.complaints.find(x => x.id === id && x.client === str(b.client, 80));
      if (!c) return send(res, 404, { error: 'Not found' });
      if (b.status === 'Filed' || b.status === 'Resolved') c.status = b.status;
      ['authorityId', 'authorityName', 'email', 'mailSubject'].forEach(k => { if (b[k] != null) c[k] = str(b[k], 400); });
      if (b.body != null) c.body = str(b.body, 8000);
      save(); return send(res, 200, pub(c));
    }
    if (req.method === 'DELETE') {
      const n = db.complaints.length; db.complaints = db.complaints.filter(x => !(x.id === id && x.client === client));
      save(); return send(res, n === db.complaints.length ? 404 : 200, { ok: n !== db.complaints.length });
    }
  }

  if (p === '/api/events') {
    if (req.method === 'GET') return send(res, 200, db.events.map(e => ({ id: e.id, type: e.type, title: e.title, when: e.when, place: e.place, count: e.participants.length, joined: e.participants.includes(client) })));
    if (req.method === 'POST') {
      const b = await body(req);
      if (!b.title || !b.place) return send(res, 400, { error: 'Missing fields' });
      const type = ['Rally', 'Protest', 'Event'].includes(b.type) ? b.type : 'Event';
      db.events.push({ id: 'e' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), type, title: str(b.title, 120), when: str(b.when, 80), place: str(b.place, 120), participants: [] });
      save(); return send(res, 201, { ok: true });
    }
  }
  m = p.match(/^\/api\/events\/([^/]+)\/join$/);
  if (m && req.method === 'POST') {
    const b = await body(req), e = db.events.find(x => x.id === decodeURIComponent(m[1])), cl = str(b.client, 80);
    if (!e || !cl) return send(res, 404, { error: 'Not found' });
    const k = e.participants.indexOf(cl); if (k >= 0) e.participants.splice(k, 1); else e.participants.push(cl);
    save(); return send(res, 200, { count: e.participants.length, joined: k < 0 });
  }
  send(res, 404, { error: 'Not found' });
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  try {
    if (url.pathname.startsWith('/api/')) return await api(req, res, url);
    const f = STATIC[url.pathname];
    if (!f) { res.writeHead(404); return res.end('Not found'); }
    fs.readFile(path.join(ROOT, f), (err, data) => {
      if (err) { res.writeHead(404); return res.end('Not found'); }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-cache' }); res.end(data);
    });
  } catch (e) { send(res, 400, { error: 'Bad request' }); }
}).listen(PORT, () => console.log('Samadhyan running at http://localhost:' + PORT));

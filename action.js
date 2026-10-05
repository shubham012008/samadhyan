const ICONS={"FaCamera":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 512 512\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z\"></path></svg>","FaMapMarkerAlt":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 384 512\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z\"></path></svg>","FaEnvelope":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 512 512\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\"></path></svg>","FaBullhorn":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 576 512\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z\"></path></svg>","FaNewspaper":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 576 512\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z\"></path></svg>","FaRobot":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 640 512\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z\"></path></svg>","FaTasks":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 512 512\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z\"></path></svg>","FaLanguage":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 640 512\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z\"></path></svg>","FaMap":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 576 512\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z\"></path></svg>","FaMobileAlt":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z\"></path></svg>","SiClaude":"<svg fill=\"currentColor\" stroke-width=\"0\" role=\"img\" viewBox=\"0 0 24 24\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z\"></path></svg>","SiGithub":"<svg fill=\"currentColor\" stroke-width=\"0\" role=\"img\" viewBox=\"0 0 24 24\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"></path></svg>","VscVscode":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 16 16\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.8634 13.9195C10.6568 14.0195 10.4233 14.0246 10.2185 13.9444C10.1162 13.9044 10.021 13.843 9.93997 13.7614L4.81616 9.06268L2.58433 10.7656C2.37657 10.9241 2.08597 10.9111 1.89301 10.7347L1.17719 10.0802C0.941168 9.86437 0.940898 9.49112 1.17661 9.27496L3.11213 7.5L1.17661 5.72504C0.940898 5.50888 0.941168 5.13563 1.17719 4.91982L1.89301 4.2653C2.08597 4.08887 2.37657 4.07588 2.58433 4.2344L4.81616 5.93732L9.93997 1.23855C9.97037 1.20797 10.0028 1.18023 10.0368 1.15538C10.2748 0.981429 10.5922 0.949298 10.8634 1.08048L13.5399 2.37507C13.8212 2.5111 14 2.79721 14 3.11109V8H10.752V4.53356L6.86419 7.5L10.752 10.4664V8H14V11.8889C14 12.2028 13.8211 12.4889 13.5399 12.625L10.8634 13.9195Z\"></path></svg>","FaMicrophone":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 352 512\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z\"></path></svg>","FaCheck":"<svg fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 512 512\" color=\"currentColor\" style=\"color:currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z\"></path></svg>"};

(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const ic = n => ICONS[n] || '';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =====================================================================
     CONFIG: replace these placeholder addresses with the real grievance
     email address of each authority in your area before real use.
     ===================================================================== */
  const AUTHORITIES = [
    { id: 'municipal', name: 'Municipal Corporation', officer: 'The Commissioner', email: 'grievance.municipal@example.gov.in',
      impact: 'This is affecting cleanliness, hygiene and the daily life of residents, and may lead to health risks if it continues.',
      ask: 'arrange an inspection and carry out the necessary clean-up or repair',
      words: 'garbage:3,waste:2,trash:3,litter:2,dustbin:3,sweep:2,sanitation:3,drain:3,drainage:3,sewer:3,sewage:3,manhole:3,stray:3,dog:2,cattle:2,mosquito:2,street light:3,streetlight:3,lamp post:3,park:2,encroach:3,stagnant:2,dumping:3,dump:2,stink:2,smell:1,kachra:3,kooda:3,naali:3,nali:3,gandagi:3,safai:3,awara:3,fallen tree:2' },
    { id: 'water', name: 'Water Supply Board', officer: 'The Executive Engineer', email: 'grievance.water@example.gov.in',
      impact: 'This is disrupting access to safe and adequate water for the residents of the locality.',
      ask: 'inspect the water supply line and restore a normal, safe supply',
      words: 'water supply:4,water:1,pipeline:3,pipe:2,leak:2,leakage:3,tap:2,borewell:3,tubewell:3,tanker:3,no water:4,dirty water:4,muddy water:4,contaminated:2,low pressure:3,jal:3,paani:3,pani:3,supply:1,burst pipe:3' },
    { id: 'electric', name: 'Electricity Department', officer: 'The Executive Engineer (Distribution)', email: 'grievance.electricity@example.gov.in',
      impact: 'This is causing inconvenience to residents and may pose a safety risk.',
      ask: 'inspect the installation and restore a safe and reliable power supply',
      words: 'electricity:3,electric:3,power cut:4,power outage:4,outage:3,blackout:3,transformer:4,wire:2,live wire:4,electric pole:4,pole:1,meter:2,voltage:3,load shedding:4,short circuit:4,spark:2,cable:1,power:1,bijli:3,dangling:2,billing:1' },
    { id: 'pollution', name: 'Pollution Control Board', officer: 'The Regional Officer', email: 'grievance.pollution@example.gov.in',
      impact: 'This is harming air, water or noise quality and the health of people living nearby.',
      ask: 'inspect the source and take action under the applicable pollution-control rules',
      words: 'pollution:4,smoke:3,burning:2,dust:2,air quality:4,smog:3,factory:2,industrial:2,effluent:4,chemical:2,discharge:2,noise:3,loud:2,speaker:2,dj:2,river:2,toxic:3,fumes:3,stubble:3,crop burning:4,burning waste:4,garbage burning:4,dhuan:3,shor:3,pradushan:3' },
    { id: 'pwd', name: 'Public Works Department', officer: 'The Executive Engineer', email: 'grievance.pwd@example.gov.in',
      impact: 'This is making travel unsafe and may cause accidents or damage to vehicles.',
      ask: 'inspect the road or structure and carry out the necessary repair',
      words: 'pothole:4,road:2,bridge:3,footpath:3,pavement:2,highway:2,flyover:3,underpass:3,speed breaker:3,divider:2,broken road:4,damaged road:4,culvert:3,waterlogging:2,sadak:3,gaddha:3,gadda:3,crack:1' },
    { id: 'police', name: 'Police Department', officer: 'The Station House Officer', email: 'grievance.police@example.gov.in',
      impact: 'This is a matter of safety and security for the residents of the area.',
      ask: 'look into this matter and take appropriate legal action',
      words: 'theft:4,stolen:4,steal:3,robbery:4,snatch:4,harass:4,eve teasing:4,stalk:4,assault:4,attack:3,fight:2,threat:4,fraud:4,scam:4,cheat:3,missing person:4,drunk:2,gambling:4,crime:4,unsafe:2,violence:4,abuse:2,chori:4,dhokha:4,gunda:3,suspicious:3,trespass:3,vandal:3,bribe:2,theif:3' },
    { id: 'traffic', name: 'Traffic Police', officer: 'The Traffic Inspector', email: 'grievance.traffic@example.gov.in',
      impact: 'This is disrupting traffic and putting commuters and pedestrians at risk.',
      ask: 'deploy personnel and take suitable action to restore orderly traffic',
      words: 'traffic:4,jam:4,signal:3,red light:4,parking:4,illegally parked:4,wrong side:4,accident:2,helmet:3,overspeed:4,speeding:4,rash driving:4,zebra:2,congestion:4,towing:3,challan:3' },
    { id: 'health', name: 'Health Department', officer: 'The Chief Medical Officer', email: 'grievance.health@example.gov.in',
      impact: 'This could affect public health in the locality.',
      ask: 'inspect the matter and take the necessary public-health measures',
      words: 'hospital:4,doctor:2,clinic:3,medicine:2,ambulance:4,dengue:4,malaria:4,outbreak:4,epidemic:4,vaccin:4,patient:2,medical:2,health:2,food poisoning:4,adulterat:4,expired:2,unhygienic:2,disease:3,cholera:4,typhoid:4,covid:3' }
  ];
  const FALLBACK = { id: 'district', name: 'District Administration (Public Grievance Cell)', officer: 'The District Magistrate', email: 'dm.grievance@example.gov.in',
    impact: 'This is affecting the residents of the locality.', ask: 'look into the matter and direct the concerned department to act' };
  const URGENT = /\b(urgent|emergency|immediate|danger|dangerous|injur|fire|live wire|electrocut|fatal|life.?threat|collapse|flood|burst|outbreak|child|accident|bleeding|unconscious)/i;

  /* ---------- the AI router: reads the text and picks the authority ---------- */
  const prep = AUTHORITIES.map(a => ({ a, rules: a.words.split(',').map(p => { const [k, w] = p.split(':'); return { k, w: +w, re: new RegExp('\\b' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ /g, '\\s+') + '\\w*', 'i') }; }) }));
  function analyse(subject, desc) {
    const sub = subject || '', body = desc || '';
    const res = prep.map(({ a, rules }) => {
      let score = 0; const hits = [];
      rules.forEach(r => { let s = 0; if (r.re.test(sub)) s += r.w * 3; if (r.re.test(body)) s += r.w; if (s) { score += s; hits.push(r.k); } });
      return { a, score, hits };
    }).sort((x, y) => y.score - x.score);
    const top = res[0], second = res[1];
    const urgent = URGENT.test(sub + ' ' + body);
    if (!top.score) return { auth: FALLBACK, confidence: 0, hits: [], urgent, ranked: res };
    const conf = Math.min(98, Math.round(100 * top.score / (top.score + second.score * 0.8 + 3)));
    return { auth: top.a, confidence: conf, hits: top.hits.slice(0, 4), urgent, ranked: res };
  }

  /* ---------- mail writer ---------- */
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const tidy = t => { t = t.replace(/\s+/g, ' ').trim(); if (!t) return t; t = t.replace(/(^|[.!?]\s+)([a-z])/g, (m, a, b) => a + b.toUpperCase()); t = t.replace(/\bi\b/g, 'I'); return /[.!?]$/.test(t) ? t : t + '.'; };
  const fmtWhen = d => d.toLocaleString('en-IN', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const newId = () => { const d = new Date(); return 'SMD-' + d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0') + '-' + Math.random().toString(36).slice(2, 6).toUpperCase(); };

  function composeMail(c, auth, urgent) {
    const subj = cap(c.subject.replace(/[.\s]+$/, ''));
    const place = c.area ? ' at ' + c.area : '';
    const loc = [c.area, c.gps ? c.gps.lat + ', ' + c.gps.lng + ' (https://maps.google.com/?q=' + c.gps.lat + ',' + c.gps.lng + ')' : ''].filter(Boolean).join(' | ') || 'Not provided';
    const lines = [
      'To,', auth.officer, auth.name, c.area || 'Concerned jurisdiction', '',
      'Subject: Complaint regarding ' + subj.charAt(0).toLowerCase() + subj.slice(1) + place, '',
      'Respected Sir/Madam,', '',
      'I am writing to bring to your kind attention an issue regarding "' + subj + '"' + (c.area ? ' in ' + c.area : '') + '.', '',
      'Details of the issue:', tidy(c.description), '',
      auth.impact + (urgent ? ' Given the seriousness of the matter, I request your immediate attention.' : ''), '',
      'Complaint details:',
      '- Complaint ID: ' + c.id,
      '- Reported on: ' + fmtWhen(new Date(c.createdAt)),
      '- Location: ' + loc,
      '- Photographic evidence: ' + (c.photos ? c.photos + ' photo(s) attached' : 'none'),
      '- Priority: ' + (urgent ? 'Urgent' : 'Normal'), '',
      'I kindly request you to ' + auth.ask + ' at the earliest, and to inform me of the action taken.', '',
      'Thanking you,', 'Yours sincerely,', c.name, c.phone ? 'Phone: ' + c.phone : null, '', 'Sent through Samadhyan (Safety, Voice, Solutions)'
    ].filter(l => l !== null);
    return {
      subject: (urgent ? 'URGENT: ' : '') + 'Complaint regarding ' + subj.charAt(0).toLowerCase() + subj.slice(1) + place + ' [' + c.id + ']',
      body: lines.join('\n')
    };
  }
  const gmailUrl = (to, su, body) => 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(to) + '&su=' + encodeURIComponent(su) + '&body=' + encodeURIComponent(body);
  const mailtoUrl = (to, su, body) => 'mailto:' + encodeURIComponent(to).replace(/%40/g, '@') + '?subject=' + encodeURIComponent(su) + '&body=' + encodeURIComponent(body.replace(/\n/g, '\r\n'));
  function openLink(url) { const w = window.open(url, '_blank'); if (w) { try { w.opener = null; } catch (_) {} return true; } return false; }

  /* ---------- storage: shared server database, or this browser ---------- */
  const ls = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (_) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) {} }
  };
  const CLIENT = (() => { let id = ls.get('smd.client', null); if (!id) { id = 'c' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36); ls.set('smd.client', id); } return id; })();
  let MODE = 'local';
  const SEED = [['Rally', 'Clean river walk', 'Sunday, 7:00 am', 'Riverfront'], ['Rally', 'Road safety awareness march', 'Next Saturday, 9:00 am', 'Main road'],
    ['Protest', 'Peaceful gathering for street lighting', 'Friday, 5:00 pm', 'Ward office'], ['Event', 'Tree plantation drive', 'Sunday, 8:00 am', 'Community park'], ['Event', 'Citizen help desk', 'Monday, 10:00 am', 'Community hall']];
  const seedEvents = () => SEED.map((e, i) => ({ id: 'seed' + i, type: e[0], title: e[1], when: e[2], place: e[3], participants: [] }));

  async function api(method, url, body) {
    const r = await fetch(url, { method, headers: body ? { 'Content-Type': 'application/json' } : undefined, body: body ? JSON.stringify(body) : undefined });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }
  async function detectServer() {
    if (location.protocol === 'file:') return;
    try { const c = new AbortController(); const t = setTimeout(() => c.abort(), 1500); const r = await fetch('api/ping', { signal: c.signal }); clearTimeout(t); const j = await r.json(); if (j && j.ok) MODE = 'server'; } catch (_) { MODE = 'local'; }
  }
  const evView = e => ({ id: e.id, type: e.type, title: e.title, when: e.when, place: e.place, count: e.participants.length, joined: e.participants.includes(CLIENT) });
  async function guard(fnServer, fnLocal) {
    if (MODE === 'server') { try { return await fnServer(); } catch (_) { MODE = 'local'; paintBadge(); toast('Server not reachable. Using this browser instead.'); } }
    return fnLocal();
  }
  const store = {
    complaints: () => guard(() => api('GET', 'api/complaints?client=' + CLIENT), () => ls.get('smd.complaints', [])),
    addComplaint: c => guard(() => api('POST', 'api/complaints', Object.assign({ client: CLIENT }, c)), () => { const a = ls.get('smd.complaints', []); a.unshift(c); ls.set('smd.complaints', a); return c; }),
    patchComplaint: (id, f) => guard(() => api('PATCH', 'api/complaints/' + encodeURIComponent(id), Object.assign({ client: CLIENT }, f)), () => { const a = ls.get('smd.complaints', []); const c = a.find(x => x.id === id); if (c) Object.assign(c, f); ls.set('smd.complaints', a); return c; }),
    deleteComplaint: id => guard(() => api('DELETE', 'api/complaints/' + encodeURIComponent(id) + '?client=' + CLIENT), () => { ls.set('smd.complaints', ls.get('smd.complaints', []).filter(x => x.id !== id)); return { ok: true }; }),
    events: () => guard(() => api('GET', 'api/events?client=' + CLIENT), () => { let a = ls.get('smd.events', null); if (!a) { a = seedEvents(); ls.set('smd.events', a); } return a.map(evView); }),
    addEvent: e => guard(() => api('POST', 'api/events', e), () => { const a = ls.get('smd.events', seedEvents()); a.push(Object.assign({ id: 'e' + Date.now().toString(36), participants: [] }, e)); ls.set('smd.events', a); return { ok: true }; }),
    toggleJoin: id => guard(() => api('POST', 'api/events/' + encodeURIComponent(id) + '/join', { client: CLIENT }), () => { const a = ls.get('smd.events', seedEvents()); const e = a.find(x => x.id === id); if (e) { const k = e.participants.indexOf(CLIENT); if (k >= 0) e.participants.splice(k, 1); else e.participants.push(CLIENT); } ls.set('smd.events', a); return { ok: true }; })
  };
  function paintBadge() {
    $$('[data-db]').forEach(b => {
      b.textContent = MODE === 'server' ? 'Database: shared server' : 'Database: this browser only';
      b.classList.toggle('srv', MODE === 'server');
      b.title = MODE === 'server' ? 'Saved on the Samadhyan server. Participation counts include everyone.' : 'Run server.js to save to a shared database. Right now data is saved in this browser.';
    });
  }

  /* ---------- state ---------- */
  const state = { user: null, result: null, tab: 'result' };

  /* ---------- icons ---------- */
  $$('[data-icon]').forEach(n => { n.innerHTML = ic(n.dataset.icon); });

  /* ---------- views and router ---------- */
  const IDS = ['home', 'problem', 'solution', 'features', 'complaints', 'participate', 'impact', 'compare', 'built', 'future', 'thanks'];
  const views = IDS.map(id => $('#v-' + id));
  const titles = views.map(v => v.dataset.title);
  const tabs = $('#tabs'), dots = $('#dots'), sheetNav = $('#sheetNav');
  let cur = -1;
  IDS.forEach((id, i) => {
    const t = el('button'); t.type = 'button'; t.textContent = titles[i]; t.dataset.i = i; t.setAttribute('role', 'tab'); tabs.appendChild(t);
    const d = el('button'); d.type = 'button'; d.dataset.i = i; d.setAttribute('role', 'tab'); d.setAttribute('aria-label', titles[i]); dots.appendChild(d);
    const s = el('button'); s.type = 'button'; s.textContent = titles[i]; s.dataset.i = i; sheetNav.appendChild(s);
  });

  function go(i, push = true) {
    i = Math.max(0, Math.min(IDS.length - 1, i));
    if (i === cur) return;
    const dir = i > cur ? 1 : -1;
    views.forEach((v, k) => {
      v.style.setProperty('--dx', (dir * 24) + 'px');
      v.classList.toggle('out', k === cur);
      v.classList.toggle('active', k === i);
      v.setAttribute('aria-hidden', k === i ? 'false' : 'true');
      if (k !== i) v.setAttribute('inert', ''); else v.removeAttribute('inert');
    });
    views[i].scrollTop = 0;
    cur = i;
    $$('button', tabs).forEach((b, k) => b.setAttribute('aria-selected', k === i));
    $$('button', dots).forEach((b, k) => b.setAttribute('aria-selected', k === i));
    $$('button', sheetNav).forEach((b, k) => k === i ? b.setAttribute('aria-current', 'true') : b.removeAttribute('aria-current'));
    $('#prevBtn').disabled = i === 0;
    $('#nextBtn').disabled = i === IDS.length - 1;
    document.title = (i ? titles[i] + ' | ' : '') + 'Samadhyan: Safety, Voice, Solutions';
    if (push) history.pushState({ i }, '', '#' + IDS[i]);
    closeSheet();
    const id = IDS[i];
    if (id === 'built') buildCode();
    if (id === 'future' && !$('.ms[aria-selected=true]')) pickMilestone(0);
    if (id === 'features' && !$('.tile[aria-selected=true]')) pickFeature(0);
    if (id === 'complaints') { tickClock(); renderPanel(); }
    if (id === 'participate') renderEvents();
  }
  const fromHash = () => { const k = IDS.indexOf(location.hash.slice(1)); return k < 0 ? 0 : k; };
  addEventListener('popstate', () => go(fromHash(), false));
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-go]');
    if (g) { go(IDS.indexOf(g.dataset.go)); return; }
    const t = e.target.closest('#tabs button, #dots button, #sheetNav button');
    if (t) go(+t.dataset.i);
  });
  $('#prevBtn').addEventListener('click', () => go(cur - 1));
  $('#nextBtn').addEventListener('click', () => go(cur + 1));
  addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeSheet(); closeUserMenu(); closeBot(); return; }
    if (e.target.closest('input, textarea, select') || (!$('#modal').hidden)) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') go(cur + 1);
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(cur - 1);
    if (e.key === 'Home') go(0);
    if (e.key === 'End') go(IDS.length - 1);
  });
  let sx = null, sy = null;
  $('#stage').addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  $('#stage').addEventListener('touchend', e => {
    if (sx == null || e.target.closest('input, textarea, select, .tw, table, .aipanel, .events')) { sx = null; return; }
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) go(cur + (dx < 0 ? 1 : -1));
    sx = null;
  }, { passive: true });
  const menuBtn = $('#menuBtn'), sheet = $('#sheet');
  function closeSheet() { sheet.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Open menu'); }
  menuBtn.addEventListener('click', () => { const open = sheet.hidden; sheet.hidden = !open; menuBtn.setAttribute('aria-expanded', String(open)); menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });

  /* ---------- counts in the top menu ---------- */
  async function refreshCounts() {
    try {
      const [c, ev] = await Promise.all([store.complaints(), store.events()]);
      $('#cntComp').textContent = c.length; $('#fCount').textContent = c.length;
      $('#cntJoin').textContent = ev.filter(e => e.joined).length;
    } catch (_) {}
  }

  /* ---------- complaint form ---------- */
  let rec = null, gps = null, clockT = null;
  const fmtClock = d => d.toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  function tickClock() { const o = $('#cTime'); if (o) o.textContent = fmtClock(new Date()); }
  clockT = setInterval(tickClock, 1000); tickClock();

  function getLocation(out, btn, cb) {
    if (!navigator.geolocation) { out.textContent = 'Location is not supported on this device'; return; }
    out.textContent = 'Finding location...';
    navigator.geolocation.getCurrentPosition(
      p => { const g = { lat: +p.coords.latitude.toFixed(5), lng: +p.coords.longitude.toFixed(5) }; out.textContent = g.lat + ', ' + g.lng; if (btn) btn.textContent = 'Update location'; cb && cb(g); },
      () => { out.textContent = 'Permission denied. Allow location and try again.'; },
      { timeout: 10000, enableHighAccuracy: true });
  }
  $('#cLocBtn').addEventListener('click', () => getLocation($('#cLoc'), $('#cLocBtn'), g => { gps = g; }));

  function stopMic() { if (rec) { try { rec.stop(); } catch (_) {} rec = null; } $('#micBtn').setAttribute('aria-pressed', 'false'); }
  $('#micBtn').addEventListener('click', () => {
    const err = $('#cErr'), SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { err.textContent = 'Speech input is not supported in this browser. Use Chrome, or type your complaint.'; return; }
    if (rec) { stopMic(); return; }
    err.textContent = '';
    rec = new SR(); rec.lang = 'en-IN'; rec.interimResults = false; rec.continuous = true;
    rec.onresult = ev => { const d = $('#cDesc'); for (let k = ev.resultIndex; k < ev.results.length; k++) if (ev.results[k].isFinal) d.value += (d.value && !/\s$/.test(d.value) ? ' ' : '') + ev.results[k][0].transcript.trim(); renderPanel(); };
    rec.onerror = ev => { err.textContent = ev.error === 'not-allowed' ? 'Microphone permission denied.' : 'Could not hear you. Try again.'; stopMic(); };
    rec.onend = () => { rec = null; $('#micBtn').setAttribute('aria-pressed', 'false'); };
    try { rec.start(); $('#micBtn').setAttribute('aria-pressed', 'true'); } catch (_) { rec = null; }
  });

  /* live routing preview while typing */
  let liveT = null;
  ['cSub', 'cDesc'].forEach(id => $('#' + id).addEventListener('input', () => { if (state.result) return; clearTimeout(liveT); liveT = setTimeout(renderPanel, 150); }));

  $('#cForm').addEventListener('submit', e => {
    e.preventDefault();
    const subject = $('#cSub').value.trim(), description = $('#cDesc').value.trim(), name = $('#cName').value.trim(), err = $('#cErr');
    if (!subject) { err.textContent = 'Add a subject so the AI can choose the right authority.'; $('#cSub').focus(); return; }
    if (!description) { err.textContent = 'Describe what happened, by typing or speaking.'; $('#cDesc').focus(); return; }
    if (!name) { err.textContent = 'Add your name. It goes at the end of the mail.'; $('#cName').focus(); return; }
    err.textContent = ''; stopMic();
    const ai = analyse(subject, description);
    const c = { id: newId(), subject, description, name, phone: $('#cPhone').value.trim(), area: $('#cArea').value.trim(), gps, photos: $('#cPhoto').files.length,
      createdAt: new Date().toISOString(), status: 'Filed', priority: ai.urgent ? 'Urgent' : 'Normal', confidence: ai.confidence, matched: ai.hits };
    const auth = ai.auth, mail = composeMail(c, auth, ai.urgent);
    Object.assign(c, { authorityId: auth.id, authorityName: auth.name, email: auth.email, mailSubject: mail.subject, body: mail.body });
    const opened = openLink(gmailUrl(c.email, c.mailSubject, c.body));   /* opens Gmail with the mail already written */
    state.result = { c, ai, opened, files: Array.from($('#cPhoto').files).map(f => URL.createObjectURL(f)) };
    state.tab = 'result'; setTab('result');
    store.addComplaint(c).then(() => { refreshCounts(); }).catch(() => toast('Could not save the complaint.'));
  });

  /* right panel: AI result and filed complaints */
  function setTab(t) {
    state.tab = t;
    $('#rtResult').classList.toggle('on', t === 'result'); $('#rtResult').setAttribute('aria-selected', t === 'result');
    $('#rtFiled').classList.toggle('on', t === 'filed'); $('#rtFiled').setAttribute('aria-selected', t === 'filed');
    renderPanel();
  }
  $('#rtResult').addEventListener('click', () => setTab('result'));
  $('#rtFiled').addEventListener('click', () => setTab('filed'));

  function renderPanel() {
    const p = $('#aiPanel'); if (!p) return;
    if (state.tab === 'filed') return renderFiled(p);
    if (state.result) return renderResult(p);
    const sub = $('#cSub').value.trim(), desc = $('#cDesc').value.trim();
    if (!sub && !desc) { p.innerHTML = '<p class="empty">Type your subject and the AI will read it, choose the authority and write the mail. When you submit, Gmail opens with the mail ready to send.</p>'; return; }
    const ai = analyse(sub, desc);
    p.innerHTML = `<div class="chips2"><span class="chip g">Authority: ${esc(ai.auth.name)}</span>${ai.confidence ? `<span class="chip">Confidence ${ai.confidence}%</span>` : '<span class="chip">No match, using general grievance cell</span>'}${ai.urgent ? '<span class="chip u">Urgent</span>' : ''}</div>
      <p class="why">${ai.hits.length ? 'Detected from: ' + esc(ai.hits.join(', ')) + '.' : 'Add more detail to help the AI route this.'}</p>
      <p class="empty">Fill in the rest and submit. The mail is written for you.</p>`;
  }

  function renderResult(p) {
    const { c, ai, opened, files } = state.result;
    p.innerHTML = `<div class="resbox">
      <div class="chips2"><span class="chip g">Authority: ${esc(c.authorityName)}</span><span class="chip">Confidence ${c.confidence}%</span><span class="chip ${c.priority === 'Urgent' ? 'u' : ''}">Priority: ${esc(c.priority)}</span></div>
      <p class="why">${c.matched.length ? 'Chosen from: ' + esc(c.matched.join(', ')) + '.' : 'No clear match, so it goes to the general grievance cell.'} Saved as <b>${esc(c.id)}</b> in Filed complaints.</p>
      <label for="rAuth">Authority (change if the AI got it wrong)</label>
      <select id="rAuth">${AUTHORITIES.concat([FALLBACK]).map(a => `<option value="${a.id}"${a.id === c.authorityId ? ' selected' : ''}>${esc(a.name)}</option>`).join('')}</select>
      <label for="rTo">To</label><input id="rTo" type="text" value="${esc(c.email)}">
      <label for="rSub">Subject</label><input id="rSub" type="text" value="${esc(c.mailSubject)}">
      <label for="rBody">Mail body</label><textarea id="rBody" rows="9">${esc(c.body)}</textarea>
      <div class="acts"><button class="btn" type="button" id="gBtn">Open in Gmail</button><button class="btn btn-ghost" type="button" id="mBtn">Open in mail app</button><button class="btn btn-ghost" type="button" id="cpBtn">Copy</button><button class="lnk" type="button" id="nBtn">New complaint</button></div>
      <p class="small" id="rNote">${opened ? 'Gmail opened in a new tab with this mail.' : 'Your browser blocked the new tab. Use Open in Gmail.'} ${/example\./.test(c.email) ? 'The address is a placeholder: set the real one in action.js before sending.' : ''} ${c.photos ? 'Attach your ' + c.photos + ' photo(s) in Gmail, browsers cannot attach files automatically.' : ''}</p>
    </div>`;
    const cur = () => ({ to: $('#rTo').value.trim(), su: $('#rSub').value, body: $('#rBody').value });
    const persist = () => { const v = cur(); Object.assign(c, { email: v.to, mailSubject: v.su, body: v.body }); store.patchComplaint(c.id, { email: v.to, mailSubject: v.su, body: v.body }); };
    $('#rAuth').onchange = e => {
      const a = AUTHORITIES.concat([FALLBACK]).find(x => x.id === e.target.value);
      const m = composeMail(c, a, c.priority === 'Urgent');
      Object.assign(c, { authorityId: a.id, authorityName: a.name, email: a.email, mailSubject: m.subject, body: m.body });
      store.patchComplaint(c.id, { authorityId: a.id, authorityName: a.name, email: a.email, mailSubject: m.subject, body: m.body });
      renderResult(p);
    };
    $('#gBtn').onclick = () => { persist(); const v = cur(); $('#rNote').textContent = openLink(gmailUrl(v.to, v.su, v.body)) ? 'Gmail opened in a new tab.' : 'Your browser blocked the new tab. Allow pop-ups for this site and try again.'; };
    $('#mBtn').onclick = () => { persist(); const v = cur(); location.href = mailtoUrl(v.to, v.su, v.body); };
    $('#cpBtn').onclick = async () => { const v = cur(); const text = 'To: ' + v.to + '\nSubject: ' + v.su + '\n\n' + v.body; try { await navigator.clipboard.writeText(text); } catch (_) { $('#rBody').select(); document.execCommand('copy'); } $('#rNote').textContent = 'Mail copied.'; };
    $('#nBtn').onclick = () => { state.result = null; $('#cForm').reset(); gps = null; $('#cLoc').textContent = 'Not added'; $('#cLocBtn').textContent = 'Add current location'; renderPanel(); $('#cSub').focus(); };
  }

  async function renderFiled(p) {
    const list = await store.complaints();
    if (!list.length) { p.innerHTML = '<p class="empty">No complaints filed yet. Submit one and it will be saved here.</p>'; return; }
    p.innerHTML = '<ul class="flist">' + list.map(c => `<li data-id="${esc(c.id)}"><div class="t">${esc(c.subject)}<span class="st ${c.status === 'Resolved' ? 'ok' : ''}">${esc(c.status)}</span>${c.priority === 'Urgent' ? '<span class="st" style="background:#fff1f0;color:#b3261e">Urgent</span>' : ''}</div>
      <div class="m">${esc(c.id)} | ${esc(c.authorityName)} | ${esc(new Date(c.createdAt).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }))}</div>
      <div class="row"><button class="lnk" data-a="mail" type="button">Open in Gmail</button><button class="lnk" data-a="status" type="button">${c.status === 'Resolved' ? 'Reopen' : 'Mark resolved'}</button><button class="lnk del" data-a="del" type="button">Delete</button></div></li>`).join('') + '</ul>';
    p.onclick = async e => {
      const b = e.target.closest('button[data-a]'); if (!b) return;
      const id = b.closest('li').dataset.id, c = list.find(x => x.id === id);
      if (b.dataset.a === 'mail') { if (!openLink(gmailUrl(c.email, c.mailSubject, c.body))) toast('Allow pop-ups to open Gmail.'); }
      if (b.dataset.a === 'status') { await store.patchComplaint(id, { status: c.status === 'Resolved' ? 'Filed' : 'Resolved' }); renderFiled(p); }
      if (b.dataset.a === 'del') { await store.deleteComplaint(id); if (state.result && state.result.c.id === id) state.result = null; renderFiled(p); refreshCounts(); }
    };
  }

  /* ---------- participation ---------- */
  async function renderEvents() {
    const ul = $('#events'); let ev;
    try { ev = await store.events(); } catch (_) { ev = []; }
    ul.innerHTML = '';
    ev.forEach(e => {
      const li = el('li', '', `<div><div class="t"><span class="k ${esc(e.type)}">${esc(e.type)}</span>${esc(e.title)}</div><div class="m">${esc(e.when || '')}${e.place ? ' | ' + esc(e.place) : ''}</div><div class="cnt">${e.count} ${e.count === 1 ? 'person' : 'people'} participating</div></div>`);
      const b = el('button', 'join' + (e.joined ? ' on' : ''), e.joined ? 'Joined' : 'Join');
      b.type = 'button'; b.setAttribute('aria-pressed', e.joined);
      b.onclick = async () => { b.disabled = true; await store.toggleJoin(e.id); await renderEvents(); refreshCounts(); };
      li.appendChild(b); ul.appendChild(li);
    });
    $('#totJoin').textContent = ev.reduce((n, e) => n + e.count, 0);
    $('#totEv').textContent = ev.length;
  }
  $('#eForm').addEventListener('submit', async e => {
    e.preventDefault();
    const title = $('#eTitle').value.trim(), place = $('#ePlace').value.trim(), w = $('#eWhen').value, err = $('#eErr');
    if (!title) { err.textContent = 'Give the event a title.'; $('#eTitle').focus(); return; }
    if (!w) { err.textContent = 'Choose a date and time.'; $('#eWhen').focus(); return; }
    if (!place) { err.textContent = 'Add the place.'; $('#ePlace').focus(); return; }
    err.textContent = '';
    const when = new Date(w).toLocaleString('en-IN', { weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
    await store.addEvent({ title, type: $('#eType').value, when, place });
    $('#eForm').reset(); renderEvents(); toast('Event created. People can now join it.');
  });

  /* ---------- features ---------- */
  const FEATURES = [
    { id: 'complaint', icon: 'FaCamera', t: 'Complaint with proof', d: 'Photos, text or voice' },
    { id: 'location', icon: 'FaMapMarkerAlt', t: 'Auto location and time', d: 'GPS, date and time added' },
    { id: 'mail', icon: 'FaEnvelope', t: 'AI-written mail', d: 'Authority chosen for you' },
    { id: 'participate', icon: 'FaBullhorn', t: 'Participate', d: 'Rallies, protests and events' },
    { id: 'news', icon: 'FaNewspaper', t: '#news', d: 'Local updates on the home page' },
    { id: 'bot', icon: 'FaRobot', t: 'AI bot', d: 'Instant answers to questions' }
  ];
  const tiles = $('#tiles'), pane = $('#pane');
  FEATURES.forEach((f, i) => {
    const b = el('button', 'tile', `<span class="ic">${ic(f.icon)}</span><b>${f.t}</b><span class="d">${f.d}</span>`);
    b.type = 'button'; b.dataset.i = i; b.id = 'tile-' + f.id; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', 'false'); tiles.appendChild(b);
  });
  tiles.addEventListener('click', e => { const t = e.target.closest('.tile'); if (t) pickFeature(+t.dataset.i); });
  let ftimers = [];
  const clearF = () => { ftimers.forEach(clearInterval); ftimers.forEach(clearTimeout); ftimers = []; };

  function pickFeature(i) {
    clearF();
    $$('.tile', tiles).forEach((t, k) => t.setAttribute('aria-selected', k === i));
    pane.setAttribute('aria-labelledby', 'tile-' + FEATURES[i].id);
    ({
      complaint() { pane.innerHTML = `<h3>Complaint with proof</h3><p>Describe the issue by typing or speaking, add photos and your area. Date, time and GPS location are attached for you, and every complaint is saved under Filed complaints.</p><button class="btn btn-small" type="button" data-go="complaints" style="align-self:flex-start">File a complaint</button>`; },
      location() {
        pane.innerHTML = `<h3>Auto location and time</h3><p>Every complaint carries proof of when and where it was reported.</p>
          <div class="auto"><span class="k">Date and time</span><output class="clock" id="lTime"></output></div>
          <div class="auto"><span class="k">Location</span><output id="lLoc">Not added</output><button class="lnk" type="button" id="lBtn">Get my location</button></div>
          <p class="small">Location is used only when you allow it in your browser.</p>`;
        const tick = () => { const o = $('#lTime'); if (o) o.textContent = fmtClock(new Date()); }; tick(); ftimers.push(setInterval(tick, 1000));
        $('#lBtn').onclick = () => getLocation($('#lLoc'), $('#lBtn'));
      },
      mail() {
        pane.innerHTML = `<h3>The AI picks the authority</h3><p>Type a subject to see where it would be sent.</p>
          <input id="tSub" type="text" placeholder="Example: Pothole on the main road" autocomplete="off">
          <div id="tOut" style="display:flex;flex-direction:column;gap:6px"></div>
          <button class="btn btn-small" type="button" data-go="complaints" style="align-self:flex-start">File this complaint</button>`;
        const run = () => {
          const s = $('#tSub').value.trim(), o = $('#tOut');
          if (!s) { o.innerHTML = '<p class="small">Try: garbage, water leak, power cut, loud noise, theft, traffic jam, dengue.</p>'; return; }
          const ai = analyse(s, '');
          o.innerHTML = `<div class="chips2"><span class="chip g">${esc(ai.auth.name)}</span>${ai.confidence ? `<span class="chip">Confidence ${ai.confidence}%</span>` : ''}${ai.urgent ? '<span class="chip u">Urgent</span>' : ''}</div><p class="small">${ai.hits.length ? 'Detected from: ' + esc(ai.hits.join(', ')) : 'No clear match, so it would go to the general grievance cell.'}</p>`;
        };
        $('#tSub').addEventListener('input', run); run();
      },
      async participate() {
        pane.innerHTML = '<h3>Participate</h3><p>Loading...</p>';
        const ev = await store.events(); const tot = ev.reduce((n, e) => n + e.count, 0);
        pane.innerHTML = `<h3>Participate</h3><div class="bignum"><b>${tot}</b><span>participations across ${ev.length} events</span></div><p>Join rallies, protests and events, or create your own. Counts update as people join.</p><button class="btn btn-small" type="button" data-go="participate" style="align-self:flex-start">See events</button>`;
      },
      news() { pane.innerHTML = `<h3>#news</h3><p>Local updates appear on your home page.</p><ul class="newsl"><li>Complaint mails now include location and time proof.</li><li>New authorities are being connected to the platform.</li><li>Community events are listed for you to join.</li><li>Voice input makes reporting easier for everyone.</li></ul>`; },
      bot() { pane.innerHTML = `<h3>AI bot</h3><p>Ask how to file a complaint, how the authority is chosen, or how the SDGs link to Samadhyan. The bot is available on every page.</p><button class="btn btn-small" type="button" id="openBot" style="align-self:flex-start">Open the AI bot</button>`; $('#openBot').onclick = openBot; }
    })[FEATURES[i].id]();
  }

  /* ---------- future ---------- */
  const MILES = [
    { icon: 'FaTasks', t: 'Status tracking', d: 'Follow each complaint until it is resolved', n: 'Citizens will see every stage of a complaint, from sent to resolved, and get a reminder if an authority has not replied.' },
    { icon: 'FaLanguage', t: 'Regional languages', d: 'Voice and text in local languages', n: 'Speak and read in your own language, so no one is left out because of language or typing skills.' },
    { icon: 'FaMap', t: 'Hotspot map', d: 'See where issues keep recurring', n: 'A map of reported issues will show recurring problem areas so authorities can act where it matters most.' },
    { icon: 'FaMobileAlt', t: 'Mobile app', d: 'Android and iOS with offline drafts', n: 'A phone app will let people draft a complaint without internet and send it when they are back online.' }
  ];
  const line = $('#line');
  MILES.forEach((m, i) => { const b = el('button', 'ms', `<span class="ic">${ic(m.icon)}</span><b>${m.t}</b><span class="d">${m.d}</span>`); b.type = 'button'; b.dataset.i = i; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', 'false'); line.appendChild(b); });
  line.addEventListener('click', e => { const b = e.target.closest('.ms'); if (b) pickMilestone(+b.dataset.i); });
  function pickMilestone(i) { $$('.ms', line).forEach((b, k) => b.setAttribute('aria-selected', k === i)); $('#futNote').textContent = MILES[i].n; }

  /* ---------- random code background ---------- */
  const POOL = ["const form = document.getElementById('complaintForm');", "form.addEventListener('submit', async (e) => {", "  e.preventDefault();", "  const data = new FormData(form);", "  const res = await fetch('/api/complaints', { method: 'POST', body: data });", "  if (!res.ok) throw new Error('Request failed');", "});", "navigator.geolocation.getCurrentPosition(pos => {", "  const { latitude, longitude } = pos.coords;", "const rec = new webkitSpeechRecognition();", "rec.onresult = (ev) => { desc.value += ev.results[0][0].transcript; };", ".veil { backdrop-filter: blur(8px); }", "<section class=\"hero\" id=\"top\">", "</section>", "git add . && git commit -m \"add complaint form\"", "git push origin main", "function analyse(subject, desc) {", "  const score = rules.reduce((s, r) => s + r.w * r.re.test(subject), 0);", "  return { authority, confidence, urgent };", "}", "app.post('/api/complaints', async (req, res) => {", "  db.complaints.unshift(complaint); save();", "npm install", "node server.js", "import { useState } from 'react';", "SELECT * FROM complaints WHERE status = 'open';", "window.open(gmailUrl(to, subject, body), '_blank');"];
  function buildCode() {
    const box = $('#code'); box.innerHTML = '';
    const rows = Math.ceil(innerHeight / 18) + 2, cls = ['', 'g', 'b', ''];
    for (let i = 0; i < rows; i++) { const s = el('span', cls[Math.floor(Math.random() * cls.length)]); s.textContent = POOL[Math.floor(Math.random() * POOL.length)]; box.appendChild(s); }
  }

  /* ---------- login / register ---------- */
  const modal = $('#modal'), veil = $('#veil'), loginBtn = $('#loginBtn'), um = $('#userMenu');
  let mode = 'login', lastFocus = null;
  function openModal() { if (state.user) { um.hidden = !um.hidden; if (!um.hidden) refreshCounts(); return; } lastFocus = document.activeElement; modal.hidden = false; veil.hidden = false; setMode('login'); setTimeout(() => $('#aEmail').focus(), 50); }
  function closeModal() { if (modal.hidden) return; modal.hidden = true; veil.hidden = true; $('#aErr').textContent = ''; lastFocus && lastFocus.focus && lastFocus.focus(); }
  function closeUserMenu() { um.hidden = true; }
  function setMode(m) { mode = m; $$('.seg button').forEach(b => b.classList.toggle('on', b.dataset.mode === m)); $('#mTitle').textContent = m === 'login' ? 'Login' : 'Register'; $('#aSubmit').textContent = m === 'login' ? 'Login' : 'Create account'; $('#nameRow').hidden = m === 'login'; $('#aErr').textContent = ''; }
  loginBtn.addEventListener('click', openModal);
  $('#mClose').addEventListener('click', closeModal); veil.addEventListener('click', closeModal);
  $$('.seg button').forEach(b => b.addEventListener('click', () => setMode(b.dataset.mode)));
  document.addEventListener('click', e => { if (!um.hidden && !e.target.closest('#userMenu') && !e.target.closest('#loginBtn')) closeUserMenu(); });
  $('#authForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#aName').value.trim(), email = $('#aEmail').value.trim(), pass = $('#aPass').value, err = $('#aErr');
    if (mode === 'register' && !name) { err.textContent = 'Enter your name.'; $('#aName').focus(); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { err.textContent = 'Enter a valid email address.'; $('#aEmail').focus(); return; }
    if (pass.length < 6) { err.textContent = 'Use a password with at least 6 characters.'; $('#aPass').focus(); return; }
    const display = name || email.split('@')[0];
    state.user = { name: display, email };
    loginBtn.textContent = 'Hi, ' + display.split(' ')[0]; $('#umName').textContent = display;
    if (!$('#cName').value) $('#cName').value = display;
    refreshCounts(); closeModal(); $('#authForm').reset(); lastFocus = loginBtn;
    toast('Welcome, ' + display.split(' ')[0] + '. You are logged in.');
  });
  $('#logoutBtn').addEventListener('click', () => { state.user = null; loginBtn.textContent = 'Login / Register'; closeUserMenu(); go(0); toast('You have logged out.'); });

  function toast(msg) {
    const t = el('div', '', msg);
    Object.assign(t.style, { position: 'fixed', left: '50%', top: '72px', transform: 'translateX(-50%)', background: '#0B4F6C', color: '#fff', padding: '10px 18px', borderRadius: '999px', zIndex: 90, fontSize: '.95rem', boxShadow: '0 12px 30px -14px rgba(0,0,0,.5)', maxWidth: '92vw', textAlign: 'center' });
    t.setAttribute('role', 'status'); document.body.appendChild(t); setTimeout(() => t.remove(), 3000);
  }
  $('#tryBtn').addEventListener('click', () => go(IDS.indexOf('complaints')));

  /* ---------- AI bot ---------- */
  const bot = $('#bot'), fab = $('#botFab'), log = $('#log'), chips = $('#chips');
  const QA = [
    [/complain|file|report|submit/, 'Open Complaints, write a subject and what happened (type or speak), add your name and area, and submit. The AI picks the authority, writes the mail and opens Gmail with it ready to send.'],
    [/authorit|which|route|department|who/, 'The AI reads your subject and description and scores them against eight departments: municipal, water, electricity, pollution, public works, police, traffic and health. You can change its choice before sending.'],
    [/mail|gmail|send|email|redirect/, 'After you submit, a formal mail with your details, location, time and complaint ID is written and Gmail opens in a new tab with it filled in. You can edit it and attach photos there.'],
    [/database|save|stored|filed|history/, 'Every complaint is saved under Filed complaints. With server.js running it goes to a shared database; otherwise it is saved in your browser.'],
    [/count|how many|people|participation/, 'The Participate page shows how many people joined each event and the total. Counts are shared across everyone when server.js is running.'],
    [/voice|speak|speech|mic/, 'Press Speak in the complaint form and say what happened. It is turned into text. This needs a browser with speech support, such as Chrome.'],
    [/location|gps|time|date|proof/, 'Date, time and GPS location are added automatically, so every complaint carries proof of when and where it happened. Location is used only if you allow it.'],
    [/sdg|sustain|goal|impact/, 'Samadhyan supports SDG 16 (strong institutions), SDG 11 (sustainable communities), SDG 9 (innovation) and SDG 10 (reduced inequalities). See the Impact page.'],
    [/differ|compare|portal|better|unique|usp/, 'Typical portals need forms and manual mail. Samadhyan adds photo, voice and GPS input, an AI-chosen authority, an AI-written mail and events in one place. See Compare.'],
    [/rally|protest|event|join/, 'Open Participate to join rallies, protests and events, or create one. Your participation is counted straight away.'],
    [/login|register|account|sign/, 'Use Login / Register at the top right. This is a prototype, so no real account is created.'],
    [/built|tech|stack|claude|github|code/, 'Samadhyan was built with Claude, a GitHub repository and Visual Studio Code, using HTML, CSS and JavaScript with a small Node.js server.'],
    [/future|next|roadmap/, 'Next: complaint status tracking, regional-language voice input, a hotspot map and a mobile app with offline drafts.'],
    [/hi|hello|hey|help|what|about/, 'Hello! I can explain how to file a complaint, how the authority is chosen, where complaints are saved and more. What would you like to know?']
  ];
  const SUGG = ['How do I file a complaint?', 'How is the authority chosen?', 'Where are complaints saved?', 'Which SDGs do you support?'];
  function say(text, who) { const m = el('div', 'msg ' + who); m.textContent = text; log.appendChild(m); log.scrollTop = log.scrollHeight; }
  function ask(q) { if (!q.trim()) return; say(q, 'u'); const hit = QA.find(([re]) => re.test(q.toLowerCase())); setTimeout(() => say(hit ? hit[1] : 'I can help with complaints, authorities, the mail, saved data, participation and the SDGs. Try one of those.', 'b'), reduce ? 0 : 350); }
  SUGG.forEach(q => { const b = el('button', '', q); b.type = 'button'; b.onclick = () => ask(q); chips.appendChild(b); });
  function openBot() { bot.hidden = false; fab.setAttribute('aria-expanded', 'true'); if (!log.children.length) say('Hi, I am the Samadhyan bot. Ask me anything about the site.', 'b'); setTimeout(() => $('#askIn').focus(), 50); }
  function closeBot() { if (bot.hidden) return; bot.hidden = true; fab.setAttribute('aria-expanded', 'false'); }
  fab.addEventListener('click', () => bot.hidden ? openBot() : closeBot());
  $('#botX').addEventListener('click', () => { closeBot(); fab.focus(); });
  $('#ask').addEventListener('submit', e => { e.preventDefault(); const i = $('#askIn'); ask(i.value); i.value = ''; });

  /* expose for testing */
  window.__samadhyan = { analyse, composeMail, AUTHORITIES };

  /* ---------- start ---------- */
  go(fromHash(), false);
  history.replaceState({ i: cur }, '', '#' + IDS[cur]);
  detectServer().then(() => { paintBadge(); refreshCounts(); if (IDS[cur] === 'participate') renderEvents(); if (IDS[cur] === 'complaints') renderPanel(); });
  paintBadge(); refreshCounts();
})();

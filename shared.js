/* ── SPLASH TEXT ── */
const splashes = [
  "Now with 12% more bugs","Works on my machine","Locally sourced spaghetti code",
  "Built at 3 AM","Contains traces of Lua","Try clicking random things",
  "This website is definitely stable","Not malware probably","One day from release since 2022",
  "Made with duct tape","Frame-perfect disappointment","Warning: programmer art ahead",
  "Press F to debug","Runs best on hopes and dreams","If it crashes, it's immersive",
  "Certified indie moment","Professional button clicker","Now featuring particles",
  "Please clap","Achievement unlocked: opened website","Optimized eventually",
  "This took way too long","Now in early early access","Retro because I can't do realism",
  "You found the splash text","Made in a basement probably","Legally distinct gameplay",
  "No microtransactions yet","Game dev is pain","100% organic bugs",
  "Unnecessarily dramatic lighting","Missing textures add atmosphere","This line took 4 hours",
  "Future game of the year maybe","Can reproduce bugs instantly","Audio may explode",
  "Contains experimental nonsense","Ask about the lore","UI designed by goblins",
  "Please wishlist something","Now with screen shake","Built different",
  "One more feature bro","Physics are suggestions","Hope you like pixels",
  "Art degree sold separately","The crunch was imaginary","GPU heater included",
  "The bug is now a feature","Can't stop adding shaders","This seemed easier in my head",
  "Not responsible for skill issues","Every update breaks something","Try not to clip out of bounds",
  "Please ignore the placeholder sounds","Totally balanced gameplay","99 little bugs in the code",
  "The lore goes deeper than intended","Textures loading eventually","Probably haunted",
  "Press alt+f4 for bonus points","Please don't inspect the source","What is sleep",
  "I fixed that bug three times","This splash text has ray tracing","Playable on some devices",
  "Made with questionable math","Main menu simulator","The tutorial is emotional damage",
  "Loading clever text...","Nothing suspicious here","Will add multiplayer later",
  "One line of code ruined everything","This website cost my sanity","Do not feed the bugs",
  "Probably inspired by ULTRAKILL","Probably inspired by Hollow Knight","Probably inspired by Street Cleaner 3",
  "Probably inspired by Celeste","Probably inspired by PowerWash Simulator",
  "Probably inspired by Shower With Your Dad Simulator 2015: Do You Still Shower With Your Dad",
  "Probably inspired by Portal 2","I am NOT a moron","Now with extra contrast",
  "The void stares back","This could've been a normal hobby","Oops all post-processing",
  "Screaming internally","No refunds for emotional damage","This button does something maybe",
  "You are now part of the QA team","The shadows are watching","Soon\u2122",
  "Made entirely out of If statements","Can you hear the fans spinning?","Now accepting bug sacrifices",
  "This website passed at least one test","Your GPU fears me","Pretending to know optimization",
  "The soundtrack slaps though","More updates than stability","100% hand-crafted nonsense",
  "Mroww :3","We make games I think"
];

const splashEl = document.getElementById('splash-text');
if (splashEl) splashEl.textContent = '\u2605 ' + splashes[Math.floor(Math.random() * splashes.length)] + ' \u2605';

/* ── STARFIELD ── */
(function () {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  function init() {
    stars = [];
    for (let i = 0; i < 220; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.3 + 0.2,
        speed: Math.random() * 0.003 + 0.002,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.15 ? 270 : 210
      });
    }
  }
  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      const a = 0.15 + 0.55 * Math.abs(Math.sin(t * s.speed + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.hue},60%,85%,${a})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize', () => { resize(); init(); });
  resize(); init();
  requestAnimationFrame(draw);
})();

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

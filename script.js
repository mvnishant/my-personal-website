/* ------------------------------
   FOOTER YEAR
------------------------------ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ------------------------------
   SCROLL PROGRESS BAR
------------------------------ */
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  document.getElementById('scroll-progress').style.width = progress + '%';
});

/* ------------------------------
   HERO PARALLAX MOTION (SUPER PREMIUM)
------------------------------ */
window.addEventListener('scroll', () => {
  const offset = window.scrollY * 0.12;
  const hero = document.querySelector('.hero');
  hero.style.backgroundPosition = `center ${-offset}px`;
});

/* ------------------------------
   INTERSECTION OBSERVER
   (Sections + Text Animations)
------------------------------ */
const animatedElements = document.querySelectorAll('[data-animate]');
const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated-in');
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => sectionObserver.observe(el));

/* ------------------------------
   MAGNETIC BUTTONS (SUPER PREMIUM)
------------------------------ */
const magneticButtons = document.querySelectorAll('.btn-magnetic');

magneticButtons.forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
  });
});

/* ------------------------------
   FLOATING PARTICLES
------------------------------ */
const particleLayer = document.querySelector('.particle-layer');
if (particleLayer) {
  const particleCount = 45;
  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 10;
    const scale = 0.5 + Math.random() * 1.2;
    p.style.left = x + '%';
    p.style.top = y + '%';
    p.style.animationDelay = `${delay}s`;
    p.style.transform = `scale(${scale})`;
    particleLayer.appendChild(p);
  }
}

/* ------------------------------
   DARK / LIGHT MODE TOGGLE
------------------------------ */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('theme-dark')) {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
  } else {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
  }
});

/* ------------------------------
   NAV SHRINK ON SCROLL (SUPER PREMIUM)
------------------------------ */
const nav = document.querySelector('.top-nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 60) {
    nav.classList.add('nav-shrink');
  } else {
    nav.classList.remove('nav-shrink');
  }

  lastScroll = currentScroll;
});

/* ------------------------------
   ACTIVE SECTION HIGHLIGHT (SUPER PREMIUM)
------------------------------ */
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active-link');
    }
  });
});

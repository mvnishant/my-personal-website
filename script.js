// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll progress bar
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  document.getElementById('scroll-progress').style.width = progress + '%';

  // Hero background motion (parallax-like)
  const hero = document.querySelector('.hero');
  if (hero) {
    const offset = scrollTop * 0.15;
    hero.style.backgroundPosition = `center ${-offset}px`;
  }
});

// IntersectionObserver for sections + text animations
const sections = document.querySelectorAll('.section');
const animatedElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('section')) {
          entry.target.classList.add('visible');
        }
        if (entry.target.hasAttribute('data-animate')) {
          entry.target.classList.add('animated-in');
        }
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));
animatedElements.forEach(el => observer.observe(el));

// Magnetic button hover
const magneticButtons = document.querySelectorAll('.btn-magnetic');

magneticButtons.forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
  });
});

// Floating particles
const particleLayer = document.querySelector('.particle-layer');
if (particleLayer) {
  const particleCount = 40;
  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 10;
    const scale = 0.6 + Math.random() * 0.8;
    p.style.left = x + '%';
    p.style.top = y + '%';
    p.style.animationDelay = `${delay}s`;
    p.style.transform = `scale(${scale})`;
    particleLayer.appendChild(p);
  }
}

// Dark / light mode toggle
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

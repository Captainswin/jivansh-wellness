// ══ JIVANSH WELLNESS – MAIN JS ══

// ── Mobile Nav Toggle ──
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}
function closeMobileNav() {
  if (mobileNav) mobileNav.classList.remove('open');
  if (hamburger) hamburger.classList.remove('active');
}

// ── Header blur on scroll ──
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  // Sticky bar
  const stickyBar = document.getElementById('stickyBar');
  const heroSection = document.querySelector('.hero');
  if (stickyBar && heroSection) {
    if (heroSection.getBoundingClientRect().bottom < 0) {
      stickyBar.classList.add('visible');
    } else {
      stickyBar.classList.remove('visible');
    }
  }
});

// ── FAQ Accordion ──
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('open'));
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  if (!isOpen) { btn.classList.add('open'); answer.classList.add('open'); }
}

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
      closeMobileNav();
    }
  });
});

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.ing-card, .works-card, .use-card, .who-card, .quality-card, .testi-card, .pillar, .product-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  observer.observe(el);
});

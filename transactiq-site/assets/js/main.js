const body = document.body;
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    body.classList.toggle('menu-open');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('menu-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  });
});

const onScroll = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 12);
};

onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in-view'));
}

const headerStyle = document.createElement('style');
headerStyle.textContent = `
  .site-header {
    background: rgba(6, 27, 58, 0.78) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10) !important;
    backdrop-filter: blur(18px) !important;
  }

  .site-header.scrolled {
    background: rgba(6, 27, 58, 0.92) !important;
    box-shadow: 0 14px 34px rgba(6, 27, 58, 0.20) !important;
  }

  .brand {
    background: rgba(255, 255, 255, 0.96) !important;
    padding: 7px 11px !important;
    border-radius: 16px !important;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.10) !important;
  }

  .nav-links {
    color: rgba(255, 255, 255, 0.74) !important;
  }

  .nav-links a:hover,
  .nav-links a.active {
    color: var(--cyan) !important;
  }

  .nav-cta {
    color: var(--ink) !important;
    background: var(--cyan) !important;
    box-shadow: 0 12px 28px rgba(32, 198, 223, 0.20) !important;
  }

  .nav-toggle {
    border: 1px solid rgba(255, 255, 255, 0.18) !important;
    background: rgba(255, 255, 255, 0.96) !important;
  }

  @media (max-width: 960px) {
    .nav-links {
      background: rgba(255, 255, 255, 0.96) !important;
      border: 1px solid var(--line) !important;
      color: var(--muted) !important;
    }

    .nav-links a:hover,
    .nav-links a.active {
      background: var(--ice) !important;
      color: var(--blue) !important;
    }
  }
`;
document.head.appendChild(headerStyle);

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

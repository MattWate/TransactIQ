[
  ['icon','image/x-icon','assets/images/favicon.ico',''],
  ['icon','image/png','assets/images/favicon-32x32.png','32x32'],
  ['icon','image/png','assets/images/favicon-16x16.png','16x16'],
  ['apple-touch-icon','','assets/images/apple-touch-icon.png','180x180']
].forEach(([rel,type,href,sizes]) => {
  const link = document.createElement('link');
  link.rel = rel;
  link.href = href;
  if (type) link.type = type;
  if (sizes) link.sizes = sizes;
  document.head.appendChild(link);
});

document.querySelectorAll('.brand img').forEach((img) => {
  img.src = 'assets/images/transactiq-logo-full-dark.png';
});

document.querySelectorAll('.footer-brand img').forEach((img) => {
  img.src = 'assets/images/transactiq-logo-full-light.png';
});

const style = document.createElement('style');
style.textContent = `
  .site-header{position:fixed!important;top:0!important;left:0!important;right:0!important;width:100%!important;z-index:1000!important;background:linear-gradient(90deg,#061B3A 0%,#071424 100%)!important;border-bottom:1px solid rgba(32,198,223,.14)!important;backdrop-filter:none!important}
  .site-header.scrolled{background:linear-gradient(90deg,#061B3A 0%,#071424 100%)!important;box-shadow:0 14px 34px rgba(6,27,58,.28)!important}
  .nav-shell{padding-top:10px!important;padding-bottom:10px!important}
  .brand{background:transparent!important;padding:0!important;border-radius:0!important;box-shadow:none!important;width:282px!important;min-width:282px!important;height:46px!important;overflow:hidden!important;display:flex!important;align-items:flex-start!important}
  .brand img{width:282px!important;max-width:none!important;height:auto!important;display:block!important;transform:translateY(-1px)!important}
  .footer-brand img{width:300px!important;max-width:300px!important;height:auto!important;display:block!important}
  .nav-links{color:rgba(255,255,255,.76)!important}
  .nav-links a:hover,.nav-links a.active{color:var(--cyan)!important}
  .nav-cta{color:var(--ink)!important;background:var(--cyan)!important;box-shadow:0 12px 28px rgba(32,198,223,.2)!important}
  .nav-toggle{border:1px solid rgba(255,255,255,.18)!important;background:rgba(255,255,255,.96)!important}
  .hero-panel,.glass-card{border-radius:22px!important}
  .signal{border-radius:14px!important;background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.14)!important}
  .signal-number{border-radius:10px!important}
  .hero{background-image:linear-gradient(90deg,rgba(6,27,58,.94) 0%,rgba(6,27,58,.78) 48%,rgba(6,27,58,.22) 100%),url('assets/images/home-hero-advisory-meeting.jpg')!important}
  .image-band{background-image:linear-gradient(90deg,rgba(6,27,58,.93),rgba(6,27,58,.72)),url('assets/images/data-portfolio-dashboard.jpg')!important}
  .image-band.alt{background-image:linear-gradient(90deg,rgba(6,27,58,.92),rgba(6,27,58,.74)),url('assets/images/market-performance-chart.jpg')!important}
  .page-hero{background-image:linear-gradient(90deg,rgba(6,27,58,.94) 0%,rgba(6,27,58,.76) 55%,rgba(6,27,58,.24) 100%),url('assets/images/consumer-payment-card.jpg')!important}
  .page-hero.commercial{background-image:linear-gradient(90deg,rgba(6,27,58,.94) 0%,rgba(6,27,58,.76) 55%,rgba(6,27,58,.24) 100%),url('assets/images/data-portfolio-dashboard.jpg')!important}
  .page-hero.consumer{background-image:linear-gradient(90deg,rgba(6,27,58,.94) 0%,rgba(6,27,58,.76) 55%,rgba(6,27,58,.24) 100%),url('assets/images/consumer-card-transaction.jpg')!important}
  .page-hero.about{background-image:linear-gradient(90deg,rgba(6,27,58,.94) 0%,rgba(6,27,58,.76) 55%,rgba(6,27,58,.24) 100%),url('assets/images/about-professional-handshake.jpg')!important}
  .page-hero.careers{background-image:linear-gradient(90deg,rgba(6,27,58,.94) 0%,rgba(6,27,58,.76) 55%,rgba(6,27,58,.24) 100%),url('assets/images/careers-corporate-architecture.jpg')!important}
  .cta-panel{background-image:linear-gradient(90deg,rgba(6,27,58,.94),rgba(6,27,58,.74)),url('assets/images/about-professional-handshake.jpg')!important}
  .vertical-tabs{margin-top:34px}.tab-toolbar{display:flex;gap:10px;overflow-x:auto;padding:10px;border:1px solid var(--line);border-radius:22px;background:rgba(244,248,252,.72);box-shadow:0 14px 40px rgba(6,27,58,.06);scrollbar-width:thin}.tab-button{flex:0 0 auto;border:1px solid transparent;border-radius:16px;background:transparent;color:var(--muted);cursor:pointer;font:inherit;font-size:.88rem;font-weight:900;padding:13px 16px;transition:all .2s ease}.tab-button:hover{color:var(--blue);background:rgba(255,255,255,.78)}.tab-button.active{color:var(--white);background:linear-gradient(135deg,var(--blue),var(--cyan));box-shadow:0 14px 32px rgba(10,79,211,.18)}.tab-panel{display:none;margin-top:24px}.tab-panel.active{display:block}.vertical-module{border:1px solid var(--line);border-radius:34px;background:var(--white);overflow:hidden;box-shadow:var(--soft-shadow)}.vertical-intro{display:grid;grid-template-columns:minmax(0,.9fr) minmax(300px,.55fr);gap:30px;padding:42px;color:var(--white);background:radial-gradient(circle at top right,rgba(32,198,223,.24),transparent 34%),linear-gradient(135deg,var(--ink),var(--navy-2))}.vertical-intro h2{margin-bottom:16px}.vertical-intro p{color:rgba(255,255,255,.74);max-width:760px;font-size:1.05rem}.metric-strip{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.metric-card{border:1px solid rgba(255,255,255,.13);border-radius:18px;background:rgba(255,255,255,.08);padding:18px;backdrop-filter:blur(14px)}.metric-card strong{display:block;color:var(--cyan);font-family:'Inter Tight',Inter,sans-serif;font-size:1.45rem;line-height:1;margin-bottom:8px}.metric-card span{display:block;color:rgba(255,255,255,.72);font-size:.88rem;line-height:1.45}.vertical-body{padding:38px 42px 42px}.advisory-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:24px}.advisory-card{min-height:170px;border:1px solid var(--line);border-radius:22px;background:var(--white);padding:22px;box-shadow:0 8px 28px rgba(6,27,58,.04)}.advisory-card h3{font-size:1.08rem;margin-bottom:9px}.advisory-card p{color:var(--muted);font-size:.93rem}.outcome-flow{margin-top:28px;display:grid;gap:10px}.outcome-row{display:grid;grid-template-columns:48px 1fr auto;gap:14px;align-items:center;border:1px solid var(--line);border-radius:18px;background:var(--ice);padding:15px 18px}.outcome-row strong{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;color:var(--white);background:linear-gradient(135deg,var(--blue),var(--cyan));font-size:.82rem}.outcome-row span{color:var(--ink);font-weight:700}.outcome-row em{color:var(--blue);font-style:normal;font-weight:900}.approach-block{margin-top:30px;border-radius:26px;color:var(--white);background:var(--ink);padding:32px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22px;align-items:center;overflow:hidden;position:relative}.approach-block:after{content:'';position:absolute;right:-80px;bottom:-90px;width:220px;height:220px;border-radius:50%;background:rgba(32,198,223,.16)}.approach-block blockquote,.approach-block a{position:relative;z-index:1}.approach-block blockquote{font-family:'Inter Tight',Inter,sans-serif;font-size:clamp(1.35rem,2.3vw,2rem);line-height:1.08;letter-spacing:-.045em;font-weight:900}
  @media(max-width:1100px){.brand{width:238px!important;min-width:238px!important;height:42px!important}.brand img{width:238px!important}.nav-links{gap:14px!important}}
  @media(max-width:960px){.brand{width:220px!important;min-width:220px!important;height:40px!important}.brand img{width:220px!important}.nav-links{background:rgba(255,255,255,.96)!important;border:1px solid var(--line)!important;color:var(--muted)!important}.nav-links a:hover,.nav-links a.active{background:var(--ice)!important;color:var(--blue)!important}.vertical-intro,.approach-block{grid-template-columns:1fr}.advisory-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
  @media(max-width:680px){.brand{width:185px!important;min-width:185px!important;height:34px!important}.brand img{width:185px!important}.footer-brand img{width:240px!important}.vertical-intro,.vertical-body{padding:28px}.metric-strip,.advisory-grid,.outcome-row{grid-template-columns:1fr}.outcome-row em{display:none}}
`;
document.head.appendChild(style);

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

document.querySelectorAll('[data-tabs]').forEach((group) => {
  const buttons = group.querySelectorAll('[data-tab-target]');
  const panels = group.querySelectorAll('[data-tab-panel]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tabTarget;
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });
      panels.forEach((panel) => panel.classList.toggle('active', panel.dataset.tabPanel === target));
    });
  });
});

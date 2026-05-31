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

document.querySelectorAll('.brand img, .footer-brand img').forEach((img) => {
  img.src = 'assets/images/transactiq-logo-transparent.png';
});

const style = document.createElement('style');
style.textContent = `
  :root{--ink:#071424;--navy:#061B3A;--navy-2:#08244D;--blue:#0A4FD3;--cyan:#20C6DF;--ice:#E3ECF5;--slate-panel:#D5E2EF;--cyan-wash:#DFF6FA;--white:#FFFFFF;--muted:#4F6072;--line:#C7D7E6;--shadow:0 24px 80px rgba(6,27,58,.18);--soft-shadow:0 16px 46px rgba(6,27,58,.12)}
  body,.page{background:linear-gradient(180deg,#DDE8F3 0%,#E7EFF7 42%,#D5E2EF 100%)!important}.section{background:transparent!important}.soft-section{background:linear-gradient(180deg,#D5E2EF 0%,#E1EAF4 100%)!important;border-top:1px solid rgba(199,215,230,.95);border-bottom:1px solid rgba(199,215,230,.95)}.section-heading{color:var(--ink)}
  .site-header{position:fixed!important;top:0!important;left:0!important;right:0!important;width:100%!important;z-index:1000!important;background:linear-gradient(90deg,#061B3A 0%,#071424 100%)!important;border-bottom:1px solid rgba(32,198,223,.14)!important;backdrop-filter:none!important}.site-header.scrolled{background:linear-gradient(90deg,#061B3A 0%,#071424 100%)!important;box-shadow:0 14px 34px rgba(6,27,58,.28)!important}.nav-shell{padding-top:7px!important;padding-bottom:7px!important;align-items:center!important}.brand{background:transparent!important;padding:0!important;border-radius:0!important;box-shadow:none!important;width:292px!important;min-width:292px!important;height:auto!important;overflow:visible!important;display:flex!important;align-items:center!important}.brand img{width:292px!important;max-width:292px!important;height:auto!important;display:block!important;transform:none!important}.footer-brand img{width:330px!important;max-width:330px!important;height:auto!important;display:block!important}.nav-links{color:rgba(255,255,255,.76)!important}.nav-links a:hover,.nav-links a.active{color:var(--cyan)!important}.nav-cta{color:var(--ink)!important;background:var(--cyan)!important;box-shadow:0 12px 28px rgba(32,198,223,.2)!important}.nav-toggle{border:1px solid rgba(255,255,255,.18)!important;background:rgba(255,255,255,.96)!important}
  .hero{background-image:linear-gradient(90deg,rgba(6,27,58,.94) 0%,rgba(6,27,58,.78) 48%,rgba(6,27,58,.22) 100%),url('assets/images/home-hero-advisory-meeting.jpg')!important}.image-band{background-image:linear-gradient(90deg,rgba(6,27,58,.93),rgba(6,27,58,.72)),url('assets/images/data-portfolio-dashboard.jpg')!important}.image-band.alt{background-image:linear-gradient(90deg,rgba(6,27,58,.92),rgba(6,27,58,.74)),url('assets/images/market-performance-chart.jpg')!important}.page-hero{background-image:linear-gradient(90deg,rgba(6,27,58,.94) 0%,rgba(6,27,58,.76) 55%,rgba(6,27,58,.24) 100%),url('assets/images/consumer-payment-card.jpg')!important}.page-hero.commercial{background-image:linear-gradient(90deg,rgba(6,27,58,.94) 0%,rgba(6,27,58,.76) 55%,rgba(6,27,58,.24) 100%),url('assets/images/data-portfolio-dashboard.jpg')!important}.page-hero.consumer{background-image:linear-gradient(90deg,rgba(6,27,58,.94) 0%,rgba(6,27,58,.76) 55%,rgba(6,27,58,.24) 100%),url('assets/images/consumer-card-transaction.jpg')!important}.page-hero.about{background-image:linear-gradient(90deg,rgba(6,27,58,.94) 0%,rgba(6,27,58,.76) 55%,rgba(6,27,58,.24) 100%),url('assets/images/about-professional-handshake.jpg')!important}.page-hero.careers{background-image:linear-gradient(90deg,rgba(6,27,58,.94) 0%,rgba(6,27,58,.76) 55%,rgba(6,27,58,.24) 100%),url('assets/images/careers-corporate-architecture.jpg')!important}.cta-panel{background-image:linear-gradient(90deg,rgba(6,27,58,.94),rgba(6,27,58,.74)),url('assets/images/about-professional-handshake.jpg')!important}
  .editorial,.capability-card,.outcome-card,.path-step,.contact-form,.contact-card,.advisory-card{background:linear-gradient(180deg,#F7FAFD 0%,#EEF4FA 100%)!important;border-color:var(--line)!important;box-shadow:0 16px 44px rgba(6,27,58,.105)!important}.quote-card,.why-card,.talent-card,.approach-block{background:radial-gradient(circle at top right,rgba(32,198,223,.18),transparent 34%),linear-gradient(135deg,#071424,#08244D)!important}.icon-box{background:#DFF6FA!important}.btn-outline,input,textarea,select{background:#F5F9FC!important;border-color:var(--line)!important}.btn-outline:hover{background:#FFFFFF!important}.final-cta{background:transparent!important}.site-footer{background:#D0DEEC!important;border-top:1px solid var(--line)!important}.footer-inner{background:transparent!important}.footer-links,.footer-meta{color:#46596D!important}
  .hero-panel,.glass-card{border-radius:22px!important}.signal{border-radius:14px!important;background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.14)!important}.signal-number{border-radius:10px!important}.hero h1,.page-hero h1{letter-spacing:-.032em!important;word-spacing:.08em!important;line-height:1!important;text-wrap:balance!important}.page-hero.commercial .hero-actions .btn-secondary,.page-hero.consumer .hero-actions .btn-secondary{display:none!important}
  [data-tab-panel='fleet']{--vertical-image:url('assets/images/vertical-fleet-trucks.jpg');--vertical-position:center 54%}[data-tab-panel='freight']{--vertical-image:url('assets/images/vertical-logistics-cargo-ship.jpg');--vertical-position:center 48%}[data-tab-panel='travel']{--vertical-image:url('assets/images/vertical-travel-airport.jpg');--vertical-position:center 48%}[data-tab-panel='agriculture']{--vertical-image:url('assets/images/vertical-agriculture-field.jpg');--vertical-position:center 55%}[data-tab-panel='construction']{--vertical-image:url('assets/images/vertical-construction-cranes.jpg');--vertical-position:center 52%}[data-tab-panel='healthcare']{--vertical-image:url('assets/images/vertical-healthcare-scanner.jpg');--vertical-position:center 50%}[data-tab-panel='portfolio']{--vertical-image:url('assets/images/vertical-consumer-cards.jpg');--vertical-position:center 50%}[data-tab-panel='risk']{--vertical-image:url('assets/images/vertical-consumer-application.jpg');--vertical-position:center 46%}[data-tab-panel='digital']{--vertical-image:url('assets/images/vertical-consumer-digital-payments.jpg');--vertical-position:center 50%}
  .vertical-tabs{margin-top:34px}.tab-label{display:inline-flex;align-items:center;gap:9px;margin:0 0 12px 4px;color:#061B3A;font-size:.78rem;font-weight:950;letter-spacing:.11em;text-transform:uppercase}.tab-label::before{content:'';width:10px;height:10px;border-radius:999px;background:var(--cyan);box-shadow:0 0 0 6px rgba(32,198,223,.13)}.tab-toolbar{display:flex;gap:10px;overflow-x:auto;padding:10px;border:1px solid rgba(199,215,230,.95);border-radius:22px;background:linear-gradient(180deg,#D5E2EF 0%,#E1EAF4 100%)!important;box-shadow:0 16px 42px rgba(6,27,58,.09);scrollbar-width:thin}.tab-button{flex:0 0 auto;border:1px solid rgba(10,79,211,.12);border-radius:16px;background:rgba(255,255,255,.62);color:#324A66;cursor:pointer;font:inherit;font-size:.88rem;font-weight:900;padding:13px 16px;transition:all .2s ease;box-shadow:0 8px 22px rgba(6,27,58,.055)}.tab-button:hover{color:var(--blue);background:rgba(255,255,255,.86);border-color:rgba(10,79,211,.2);transform:translateY(-1px)}.tab-button.active{color:var(--white);background:linear-gradient(135deg,var(--blue),var(--cyan));border-color:transparent;box-shadow:0 14px 32px rgba(10,79,211,.18);transform:none}.tab-panel{display:none;margin-top:24px}.tab-panel.active{display:block}.vertical-module{border:1px solid var(--line);border-radius:34px;background:#DDE8F3!important;overflow:hidden;box-shadow:0 18px 50px rgba(6,27,58,.13)}.vertical-intro{display:grid;grid-template-columns:minmax(0,.9fr) minmax(300px,.55fr);gap:30px;padding:46px;color:var(--white);min-height:360px;align-items:center;background-image:linear-gradient(90deg,rgba(7,20,36,.96) 0%,rgba(7,20,36,.86) 48%,rgba(7,20,36,.56) 100%),var(--vertical-image)!important;background-size:cover!important;background-position:var(--vertical-position,center)!important;position:relative;isolation:isolate}.vertical-intro:after{content:'';position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(32,198,223,.24),transparent 36%),linear-gradient(180deg,rgba(10,79,211,.08),rgba(7,20,36,.08));z-index:-1;pointer-events:none}.vertical-intro h2{margin-bottom:16px;text-shadow:0 10px 30px rgba(0,0,0,.35)}.vertical-intro p{color:rgba(255,255,255,.78);max-width:760px;font-size:1.05rem;text-shadow:0 8px 24px rgba(0,0,0,.25)}.metric-strip{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.metric-card{border:1px solid rgba(255,255,255,.18);border-radius:18px;background:rgba(7,20,36,.38);padding:18px;backdrop-filter:blur(14px);box-shadow:0 16px 34px rgba(0,0,0,.18)}.metric-card strong{display:block;color:var(--cyan);font-family:'Inter Tight',Inter,sans-serif;font-size:1.45rem;line-height:1;margin-bottom:8px}.metric-card span{display:block;color:rgba(255,255,255,.78);font-size:.88rem;line-height:1.45}.vertical-body{padding:38px 42px 42px;background:linear-gradient(180deg,#DDE8F3,#D0DEEC)}.advisory-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:24px}.advisory-card{min-height:170px;border-radius:22px;padding:22px}.advisory-card h3{font-size:1.08rem;margin-bottom:9px}.advisory-card p{color:var(--muted);font-size:.93rem}.outcome-flow{margin-top:28px;display:grid;gap:10px}.outcome-row{display:grid;grid-template-columns:48px 1fr;gap:14px;align-items:center;border:1px solid rgba(199,215,230,.95);border-radius:18px;background:#EEF4FA!important;padding:15px 18px}.outcome-row strong{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;color:var(--white);background:linear-gradient(135deg,var(--blue),var(--cyan));font-size:.82rem}.outcome-row span{color:var(--ink);font-weight:700}.outcome-row em{display:none!important}.approach-block{margin-top:30px;border-radius:26px;color:var(--white);padding:32px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22px;align-items:center;overflow:hidden;position:relative}.approach-block:after{content:'';position:absolute;right:-80px;bottom:-90px;width:220px;height:220px;border-radius:50%;background:rgba(32,198,223,.16)}.approach-block blockquote,.approach-block a{position:relative;z-index:1}.approach-block blockquote{font-family:'Inter Tight',Inter,sans-serif;font-size:clamp(1.35rem,2.3vw,2rem);line-height:1.08;letter-spacing:-.045em;font-weight:900}
  .team-card.charles .team-photo{background:radial-gradient(circle at top right,rgba(32,198,223,0.20),transparent 36%),linear-gradient(135deg,var(--ink),var(--navy-2))!important;padding:30px 28px 0!important}.team-card.charles .team-photo img{filter:drop-shadow(0 22px 36px rgba(0,0,0,.28))!important;object-fit:contain!important;object-position:center bottom!important}
  @media(max-width:1200px){.brand{width:245px!important;min-width:245px!important}.brand img{width:245px!important}.nav-links{gap:14px!important;font-size:.86rem!important}.nav-cta{padding-inline:18px!important}}
  @media(max-width:960px){.brand{width:230px!important;min-width:230px!important}.brand img{width:230px!important}.nav-links{background:rgba(255,255,255,.96)!important;border:1px solid var(--line)!important;color:var(--muted)!important}.nav-links a:hover,.nav-links a.active{background:var(--ice)!important;color:var(--blue)!important}.vertical-intro,.approach-block{grid-template-columns:1fr}.advisory-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
  @media(max-width:680px){.brand{width:196px!important;min-width:196px!important}.brand img{width:196px!important}.footer-brand img{width:260px!important}.hero h1,.page-hero h1{letter-spacing:-.018em!important;word-spacing:.05em!important;line-height:1.04!important}.tab-label{margin-left:0;font-size:.72rem}.vertical-intro{padding:30px;min-height:0}.vertical-body{padding:28px}.metric-strip,.advisory-grid,.outcome-row{grid-template-columns:1fr}.outcome-row em{display:none}}
`;
document.head.appendChild(style);

const layoutFixStyle = document.createElement('style');
layoutFixStyle.textContent = `
  main{padding-top:25px!important;}
  @media(min-width:901px){
    .site-footer .footer-inner{display:grid!important;grid-template-columns:auto minmax(520px,1fr) auto!important;align-items:center!important;gap:28px!important;max-width:1180px!important;}
    .site-footer .footer-brand{min-width:0!important;}
    .site-footer .footer-brand img{width:245px!important;max-width:245px!important;}
    .site-footer .footer-links{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;gap:22px!important;justify-content:center!important;align-items:center!important;white-space:nowrap!important;font-size:.88rem!important;}
    .site-footer .footer-meta{justify-self:end!important;text-align:right!important;white-space:nowrap!important;font-size:.9rem!important;}
  }
  @media(min-width:901px) and (max-width:1120px){
    .site-footer .footer-inner{grid-template-columns:auto minmax(460px,1fr) auto!important;gap:20px!important;}
    .site-footer .footer-brand img{width:210px!important;max-width:210px!important;}
    .site-footer .footer-links{gap:16px!important;font-size:.82rem!important;}
    .site-footer .footer-meta{font-size:.82rem!important;}
  }
`;
document.head.appendChild(layoutFixStyle);

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
  if (!group.querySelector('.tab-label')) {
    const label = document.createElement('div');
    label.className = 'tab-label';
    label.textContent = 'Explore the verticals we support';
    const toolbar = group.querySelector('.tab-toolbar');
    if (toolbar) group.insertBefore(label, toolbar);
  }

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

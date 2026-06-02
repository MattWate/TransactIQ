(() => {
  const headingSelectors = [
    'h1',
    'h2',
    '.page-hero h1',
    '.section-heading h2',
    '.editorial h2',
    '.image-band h2',
    '.cta-panel h2',
    '.vertical-intro h2'
  ].join(',');

  document.querySelectorAll(headingSelectors).forEach((heading) => {
    const text = heading.textContent.trim();
    if (!text.endsWith('.')) return;
    heading.textContent = text.replace(/\.+$/, '');
  });
})();

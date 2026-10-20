(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  document.querySelectorAll('pre.code-block').forEach((pre) => {
    if (pre.querySelector('.copy-btn')) return;
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.textContent = 'Copy';
    btn.addEventListener('click', async () => {
      const code = pre.querySelector('code')?.textContent || pre.textContent || '';
      try {
        await navigator.clipboard.writeText(code.replace(/\nCopy$/, '').trim());
        btn.textContent = 'Copied';
      } catch {
        btn.textContent = 'Failed';
      }
      setTimeout(() => { btn.textContent = 'Copy'; }, 1400);
    });
    pre.appendChild(btn);
  });
})();

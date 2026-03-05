// mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle && navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav.style.display = expanded ? '' : 'flex';
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    const targetId = this.getAttribute('href').slice(1);
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
    // close mobile nav if open
    if (window.innerWidth < 860 && siteNav.style.display === 'flex') {
      siteNav.style.display = 'none';
      navToggle.setAttribute('aria-expanded','false');
    }
  });
});

// simple contact form handler (no backend) — shows a friendly note and resets form
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');
const resetBtn = document.getElementById('form-reset');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim() || 'Friend';
    note.textContent = `Thanks, ${name}. We got your message — we'll reply at the email you provided.`;
    form.reset();
  });
}

resetBtn && resetBtn.addEventListener('click', () => {
  form.reset();
  note.textContent = '';
});
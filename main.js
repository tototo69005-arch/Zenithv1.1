/* ================================================================
   ZENITH TRAVEL AND TOURS — Shared JS
================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Navbar scroll --- */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- Mobile hamburger --- */
  const burger  = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      burger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Scroll reveal --- */
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

  /* --- Newsletter form (simulation) --- */
  const nlForms = document.querySelectorAll('.nl-form');
  nlForms.forEach(form => {
    const btn = form.querySelector('button');
    const input = form.querySelector('input');
    if (btn && input) {
      btn.addEventListener('click', () => {
        if (input.value.includes('@')) {
          btn.innerHTML = '✓';
          btn.style.background = 'var(--green)';
          input.value = '';
          input.placeholder = 'Merci !';
        }
      });
    }
  });

});

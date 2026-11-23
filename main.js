if (!CSS.supports('animation-timeline: scroll()')) {
  const c = document.querySelector('.hero .hero-cutout');
  addEventListener('scroll', () => {
    c.style.opacity = Math.max(0, 1 - scrollY / innerHeight);
  }, { passive: true });
}
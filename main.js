if (!CSS.supports('animation-timeline: scroll()')) {
  const c = document.querySelector('.hero .hero-cutout');
  addEventListener('scroll', () => {
    c.style.opacity = Math.max(0, 1 - scrollY / innerHeight);
  }, { passive: true });
}

const cards = document.querySelector('.projects-cards');
const step = () => cards.querySelector('.card-group').offsetWidth + 16;
const atStart = () => cards.scrollLeft < 2;
const atEnd = () => cards.scrollLeft + cards.clientWidth > cards.scrollWidth - 2;

document.querySelector('.cards-next').addEventListener('click', () => {
  if (atEnd()) cards.scrollTo({ left: 0 });
  else cards.scrollBy({ left: step() });
});
document.querySelector('.cards-prev').addEventListener('click', () => {
  if (atStart()) cards.scrollTo({ left: cards.scrollWidth });
  else cards.scrollBy({ left: -step() });
});
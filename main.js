if (!CSS.supports('animation-timeline: scroll()')) {
  const c = document.querySelector('.hero .hero-cutout');
  addEventListener('scroll', () => {
    c.style.opacity = Math.max(0, 1 - scrollY / innerHeight);
  }, { passive: true });
}

// const cards = document.querySelector('.projects-cards');
// const step = () => cards.querySelector('.card-group').offsetWidth + 16;
// const atStart = () => cards.scrollLeft < 2;
// const atEnd = () => cards.scrollLeft + cards.clientWidth > cards.scrollWidth - 2;

// document.querySelector('.cards-next').addEventListener('click', () => {
//   if (atEnd()) cards.scrollTo({ left: 0 });
//   else cards.scrollBy({ left: step() });
// });
// document.querySelector('.cards-prev').addEventListener('click', () => {
//   if (atStart()) cards.scrollTo({ left: cards.scrollWidth });
//   else cards.scrollBy({ left: -step() });
// });

const cards = document.querySelector('.projects-cards');
const cardList = cards.querySelectorAll('.card-group');

function go(direction) {
  const step = cardList[1].offsetLeft - cardList[0].offsetLeft;  // one card + gap
  const current = Math.round(cards.scrollLeft / step);
  const next = (current + direction + cardList.length) % cardList.length;
  cards.scrollTo({ left: next * step });
}

document.querySelector('.cards-next').addEventListener('click', () => go(1));
document.querySelector('.cards-prev').addEventListener('click', () => go(-1));
if (!CSS.supports('animation-timeline: scroll()')) {
  const c = document.querySelector('.hero .hero-cutout');
  addEventListener('scroll', () => {
    c.style.opacity = Math.max(0, 1 - scrollY / innerHeight);
  }, { passive: true });
}

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
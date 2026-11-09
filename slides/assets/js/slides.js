const slides = [...document.querySelectorAll('.slide')];
const count = document.querySelector('#count');
const previous = document.querySelector('#prev');
const next = document.querySelector('#next');
let current = 0;

function show(index) {
  current = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, i) => { slide.hidden = i !== current; });
  count.value = `${current + 1} / ${slides.length}`;
  previous.disabled = current === 0;
  next.disabled = current === slides.length - 1;
  document.querySelector('progress').value = current + 1;
  window.scrollTo(0, 0);
}
function readHash() {
  const number = Number(location.hash.slice(1));
  show(Number.isInteger(number) ? number - 1 : 0);
}
function go(index) {
  if (index >= 0 && index < slides.length) location.hash = String(index + 1);
}
previous.addEventListener('click', () => go(current - 1));
next.addEventListener('click', () => go(current + 1));
document.querySelector('#print').addEventListener('click', () => window.print());
window.addEventListener('hashchange', readHash);
document.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.defaultPrevented) return;
  if (event.code === 'Space' && event.target.closest('a,button')) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.code === 'Space') {
    event.preventDefault();
    go(current + (event.key === 'ArrowRight' ? -1 : 1));
  }
});
readHash();

document.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (link) console.info('اختار الزائر رابطًا من البطاقة الرقمية');
});
document.querySelector('#print-card').addEventListener('click', () => window.print());

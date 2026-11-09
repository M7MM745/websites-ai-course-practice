document.querySelectorAll('article img').forEach(image => {
  image.addEventListener('error', () => image.classList.add('missing-image'));
});

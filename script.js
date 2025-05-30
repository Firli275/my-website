const musik = document.getElementById('musik');
const tombolPutar = document.getElementById('tombol-putar');

tombolPutar.addEventListener('click', () => {
  musik.play();
  tombolPutar.style.display = 'none';
});

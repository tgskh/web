window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.button[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('play');
});

window.addEventListener('click', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.button[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('play');
});

window.addEventListener('keyup', function(e) {
  const key = document.querySelector(`.button[data-key="${e.keyCode}"]`);
  key.classList.remove('play');
});


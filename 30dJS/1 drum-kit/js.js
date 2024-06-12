window.addEventListener('keydown', playSound);

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`button[data-key="${e.keyCode}"]`);
  key.classList.add('playing');
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function playSoundOnClick(e) {
  const keyCode = e.target.dataset.key;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`button[data-key="${keyCode}"]`);
  key.classList.add('playing');
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll('.sound-button');
keys.forEach(button =>  {
  button.addEventListener('transitionend', removeTransition);
  button.addEventListener('mousedown', playSoundOnClick);
});




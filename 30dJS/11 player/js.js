const play = document.getElementById('play');
const player = document.querySelector('video');
const volume = document.getElementById('volume');
const speed = document.getElementById('speed');
const progress = document.getElementById('progress');
const back = document.getElementById('back');
const forward = document.getElementById('forward');

play.addEventListener('click', function () {
  (player.paused) ? player.play() : player.pause();
});

volume.addEventListener('input', function () {
  player.volume = volume.value/100;
});

speed.addEventListener('input', function () {
  player.playbackRate = speed.value;
  console.log(speed.value);
});

progress.addEventListener('input', function () {
  console.log(player.currentTime);
  player.currentTime = player.duration/100*progress.value;
  console.log(player.currentTime);
});

back.addEventListener('click', function () {
  player.currentTime = player.currentTime -10;
});

forward.addEventListener('click', function () {
  player.currentTime = player.currentTime + 10;
});

player.addEventListener('timeupdate', function () {
  const current = player.currentTime;
  const duration = player.duration;
  progress.value = (player.currentTime/player.duration)*100;
});


const test = document.getElementById('test');

test.addEventListener('input', function (){
  console.log(this.value);
});
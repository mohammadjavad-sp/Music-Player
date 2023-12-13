let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrlIcon");
let song = document.getElementById("song");
let newSong = "../media/Ali Yasini - Nade Ghol (128).mp3"
let pic = "../media/5.jpg"
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let img = document.getElementById("img");
let musicName = document.getElementById("musicName");
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
ctrlIcon.addEventListener("click", play);
function play() {
  if (ctrlIcon.classList.contains("fa-play")) {
    this.classList.remove("fa-play");
    this.classList.add("fa-pause");
    song.play();
  } else {
    this.classList.add("fa-play");
    this.classList.remove("fa-pause");
    song.pause();
  }
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange = function () {
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
  song.play();
  song.currentTime = progress.value;
};
prev.addEventListener("click", prevMusic);
function prevMusic() {
  song.src = "../media/Ali Yasini - Nesfe Shab (128).mp3";
  img.src = "../media/1.jpg";
  musicName.innerHTML = "Nesfe Shab";
  progress.style.backgroundColor = "purple"
  
}
next.addEventListener("click", nextMusic);
function nextMusic() {
  song.src = newSong
  img.src = pic
  musicName.innerHTML = "Nade Ghol";
  progress.style.backgroundColor = "white"
  
}
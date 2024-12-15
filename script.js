// Select elements
const audioPlayer = document.getElementById("audio-player");
const playlist = document.getElementById("playlist");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const speedControl = document.getElementById("speed");
const lyricsDisplay = document.getElementById("lyrics-display");
const themeToggle = document.getElementById("theme-toggle");

// Playlist functionality
playlist.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    audioPlayer.src = e.target.dataset.src;
    audioPlayer.play();
    lyricsDisplay.textContent = `Playing lyrics for ${e.target.textContent}`;
  }
});

// Play/pause/next/prev functionality
playBtn.addEventListener("click", () => audioPlayer.play());
pauseBtn.addEventListener("click", () => audioPlayer.pause());

nextBtn.addEventListener("click", () => {
  const current = playlist.querySelector("li.active");
  const next = current?.nextElementSibling || playlist.firstElementChild;
  next.click();
});

prevBtn.addEventListener("click", () => {
  const current = playlist.querySelector("li.active");
  const prev = current?.previousElementSibling || playlist.lastElementChild;
  prev.click();
});

// Speed control
speedControl.addEventListener("change", (e) => {
  audioPlayer.playbackRate = e.target.value;
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Equalizer (placeholder functionality)
document.getElementById("bass").addEventListener("input", (e) => {
  console.log("Bass adjusted to", e.target.value);
});

document.getElementById("treble").addEventListener("input", (e) => {
  console.log("Treble adjusted to", e.target.value);
});

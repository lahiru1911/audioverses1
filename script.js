// script.js
document.addEventListener("DOMContentLoaded", () => {
  const playlistEl = document.getElementById("playlist");
  const localSongsEl = document.getElementById("local-songs");
  const playBtn = document.getElementById("play");
  const pauseBtn = document.getElementById("pause");
  const stopBtn = document.getElementById("stop");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const slowBtn = document.getElementById("slow");
  const normalBtn = document.getElementById("normal");
  const fastBtn = document.getElementById("fast");

  let audio = new Audio();
  let playlistSongs = [];
  let localSongs = [];
  let currentIndex = 0;

  // Mock songs for testing
  const loadSongs = () => {
    const formats = ["mp3", "wav", "ogg"];
    playlistSongs = ["song1.mp3", "song2.wav", "song3.ogg"];
    localSongs = ["local1.mp3", "local2.wav", "local3.ogg"];

    playlistSongs.forEach((song, index) => {
      const li = document.createElement("li");
      li.textContent = song;
      li.addEventListener("click", () => playSong(index));
      playlistEl.appendChild(li);
    });

    localSongs.forEach(song => {
      const li = document.createElement("li");
      li.textContent = song;
      localSongsEl.appendChild(li);
    });
  };

  // Play selected song
  const playSong = (index) => {
    currentIndex = index;
    audio.src = playlistSongs[index];
    audio.play();
    updatePlayPauseButton();
  };

  // Button functionalities
  playBtn.addEventListener("click", () => {
    if (!audio.src && playlistSongs.length > 0) {
      playSong(currentIndex);
    } else {
      audio.play();
    }
    updatePlayPauseButton();
  });

  pauseBtn.addEventListener("click", () => {
    audio.pause();
    updatePlayPauseButton();
  });

  stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    updatePlayPauseButton();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % playlistSongs.length;
    playSong(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + playlistSongs.length) % playlistSongs.length;
    playSong(currentIndex);
  });

  slowBtn.addEventListener("click", () => {
    audio.playbackRate = 0.75;
  });

  normalBtn.addEventListener("click", () => {
    audio.playbackRate = 1.0;
  });

  fastBtn.addEventListener("click", () => {
    audio.playbackRate = 1.5;
  });

  // Update play/pause button state
  const updatePlayPauseButton = () => {
    playBtn.disabled = !audio.paused;
    pauseBtn.disabled = audio.paused;
  };

  // Auto-play next song
  audio.addEventListener("ended", () => nextBtn.click());

  // Initialize app
  loadSongs();
  updatePlayPauseButton();
});

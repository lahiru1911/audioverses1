// GLOBAL VARIABLES
let audioPlayer = document.getElementById('audioPlayer');
let playlist = [];
let currentSongIndex = 0;

// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// SCAN LOCAL SONGS (Mock Example)
function scanSongs() {
    playlist = [
        { name: "Song 1", path: "song1.mp3" },
        { name: "Song 2", path: "song2.mp3" },
        { name: "Song 3", path: "song3.mp3" }
    ];
    populatePlaylist();
}

// POPULATE PLAYLIST
function populatePlaylist() {
    const playlistElement = document.getElementById('playlist');
    playlistElement.innerHTML = ""; // Clear previous list
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.name;
        li.onclick = () => playSong(index);
        playlistElement.appendChild(li);
    });
}

// PLAY SELECTED SONG
function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = playlist[index].path;
    audioPlayer.play();
}

// PLAYBACK CONTROLS
function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    playSong(currentSongIndex);
}

function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong(currentSongIndex);
}

// ADJUST PLAYBACK SPEED
function adjustPlaybackSpeed(speed) {
    audioPlayer.playbackRate = speed;
}

// ONLINE MUSIC DOWNLOADER
function downloadMusic() {
    const url = document.getElementById('downloadUrl').value;
    if (!url) {
        alert("Please enter a valid URL!");
        return;
    }

    // Simulating a download link
    const link = document.createElement('a');
    link.href = url;
    link.download = "downloaded_music.mp3";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Download initiated!");
}

// INITIATE SCAN ON LOAD
scanSongs();

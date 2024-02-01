const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');    
const playBtn = document.getElementById('play');    
const nextBtn = document.getElementById('next');    


// Music
const songs = [
    {
        name: '1-01 The Space in Between',
        displayName: 'The Space in Between',
        artist: 'How To Destroy Angels',
        albumCover: 'htda-cover',
    },
    {
        name: '02 Parasite',
        displayName: 'Parasite',
        artist: 'How To Destroy Angels',
        albumCover: 'htda-cover',
    },
    {
        name: '1-03 Fur Lined',
        displayName: 'Fur Lined',
        artist: 'How To Destroy Angels',
        albumCover: 'htda-cover',
    },
    {
        name: '1-04 BBB',
        displayName: 'BBB',
        artist: 'How To Destroy Angels',
        albumCover: 'htda-cover',
    },
    {
        name: '05 The Believers',
        displayName: 'The Believers',
        artist: 'How To Destroy Angels',
        albumCover: 'htda-cover',
    },
    {
        name: '1-06 A Drowning',
        displayName: 'A Drowning',
        artist: 'How To Destroy Angels',
        albumCover: 'htda-cover',
    }
];


// Check if playing
let isPlaying = false;

// Play song
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// Pause song
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Play or pause event listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.albumCover}.jpeg`;
}

// Current Song
let songIndex = 0; 

// Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length -1) {
        alert('This is the last song of the album.');
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        alert('There is no previous songs in the album.');
    }
    loadSong(songs[songIndex]);
    playSong();
}

// On load - Select first song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
    if (isPlaying) {
      const { duration, currentTime } = e.srcElement;
      // Update progress bar width
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
    }
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
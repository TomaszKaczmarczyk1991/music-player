const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

const prevBtn = document.getElementById('prev');    
const playBtn = document.getElementById('play');    
const nextBtn = document.getElementById('next');    



// Music
const songs = [
    {
        name: '01. The Space in Between',
        displayName: '01. The Space in Between',
        artist: 'How To Destroy Angels',
        album: 'HTDA',
        albumSrc: 'music/How To Destroy Angels - HTDA EP (2010)',
        albumCover: 'htda-cover',
    },
    {
        name: '02. Parasite',
        displayName: '02. Parasite',
        artist: 'How To Destroy Angels',
        album: 'HTDA',
        albumSrc: 'music/How To Destroy Angels - HTDA EP (2010)',
        albumCover: 'htda-cover',
    },
    {
        name: '03. Fur Lined',
        displayName: '03. Fur Lined',
        artist: 'How To Destroy Angels',
        album: 'HTDA',
        albumSrc: 'music/How To Destroy Angels - HTDA EP (2010)',
        albumCover: 'htda-cover',
    },
    {
        name: '04. BBB',
        displayName: '04. BBB',
        artist: 'How To Destroy Angels',
        album: 'HTDA',
        albumSrc: 'music/How To Destroy Angels - HTDA EP (2010)',
        albumCover: 'htda-cover',
    },
    {
        name: '05. The Believers',
        displayName: '05. The Believers',
        artist: 'How To Destroy Angels',
        album: 'HTDA',
        albumSrc: 'music/How To Destroy Angels - HTDA EP (2010)',
        albumCover: 'htda-cover',
    },
    {
        name: '06. A Drowning',
        displayName: '06. A Drowning',
        artist: 'How To Destroy Angels',
        album: 'HTDA',
        albumSrc: 'music/How To Destroy Angels - HTDA EP (2010)',
        albumCover: 'htda-cover',
    },
    {
        name: '01. Is It Love ft. Angela McCluskey',
        displayName: '01. Is It Love',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '02. Celebration',
        displayName: '02. Celebration',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '03. P & P - ft. Ab Soul',
        displayName: '03. P & P - ft. Ab Soul',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '04. She Needs Me ft. Javonte',
        displayName: '04. She Needs Me',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '05. I am (interlude)',
        displayName: '05. I am (interlude)',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '06. Wanna Be Heard',
        displayName: '06. Wanna Be Heard',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '07. I Do This ft. Jay Rock',
        displayName: '07. I Do This ft. Jay Rock',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '08. Uncle Bobby & Jason Keaton ft. Javonte',
        displayName: '08. Uncle Bobby & Jason Keaton ft. Javonte',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '09. Faith ft. Bj The Chicago Kid & Punch',
        displayName: '09. Faith ft. Bj The Chicago Kid & Punch',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '10. Trip',
        displayName: '10. Trip',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '11. Vanity Slaves',
        displayName: '11. Vanity Slaves',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '12. Far From Here ft. Schoolboy Q',
        displayName: '12. Far From Here ft. Schoolboy Q',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '13. Thanksgiving ft. Big Pooh',
        displayName: '13. Thanksgiving ft. Big Pooh',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '14. Let Me Be Me',
        displayName: '14. Let Me Be Me',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    {
        name: '15. Determined (ft. Ash Riser) BOUNS TRACK',
        displayName: '15. Determined (ft. Ash Riser) BOUNS TRACK',
        artist: 'Kendrick Lamar',
        album: 'The Kendrick Lamar EP',
        albumSrc: 'music/Kendrick Lamar EP (2009)',
        albumCover: 'Kendrick Lamar FT',
    },
    

];


// Check if playing
let isPlaying = false;

// Play song
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
    console.log('debugging: playSong works properly')
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
  music.src = `${song.albumSrc}/${song.name}.mp3`;
  image.src = `img/${song.albumCover}.jpeg`;
}

// Current Song
let songIndex = 0; 

// Next Song
function nextSong() {
    songIndex++;
    console.log('debugging: nextSong() works properly');
    if (songIndex > songs.length -1) {
        alert('This is the last song of the playlist.');
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
      // Calculate display for duration
      const durationMinutes = Math.floor(duration / 60);
      let durationSeconds = Math.floor(duration % 60);
      if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
      }
      // Delay switching duration element to avoid NaN displaying
      if (durationSeconds) {
          durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
      }

      // Calculate display for current
      const currentMinutes = Math.floor(currentTime / 60);
      let currentSeconds = Math.floor(currentTime % 60);
      if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
      }
      currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

// Set Volume Bar
function changeVolume(e) {
    let volume = e.offsetX / volumeRange.offsetWidth;
    console.log(volume);
    if (volume < 0.1) volume = 0;
    if (volume > 0.9) volume = 1;
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);
volumeRange.addEventListener('click', changeVolume);
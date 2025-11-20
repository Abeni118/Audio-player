const image=document.querySelector('img');
const title=document.getElementById('title')
const artist=document.getElementById('artist')
const music=document.querySelector('audio');
const prevBtn=document.getElementById('prev');
const playBtn=document.getElementById('play');
const nextBtn=document.getElementById('next');

// creat array for each of music 
const songs = [
  {
    name: 'mezmur-1',
    displayName: 'ምክንያት ስላለኝ ነው',
    artist: 'Mirtinesh',
    image: "image-1"
  },
  {
    name: 'mezmur-2',
    displayName: 'ለምን ጠላኸኝ ወንድሜ',
    artist: 'Tewdros Yosef',
    image: "image-2"
  },
  {
    name: 'mezmur-3',
    displayName: 'ታላቅ በሆነው',
    artist: 'Sister Lidya',
    image: "image-3"
  },
  {
    name: 'mezmur-4',
    displayName: 'ይላል አንደበቴ',
    artist: 'Tewedros Yosef',
    image: "image-4"
  }
];

let isPlaying=false;

function playSong(){
    isPlaying=true;
        playBtn.classList.replace('fa-play', 'fa-pause');
    music.play();
}
function pauseSong(){
    isPlaying=false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Pause');
    music.pauseSong();
}

// play or pause events

playBtn.addEventListener("click", function () {
  isPlaying ? pauseSong() : playSong();
});
//update dom 
function loadSong(song){
    title.textContent=song.displayName;
    artist.textContent=song.artist;
    music.src=`music/${song.name}.mp3`;
    image.src=`img/${song.image}.jpg` ;
}
//current song 
let songIndex = 0;


function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

loadSong(songs[songIndex]);
// event listner
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
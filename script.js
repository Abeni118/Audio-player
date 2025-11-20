const image=document.querySelector('img');
const title=document.getElementById('title')
const artist=document.getElementById('artst')
const music=document.querySelector('audio');
const prevBtn=document.getElementById('prev');
const playBtn=document.getElementById('play');
const nextBtn=document.getElementById('next');

// creat array for each of music 
const songs=[
{
   name:'ለምን ጠላኸኝ ወንድሜ ' ,
   displayname:'Orthodox Mezmur',
   artist:'Mirtinesh',
},
{
    name:'ለምን ጠላኸኝ ወንድሜ ',
    displayname:'Ethiopian mezmur',
    artist:'Tewdros Yosef'
},
{
    name:'ታላቅ በሆነው ',
    displayname:'Ethiopian mezmur',
    artist:'sister Lidya'
},
{
    name:'ይላል አንደበቴ ',
    displayname:'Ethiopian mezmur',
    artist:'Tewedros Yosef'
},
];

let isPlaying=false;

function playSong(){
    isPlaying=true;
    music.play();
}
function pauseSong(){
    isPlaying=false;
    music.pauseSong();
}

// play or pause events

playBtn.addEventListener("click", function () {
  isPlaying ? pauseSong() : playSong();
});
//update
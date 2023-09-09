    //     const music = document.querySelectorAll("audio");
    // const playBtn = document.getElementById("main");
    // const nextBtn = document.querySelector("next");
    // const prevBtn = document.querySelector("prev");
    // // Check IsPlaying
    // let isPlaying= false;

    // // Play

    // function playSong() {
    //     isPlaying = true;
    //     music.play();
    // }

    // function pauseSong() {
    //     isPlaying = false;
    //     music.pause();
    // }

    // // Play or Pause

    // playBtn.addEventListener("click", () => ( isPlaying? playSong() : pauseSong() ));
// const music = document.querySelector("audio");
// const playBtn = document.getElementById("main");
// const nextBtn = document.querySelector("next");
// const prevBtn = document.querySelector("prev");

// // Check IsPlaying
// let isPlaying= false;

// // Play
// function playSong() {
//     isPlaying = true;
//     music.play();
// }

// function pauseSong() {
//     isPlaying = false;
//     music.pause();
// }

// // Play or Pause
// playBtn.addEventListener("click", () => ( isPlaying? playSong() : pauseSong() ));
const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progresscontainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const music = document.querySelector("audio");
const playBtn = document.getElementById("main");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const durationHa = document.getElementById("duration");
const currentHa = document.getElementById("current")
// Check IsPlaying
 var  isPlaying = false;

const songs = [
    {
        name : "jacinto-1",
        displayName : "Electric Chill Machine",
        artists : "Elinto",
    },
    {
        name : "jacinto-2",
        displayName : "Seven Nation Army",
        artists : "Elinto",
    },
    {
        name : "jacinto-3",
        displayName : "Goodnight, Disco Queen",
        artists : "Darkest Void",
    },
    {
        name : "metric-1",
        displayName : "Front Row",
        artists : "Jacinto",
    },
]

console.log(songs.length);
// Play
function playSong() {
  isPlaying = true
        music.play();
        playBtn.classList.replace("fa-play", "fa-pause")
        playBtn.setAttribute("title", "Pause")
  
};

function pauseSong() {
        isPlaying = false;
        music.pause();
        playBtn.classList.replace( "fa-pause","fa-play")
        playBtn.setAttribute("title", "Play");

};

// Play or pause
    playBtn.addEventListener("click", () => ( isPlaying ?pauseSong() : playSong()  ));

// playSong();

function loadSong(song) {
    artist.textContent = song.artists;
    title.textContent = song.displayName;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
} 

// Current Song;

let songIndex = 0;

// Next Song

function nextSong() {
    songIndex++;
if (songIndex > songs.length -1) {
    songIndex = 0;
}
    console.log(songIndex);
    loadSong(songs[songIndex ]);
    playSong();
};

// Previous Song

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 4 -1
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
};

function updateProgressBar(e) {
   if (isPlaying) {
    const {duration, currentTime} = e.srcElement;
    // console.log(duration, currentTime);
    const progressPercent = (currentTime / duration ) * 100;
    progress.style.width = `${progressPercent}%`
    let durationMins = Math.floor(duration / 60);
     let durationsSecond = Math.floor(duration % 60);
     if (durationsSecond < 10) {
    durationsSecond = "0" + durationsSecond ;
     }
     if (durationsSecond) {
            durationHa.textContent = `${durationMins}: ${durationsSecond}`;
    }
    let currentMins = Math.floor(currentTime / 60);
    // console.log("minutes" , durationMins);
     let currentSecond = Math.floor(currentTime % 60);
     if (currentSecond < 10) {
    currentSecond = "0" + currentSecond ;
     }
     currentHa.textContent = `${currentMins}: ${currentSecond}`;
     
    };
   
};

function slideBar(e) {
    const width = this.clientWidth;
    console.log("width", width);
    const clickX= e.offsetX;
console.log("clickX", clickX);
const {duration} = music;
console.log(clickX / width);
music.currentTime = (clickX / width) * duration;
}
 


// Event Listener
 prevBtn.addEventListener("click", prevSong)
 nextBtn.addEventListener("click", nextSong)
music.addEventListener("timeupdate", updateProgressBar);
progresscontainer.addEventListener("click", slideBar);

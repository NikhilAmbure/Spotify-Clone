let isPlaying = false; // Flag to track if the song is currently playing
let songDuration = 300; // Duration of the song in seconds
let currentTime = 0; // Current time of the song in seconds
let intervalId; // Interval ID for song progress updates

let likedsongsId = false;

// Function to update the progress bar and song play time
function updateProgressBar() {
    let progress = (currentTime / songDuration) * 100; // Calculate progress percentage
    document.querySelector('.song-progress').style.width = progress + '%'; // Update width of progress bar

    let currentMinutes = Math.floor(currentTime / 60); // Calculate current minutes
    let currentSeconds = currentTime % 60; // Calculate current seconds
    let durationMinutes = Math.floor(songDuration / 60); // Calculate duration minutes
    let durationSeconds = songDuration % 60; // Calculate duration seconds
    document.querySelector('.song-time').textContent = formatTime(currentMinutes, currentSeconds); // Update song play time display
}

// Function to format time as mm:ss
function formatTime(minutes, seconds) {
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds; // Add leading zero if seconds < 10
}

// Function to toggle between play and pause
function togglePlayPause() {
    var playPauseButton = document.querySelector('.play-pause-button');
    var playPauseImg = playPauseButton.querySelector('.play-img');

    if (isPlaying) {
        clearInterval(intervalId); // Stop the interval for song progress updates
        isPlaying = false; // Update flag to indicate song is paused
        playPauseImg.src = '/Icons/new-play.png'; // Change src to play icon
        // music.pause();
    } else {
        intervalId = setInterval(function () {
            currentTime += 1; // Increment current time by 1 second
            updateProgressBar(); // Update progress bar
        }, 1000); // Update every second
        isPlaying = true; // Update flag to indicate song is playing
        playPauseImg.src = '/Icons/pause.png'; // Change src to pause icon
        // music.play();
    }
}


// function likedsongs() {
//     var likedsongsec = document.querySelector('.liked-songs');
//     var likedsongImg = likedsongsec.querySelector('.heart');

//     if(likedsongsId) {
//         likedsongImg.src = '/Icons/heart-regular-24.png';
//         likedsongsId = false;
//     } else {
//         likedsongsId = true;
//         likedsongImg.src = '/Icons/tick.png';
//     }
// }


// Volume Slider

function toggleMute() {
    var volumeSlider = document.getElementById('volumeSlider'); // Fixed selector
    var muteButton = document.querySelector('.mute-button');
    var muteButtonImg = muteButton.querySelector(".mute-img");
    // var tooltipBlock = document.querySelector('.tooltip');
    // var tooltipValue = tooltipBlock.querySelector("js-tooltip");

    if (volumeSlider.value > 0) {
        volumeSlider.value = 0;
        muteButtonImg.src = "/Icons/mute.png"; // Change image source to mute icon
        document.querySelector(".volume-value").innerHTML = '0';
        document.querySelector('.js-tooltip').innerHTML = 'Unmute';
    } else {
        document.querySelector(".volume-value").innerHTML = '50';
        volumeSlider.value = 50;
        muteButtonImg.src = '/Icons/volume.png'; // Change image source to volume icon
        document.querySelector('.js-tooltip').innerHTML = 'Mute';
    }
}


document.getElementById("volumeSlider").addEventListener("input", function() {
    var volume = this.value;
    this.style.background = 'linear-gradient(to right, #FFFFFF 0%, #FFFFFF ' + volume + '%, #d3d3d3 ' + volume + '%, #d3d3d3 100%)';
    // document.querySelector(".volume-value").textContent = volume; // Update volume value display
    // adjustVolume(volume);
});


// function adjustVolume(volume) {
//     // Implement logic to adjust volume in your application
//     console.log("Volume adjusted to: " + volume);
// }




// For Audio
const music = new Audio('Audio Files/Arcade.mp3');
// music.play();
const songs = [
    {
        id: '1',
        songName: `<p class="t1">Red Right Hand</p>
        <p class="sing-name">Nick Cave & The Bad Seeds, Flood</p>`,
        template: 'Songs-Template/1.png',
        songTime: '6:21',
    },
    {
        id: '2',
        songName: `<p class="t1">Arcade</p>
        <p class="sing-name">Duncan Laurence</p>`,
        template: 'Songs-Template/2.png',
        songTime: '3:04',
    },
    {
        id: '3',
        songName: `<p class="t1">At My Worst (feat. Kehlani)</p>
        <p class="sing-name">Pink Sweat$, Kehlani</p>`,
        template: 'Songs-Template/3.png',
        songTime: '2:49',
    },
    {
        id: '4',
        songName: `<p class="t1">Happier</p>
        <p class="sing-name">Marshmello, Bastille</p>`,
        template: 'Songs-Template/4.png',
        songTime: '3:34',
    },
    {
        id: '5',
        songName: `<p class="t1">I Don't Care (with Justin Beiber)</p>
        <p class="sing-name">Ed Sheeran & Justin Bieber</p>`,
        template: '/Songs-Template/5.png',
        songTime: '3:40',
    },
    {
        id: '6',
        songName: `<p class="t1">I'm an Albatraoz</p>
        <p class="sing-name">AronChupa, Little Sis Nora</p>`,
        template: '/Songs-Template/6.png',
        songTime: '2:47',
    },
    {
        id: '7',
        songName: `<p class="t1">MONTERO (Call me by your name)</p>
        <p class="sing-name">Lil Nas X</p>`,
        template: '/Songs-Template/7.png',
        songTime: '2:18',
    },
    {
        id: '8',
        songName: `<p class="t1">Old Town Road</p>
        <p class="sing-name">Lil Nas X</p>`,
        template: '/Songs-Template/8.png',
        songTime: '1:53',
    },
    {
        id: '9',
        songName: `<p class="t1">This Is what You Came For</p>
        <p class="sing-name">Calvin Harris, Rihanna</p>`,
        template: '/Songs-Template/9.png',
        songTime: '3:42',
    },
    {
        id: '10',
        songName: `<p class="t1">Treat You Better</p>
        <p class="sing-name">Shawn Mendes</p>`,
        template: '/Songs-Template/10.png',
        songTime: '3:08',
    }
];

Array.from(document.getElementsByClassName('new-songs-grid')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].template;
    e.getElementsByClassName('song-info')[0].innerHTML = songs[i].songName;
});



// To play the song when click on the button
let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', ()=> {
    if (music.paused || music.currentTime <= 0){
        music.play();

    } else {
        music.pause();
    }
});



let index = 0;
let template_play = document.querySelector('.template-section img');
let title_play = document.querySelector('.name');
// let background_change = document.querySelector('.songs-grid');

Array.from(document.getElementsByClassName('song-img')).forEach((e)=>{
    e.addEventListener('click', (el)=> {
        index = el.target.id;
        // console.log(index);
        music.src = `Audio Files/${index}.mp3`;
        template_play.src = `Songs-template/${index}.png`;
        togglePlayPause();
        music.play();

        let songTitles = songs.filter((ele) => {
            return ele.id == index;
        });

        songTitles.forEach(elem => {
            let { songName } = elem;
            // title_play.innerHTML = songName;
            // template_play.src = template;
        });

    // Array.from(document.querySelector('.song-info p'))[index].style.color = 'green';

    })
});













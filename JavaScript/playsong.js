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
    document.querySelector('.song-time').textContent = formatTime(currentMinutes, currentSeconds) + ' / ' + formatTime(durationMinutes, durationSeconds); // Update song play time display
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
        playPauseImg.src = '/Icons/play.png'; // Change src to play icon
    } else {
        intervalId = setInterval(function () {
            currentTime += 1; // Increment current time by 1 second
            updateProgressBar(); // Update progress bar
        }, 1000); // Update every second
        isPlaying = true; // Update flag to indicate song is playing
        playPauseImg.src = '/Icons/pause.png'; // Change src to pause icon
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

    if (volumeSlider.value > 0) {
        volumeSlider.value = 0;
        muteButtonImg.src = "/Icons/mute.png"; // Change image source to mute icon
        document.querySelector(".volume-value").innerHTML = '0';
    } else {
        document.querySelector(".volume-value").innerHTML = '50';
        volumeSlider.value = 50;
        muteButtonImg.src = '/Icons/volume.png'; // Change image source to volume icon
    }
}


document.getElementById("volumeSlider").addEventListener("input", function() {
    var volume = this.value;
    document.querySelector(".volume-value").textContent = volume; // Update volume value display
    // adjustVolume(volume);
});


// function adjustVolume(volume) {
//     // Implement logic to adjust volume in your application
//     console.log("Volume adjusted to: " + volume);
// }
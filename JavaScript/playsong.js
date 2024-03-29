let isPlaying = false; // Flag to track if the song is currently playing
let songDuration = 300; // Duration of the song in seconds
let currentTime = 0; // Current time of the song in seconds
let intervalId; // Interval ID for song progress updates

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
    if (isPlaying) {
        clearInterval(intervalId); // Stop the interval for song progress updates
        isPlaying = false; // Update flag to indicate song is paused
        document.querySelector('.play-pause-button').textContent = 'Play'; // Change button text to 'Play'
    } else {
        intervalId = setInterval(function () {
            currentTime += 1; // Increment current time by 1 second
            updateProgressBar(); // Update progress bar
        }, 1000); // Update every second
        isPlaying = true; // Update flag to indicate song is playing
        document.querySelector('.play-pause-button').textContent = 'Pause'; // Change button text to 'Pause'
    }
}
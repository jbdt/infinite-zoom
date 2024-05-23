const audio = document.getElementById('control-audio');
const buttonAudio = document.querySelector('.control-button-audio');

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        buttonAudio.textContent = '🔇';
    } else {
        audio.pause();
        buttonAudio.textContent = '🔊';
    }
}

const speedContainer = document.getElementById('control-speed');
const buttonSpeed = document.querySelector('.control-button-speed');

function toggleSpeed() {
    if (speedContainer.style.display === 'none') {
        speedContainer.style.display = 'block';;
        buttonSpeed.textContent = '✋🏻';
    } else {
        speedContainer.style.display = 'none';
        buttonSpeed.textContent = '🏃🏻‍♀️';
    }
}
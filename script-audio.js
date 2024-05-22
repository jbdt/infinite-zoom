const audio = document.getElementById('background-audio');
const button = document.querySelector('.control-button');

window.onload = function() {
    audio.play();
};

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        button.textContent = '🔇';
    } else {
        audio.pause();
        button.textContent = '🔊';
    }
}
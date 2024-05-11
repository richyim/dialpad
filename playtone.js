// Create an audio context (but don't start it yet)
let audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Function to play a note for a given frequency and duration
function playTone(frequency, duration) {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Listen for a touchend event on the window to start or resume the audio context
window.addEventListener('touchend', function() {
    // Resume the audio context
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}, false);

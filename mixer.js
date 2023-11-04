document.addEventListener("DOMContentLoaded", () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audio1 = document.getElementById("audio1");
    const audio2 = document.getElementById("audio2");
    const audio3 = document.getElementById("audio3");
    const slider1 = document.getElementById("slider1");
    const slider2 = document.getElementById("slider2");
    const slider3 = document.getElementById("slider3");

    const audioSources = [audio1, audio2, audio3];
    const gainNodes = audioSources.map((audio) => audioContext.createGain());

    audioSources.forEach((source, index) => {
        source.addEventListener("play", () => {
            const trackGain = gainNodes[index];
            source = audioContext.createMediaElementSource(source);
            source.connect(trackGain);
            trackGain.connect(audioContext.destination);
            trackGain.gain.value = slider1.value;
            slider1.addEventListener("input", () => {
                trackGain.gain.value = slider1.value;
            });
        });
    });
});

//This is for my audio grab in java.
const audio = document.getElementById('audio');

//Defining the sound for java followed by adding an event property.
const happySound = document.getElementById('happy-sound');
happySound.addEventListener('click', () => {
    audio.src = 'Happy.mp3';
    audio.play();
});

const sadSound = document.getElementById('sad-sound');
sadSound.addEventListener('click', () => {
    audio.src = 'Sad song.mp3';
    audio.play();
});

const danceSound = document.getElementById('dance-sound');
danceSound.addEventListener('click', () => {
    audio.src = 'Dance.mp3';
    audio.play();
});





//
const avatar = {
    name:"avatar"
    image:src
    audio:src
}
export const characters = [{}]
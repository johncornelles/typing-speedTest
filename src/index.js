const styleVariables = document.documentElement.style;
let timerInterval = setInterval(() => {
    let randHue = Math.floor(Math.random() * 360);
    styleVariables.setProperty('--hue', randHue);
}, 3000);

localStorage.clear()
const instructions = document.querySelector('#instructions');
const detailsH4 = document.querySelector('.details h4');
const detailsInput = document.querySelector('.details input');
const letsgo = document.querySelector('.details button');
const detailsH1 = document.querySelector('.details h1');
const instructionsCard = document.querySelector('.instructionsCard');
const instructionsBack = document.querySelector('.instructionsCard button');
const timerdiv = document.querySelector('#homeTimer');
let keyAudio = new Audio('./assets/key sound.mp3')
let swoosh = new Audio('./assets/swoosh.mp3')
let sweetSmile = new Audio('./assets/A Sweet Smile.mp3')
const muteIcon = document.querySelector('.mute')
const unmuteIcon = document.querySelector('.unmute')
instructions.onclick = () => {
    detailsH4.classList.toggle('inactive');
    detailsInput.classList.toggle('inactive');
    letsgo.classList.toggle('inactive');
    detailsH1.classList.toggle('inactive');
    instructionsCard.classList.toggle('instructionsCardActive');
}

instructionsBack.onclick = () => {
    detailsH4.classList.toggle('inactive');
    detailsInput.classList.toggle('inactive');
    letsgo.classList.toggle('inactive');
    detailsH1.classList.toggle('inactive');
    instructionsCard.classList.toggle('instructionsCardActive');
}

// audios
muteIcon.onclick = () => {
  sweetSmile.play();
  sweetSmile.loop = true;
  muteIcon.classList.add('inactiveAudio');
  unmuteIcon.classList.remove('inactiveAudio');
};

unmuteIcon.onclick = () => {
  sweetSmile.pause();
  sweetSmile.currentTime = 0;
  muteIcon.classList.remove('inactiveAudio');
  unmuteIcon.classList.add('inactiveAudio');
};

detailsInput.oninput = () => {
    keyAudio.pause()
    keyAudio.currentTime = 0
    keyAudio.play()
}

document.onclick = () => {
    swoosh.pause()
    swoosh.currentTime = 0
    swoosh.play()
}
// audio end
letsgo.onclick = () => {
    if (detailsInput.value.trim() === '') alert('Enter your nickname')
    else if(detailsInput.value.length > 4) alert('Maximum characters 4')
    else{
        letsgo.style.display = 'none'
        timerdiv.style.display = 'block'
        let name = detailsInput.value
        localStorage.setItem('name', name)
        let time = 3;
        timerdiv.textContent = time; 

        let timerInterval = setInterval(() => {
            time--;
            timerdiv.textContent = time
            if (time === 0) {
                timerdiv.textContent = `let's go`;
                clearInterval(timerInterval);
                location.href = './game.html'; 
            }
        }, 1000);
    }
}
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
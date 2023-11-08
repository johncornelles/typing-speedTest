let username = localStorage.getItem('name')
let wpm = localStorage.getItem('wpm')
let cpm = localStorage.getItem('cpm')
let mistakes = localStorage.getItem('mistakes')
const level = document.querySelector('.level')
const statsName = document.querySelector('.content h2')
const wpmDiv = document.querySelector('#wpm')
const cpmDiv = document.querySelector('#cpm')
const mistakesDiv = document.querySelector('#mistakes')
const improvementDiv = document.querySelector('#improvement')
let percent = 0;
let wpmLevel, feedback;
if (wpm < 30 || mistakes > 20) {
    wpmLevel = "Noob 🤓"
    feedback = "learn the basics"
}

else if(wpm > 60 && mistakes < 10) {
    wpmLevel = "Maniac ⚡"
    percent = 80;
    feedback = "you're doing great!"
}
else {
    wpmLevel = "Veteran 👮"
    percent = 30;
    feedback = "keep up the good work!"
}

level.textContent = `You are a ${wpmLevel}`

statsName.textContent = `${username}'s speed beats ${percent}% of the people`
wpmDiv.textContent = `${wpm} WPM`
cpmDiv.textContent = `${cpm} CPM`
mistakesDiv.textContent = `${mistakes} mistakes`
improvementDiv.textContent = feedback
document.querySelector('#home').onclick = () => {
    localStorage.clear();
    location.href = './index.html'
}

document.querySelector('#tryagain').onclick = () => {
    const values = ['wpm', 'cpm', 'mistakes']
    for (let e of values) localStorage.removeItem(e)
    location.href = './game.html'
}
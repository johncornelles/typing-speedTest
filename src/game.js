const typingTestParagraphs = [
  "The quick brown fox jumps over the lazy dog. In the middle of difficulty lies opportunity. Success is not final, failure is not fatal: It is the courage to continue that counts. Life is really simple, but we insist on making it complicated. Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. Happiness is not something ready made. It comes from your own actions. It does not matter how slowly you go as long as you do not stop. Simplicity is the ultimate sophistication. The only way to do great work is to love what you do. I have not failed. I've just found 10,000 ways that won't work.",
  "Life is a journey that must be traveled no matter how bad the roads and accommodations. There are no shortcuts to any place worth going. Change your thoughts and you change your world. Don't watch the clock; do what it does. Keep going. Your time is limited, don't waste it living someone else's life. The only person you are destined to become is the person you decide to be. The future belongs to those who believe in the beauty of their dreams. Everything you've ever wanted is on the other side of fear. Believe you can and you're halfway there. You miss 100% of the shots you don't take.",
  "Do not wait for leaders; do it alone, person to person. There is no substitute for hard work. It always seems impossible until it is done. You have to learn the rules of the game, and then you have to play better than anyone else. The only limit to our realization of tomorrow will be our doubts of today. Success usually comes to those who are too busy to be looking for it. The best way to predict the future is to create it. The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "The only person you are destined to become is the person you decide to be. The future belongs to those who believe in the beauty of their dreams. Everything you've ever wanted is on the other side of fear. Believe you can and you're halfway there. You miss 100% of the shots you don't take. Do not wait for leaders; do it alone, person to person. There is no substitute for hard work. It always seems impossible until it is done. You have to learn the rules of the game, and then you have to play better than anyone else. The only limit to our realization of tomorrow will be our doubts of today.",
  "Success usually comes to those who are too busy to be looking for it. The best way to predict the future is to create it. The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "The journey of a thousand miles begins with one step. What lies behind us and what lies before us are tiny matters compared to what lies within us. Life is 10% what happens to us and 90% how we react to it. The only way to do great work is to love what you do. Don't be pushed around by the fears in your mind. Be the change that you wish to see in the world. It's not the load that breaks you down; it's the way you carry it.",
  "In the middle of difficulty lies opportunity. Success is not final, failure is not fatal: It is the courage to continue that counts. Life is really simple, but we insist on making it complicated. Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. Happiness is not something ready made. It comes from your own actions. It does not matter how slowly you go as long as you do not stop. Simplicity is the ultimate sophistication. The only way to do great work is to love what you do. I have not failed. I've just found 10,000 ways that won't work.",
  "The only person you are destined to become is the person you decide to be. The future belongs to those who believe in the beauty of their dreams. Everything you've ever wanted is on the other side of fear. Believe you can and you're halfway there. You miss 100% of the shots you don't take. Do not wait for leaders; do it alone, person to person. There is no substitute for hard work. It always seems impossible until it is done. You have to learn the rules of the game, and then you have to play better than anyone else. The only limit to our realization of tomorrow will be our doubts of today.",
  "Success usually comes to those who are too busy to be looking for it. The best way to predict the future is to create it. The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "The journey of a thousand miles begins with one step. What lies behind us and what lies before us are tiny matters compared to what lies within us. Life is 10% what happens to us and 90% how we react to it. The only way to do great work is to love what you do. Don't be pushed around by the fears in your mind. Be the change that you wish to see in the world. It's not the load that breaks you down; it's the way you carry it."
];
// changing background colors
const styleVariables = document.documentElement.style;
let timerInterval = setInterval(() => {
    let randHue = Math.floor(Math.random() * 360);
    styleVariables.setProperty('--hue', randHue);
}, 5000);
// variables
const inputText = document.querySelector('.textInput')
const mistakes = document.querySelector('#mistakes')
let nmistakes = parseInt(mistakes.textContent)
let keyAudio = new Audio('assets/key sound.mp3')
let swoosh = new Audio('assets/swoosh.mp3')
let sweetSmile = new Audio('assets/A Sweet Smile.mp3')
let coundown = new Audio('assets/countdown.mp3')
// bcg audio
sweetSmile.play()
sweetSmile.loop = true
let Index = 0
// select the p element inside the textTotype div
const textDiv = document.querySelector('.textTotype p')
var randomIndex; // global randomIndex to keep track of the para form data array
randomPara = () => {
    randomIndex = Math.floor(Math.random() * typingTestParagraphs.length);
    // add the each letter inside a span element to check for values as span is inline using forEach 
    typingTestParagraphs[randomIndex].split('').forEach(e => textDiv.innerHTML += `<span>${e}</span>`)
}
randomPara()
// getting inputs from user 
inputText.oninput = () => {
    keyAudio.pause()
    keyAudio.currentTime = 0
    keyAudio.play()
    // select all span elements using querySelectorAll
    const textTobeWritten = textDiv.querySelectorAll('span')
    // split the input values into charaters to compare with the current text to be written
    let current = inputText.value.split('')[Index]
    // if the given input is backspace that is null right or wrong classes as well as mistakes should be removed
    if (current == null) {
        Index--;
        textTobeWritten[Index].classList.remove("right", "wrong")
        // nmistakes should never be less than 0
        if (nmistakes > 0){
            nmistakes--
            mistakes.textContent = nmistakes
        }
    }
    // handle the true or false cases
    else{
        // when it matches, change color to green by adding class as right
        if(textTobeWritten[Index].textContent == current) textTobeWritten[Index].classList.add('right')
        else {
            // increase the mistake count and add wrong class and update it
            textTobeWritten[Index].classList.add('wrong')
            nmistakes++
            mistakes.textContent = nmistakes;
        }
        // whether it is right or not, index should be increased in order to check next characters each time
        // backspaces will be handled in the previous null condition
        Index++
    }
}

let time = 60;
const timerdiv = document.querySelector('.actualContent h1')
// the timer should start only after clicking the timer div
timerdiv.onclick = () => {
    // the focus should be only on the input box, user cannot see it as it is hidden
    document.onclick = () => {
        inputText.focus()
        swoosh.pause()
        swoosh.currentTime = 0
        swoosh.play()
    }
    sweetSmile.pause()
    coundown.play()
    let actualTimer = setInterval(() => {
    time--
    timerdiv.textContent = time
    // handle the best case that is if the typer types the given words bbefore the time given that nmistakes are 0 or if time crosses the limit
    if ((nmistakes === 0 && inputText.value === typingTestParagraphs[randomIndex]) || time <= 0) {
        clearInterval(actualTimer);
        // input text should be disabled once this condition is true
        inputText.disabled = true
        result()
    }
}, 1000);
}

CPMWPM = () => {
    let timeTaken = 60 - time;
    // split words entered and characters
    let WPM = inputText.value.split(' ').length;
    let CPM = inputText.value.split('').length;
    // caalculate WPM and CPM
    WPM = Math.floor((WPM / timeTaken) * 60)
    CPM = Math.floor((CPM / timeTaken) * 60)
    localStorage.setItem('wpm', WPM)
    localStorage.setItem('cpm', CPM)
    localStorage.setItem('mistakes', nmistakes)
}

result = () => {
  CPMWPM();
  const youDidWellElement = document.querySelector('.youdidwell');
  youDidWellElement.style.display = 'block';
}

document.querySelector('.results').onclick = () => {
    location.href = './results.html'
}
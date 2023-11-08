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

const styleVariables = document.documentElement.style;
let timerInterval = setInterval(() => {
    let randHue = Math.floor(Math.random() * 360);
    styleVariables.setProperty('--hue', randHue);
}, 5000);

let Index = 0
const textDiv = document.querySelector('.textTotype p')
var randomIndex;
randomPara = () => {
    randomIndex = Math.floor(Math.random() * typingTestParagraphs.length);
    typingTestParagraphs[randomIndex].split('').forEach(e => textDiv.innerHTML += `<span>${e}</span>`)
    document.onclick = () => inputText.focus()
}

randomPara()

const inputText = document.querySelector('.textInput')
const mistakes = document.querySelector('#mistakes')
let nmistakes = parseInt(mistakes.textContent)
inputText.oninput = () => {
    const textTobeWritten = textDiv.querySelectorAll('span')
    let current = inputText.value.split('')[Index]
    if (current == null) {
        Index--;
        textTobeWritten[Index].classList.remove("right", "wrong")
        if (nmistakes > 0){
            nmistakes--
            mistakes.textContent = nmistakes
        }
    }
    else{
        if(textTobeWritten[Index].textContent == current) textTobeWritten[Index].classList.add('right')
        else {
            textTobeWritten[Index].classList.add('wrong')
            nmistakes++
            mistakes.textContent = nmistakes;
        }
        Index++
    }
    
}

let time = 60;
const timerdiv = document.querySelector('.actualContent h1')
timerdiv.onclick = () => {
    let actualTimer = setInterval(() => {
    time--
    timerdiv.textContent = time
    if ((nmistakes === 0 && inputText.value === typingTestParagraphs[randomIndex]) || time <= 0) {
        inputText.disabled = true
        clearInterval(actualTimer);
        result()
    }
}, 1000);
}

CPMWPM = () => {
    let timeTaken = 60 - time;
    let WPM = inputText.value.split(' ').length;
    let CPM = inputText.value.split('').length;
    WPM = (WPM / timeTaken) * 60
    CPM = (CPM / timeTaken) * 60
    localStorage.setItem('wpm', WPM)
    localStorage.setItem('cpm', CPM)
    localStorage.setItem('mistakes', nmistakes)
}

result = () => {
  CPMWPM();
  console.log(time)
  const youDidWellElement = document.querySelector('.youdidwell');
  youDidWellElement.style.display = 'block';
}

document.querySelector('.results').onclick = () => {
    location.href = './results.html'
}
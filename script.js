const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const subText = document.getElementById('sub-text');
const mainGif = document.getElementById('mainGif');

let yesFontSize = 1.2;
let yesPadding = 15;

// List of your secondary GIFs to cycle through when "No" is hovered
const extraGifs = ['good-morning.gif', 'dancing-cat-cat.gif', 'cat-jump.gif'];
let gifIndex = 0;

function moveNoButton() {
    // 1. Better Bounds Calculation
    const padding = 20; // Keep it at least 20px from edges
    const maxWidth = window.innerWidth - noBtn.offsetWidth - padding;
    const maxHeight = window.innerHeight - noBtn.offsetHeight - padding;

    // Ensure it doesn't go negative
    const randomX = Math.max(padding, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxHeight));

    noBtn.style.position = 'fixed'; // Fixed is safer for "out of screen" issues
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // 2. Change GIF occasionally when they try to click "No"
    gifIndex = (gifIndex + 1) % extraGifs.length;
    mainGif.src = extraGifs[gifIndex];

    growYesButton();
}

function growYesButton() {
    yesFontSize += 0.3; 
    yesPadding += 4;    
    yesBtn.style.fontSize = `${yesFontSize}rem`;
    yesBtn.style.padding = `${yesPadding}px ${yesPadding * 2}px`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents flickering on mobile
    moveNoButton();
});

yesBtn.addEventListener('click', () => {
    noBtn.style.display = 'none';
    subText.style.display = 'none';
    
    question.innerHTML = "YAY! See you on the 14th! 😻";
    question.style.fontFamily = "'Pacifico', cursive";
    question.style.fontSize = "3.5rem";

    // Final "Winning" GIF
    mainGif.src = "cat-jump.gif"; 
    yesBtn.style.display = 'none';
});

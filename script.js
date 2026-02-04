const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const subText = document.getElementById('sub-text');
const mainGif = document.getElementById('mainGif');

let yesFontSize = 1.2;
let yesPadding = 15;

// Your GIFs
const extraGifs = ['good-morning.gif', 'dancing-cat-cat.gif', 'cat-jump.gif'];
let gifIndex = 0;

function moveNoButton() {
    const padding = 30; // Safer padding
    const maxWidth = window.innerWidth - noBtn.offsetWidth - padding;
    const maxHeight = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxHeight));

    noBtn.style.position = 'fixed'; // Use fixed to ensure it stays in view relative to viewport
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Cycle GIFs
    gifIndex = (gifIndex + 1) % extraGifs.length;
    mainGif.src = extraGifs[gifIndex];

    growYesButton();
}

function growYesButton() {
    yesFontSize += 0.4;
    yesPadding += 5;
    yesBtn.style.fontSize = `${yesFontSize}rem`;
    yesBtn.style.padding = `${yesPadding}px ${yesPadding * 2}px`;
}

// Logic to trigger confetti
function triggerConfetti() {
    // Basic cannon from left
    confetti({
        origin: { x: 0, y: 0.8 },
        angle: 60,
        spread: 55,
        startVelocity: 60,
        scalar: 1.2,
        colors: ['#ff0000', '#ffa500', '#ffff00'] // Red, Orange, Yellow
    });

    // Basic cannon from right
    confetti({
        origin: { x: 1, y: 0.8 },
        angle: 120,
        spread: 55,
        startVelocity: 60,
        scalar: 1.2,
        colors: ['#ff0000', '#ffa500', '#ffff00']
    });
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener('click', () => {
    noBtn.style.display = 'none';
    subText.style.display = 'none';
    
    question.innerHTML = "YAY! See you on the 14th! 😻";
    question.style.fontSize = "3.5rem";
    
    // Final GIF
    mainGif.src = "cat-jump.gif"; 
    
    // Hide Yes button
    yesBtn.style.display = 'none';

    // Trigger Confetti!
    triggerConfetti();
    
    // Optional: Keep firing confetti for a few seconds
    let duration = 3 * 1000;
    let end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff0000', '#ffa500']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff0000', '#ffa500']
        });
    
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});

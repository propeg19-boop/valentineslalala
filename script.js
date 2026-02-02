const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const subText = document.getElementById('sub-text');
const mainGif = document.getElementById('mainGif');

// Variables to track button size
let yesFontSize = 1.2;
let yesPadding = 15;

// Function to move the "No" button
function moveNoButton() {
    // Get window dimensions
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;

    // Generate random coordinates
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    // Apply new position
    noBtn.style.position = 'absolute'; // Make it absolute so it can move anywhere
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Grow the "Yes" button
    growYesButton();
}

// Function to grow the "Yes" button
function growYesButton() {
    yesFontSize += 0.4; // Increase font size
    yesPadding += 5;    // Increase padding

    yesBtn.style.fontSize = `${yesFontSize}rem`;
    yesBtn.style.padding = `${yesPadding}px ${yesPadding * 2}px`;
}

// Event Listeners for "No" button (Desktop hover & Mobile touch)
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', moveNoButton); // For mobile support!

// Event Listener for "Yes" button
yesBtn.addEventListener('click', () => {
    // 1. Hide the No button and Subtext
    noBtn.style.display = 'none';
    subText.style.display = 'none';

    // 2. Change the Text
    question.innerHTML = "YAY! See you on the 14th! 😻";
    question.style.fontSize = "3rem";

    // 3. Change the GIF to the "Jumping Cat"
    // Using a placeholder Tenor link for jumping cat
    mainGif.src = "https://media1.tenor.com/m/aKFaZbrZFY8AAAAC/happy-cat-jumping.gif"; 

    // 4. Reset Yes button styles to look like a normal element or hide it
    yesBtn.style.display = 'none';
});
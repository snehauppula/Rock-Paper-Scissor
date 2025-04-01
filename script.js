// DOM elements
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const resultTextElement = document.getElementById('result-text');
const userChoiceElement = document.getElementById('user-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetButton = document.getElementById('reset-btn');

// Game state
let userScore = 0;
let computerScore = 0;

// Choice icons
const choiceIcons = {
    rock: '<i class="fas fa-hand-rock"></i>',
    paper: '<i class="fas fa-hand-paper"></i>',
    scissors: '<i class="fas fa-hand-scissors"></i>'
};

// Initialize game
function init() {
    userScore = 0;
    computerScore = 0;
    updateScore();
    resetChoiceDisplays();
    resultTextElement.textContent = 'Choose your weapon!';
}

// Update score display
function updateScore() {
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
}

// Reset choice displays
function resetChoiceDisplays() {
    userChoiceElement.querySelector('.choice-icon').innerHTML = '?';
    computerChoiceElement.querySelector('.choice-icon').innerHTML = '?';
    
    // Remove any animation classes
    userChoiceElement.querySelector('.choice-icon').className = 'choice-icon';
    computerChoiceElement.querySelector('.choice-icon').className = 'choice-icon';
}

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Determine winner
function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    }
    
    return 'computer';
}

// Display result
function displayResult(userChoice, computerChoice, winner) {
    // Update choice displays
    userChoiceElement.querySelector('.choice-icon').innerHTML = choiceIcons[userChoice];
    computerChoiceElement.querySelector('.choice-icon').innerHTML = choiceIcons[computerChoice];
    
    // Apply appropriate animation classes
    const userChoiceIcon = userChoiceElement.querySelector('.choice-icon');
    const computerChoiceIcon = computerChoiceElement.querySelector('.choice-icon');
    
    // Remove any existing animation classes
    userChoiceIcon.className = 'choice-icon';
    computerChoiceIcon.className = 'choice-icon';
    
    // Set result text and animations based on winner
    if (winner === 'user') {
        resultTextElement.textContent = 'You win!';
        userChoiceIcon.classList.add('win-animation');
        computerChoiceIcon.classList.add('lose-animation');
    } else if (winner === 'computer') {
        resultTextElement.textContent = 'Computer wins!';
        userChoiceIcon.classList.add('lose-animation');
        computerChoiceIcon.classList.add('win-animation');
    } else {
        resultTextElement.textContent = "It's a draw!";
        userChoiceIcon.classList.add('draw-animation');
        computerChoiceIcon.classList.add('draw-animation');
    }
}

// Handle user choice
function handleChoice(event) {
    const userChoice = event.currentTarget.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);
    
    // Update scores
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    
    updateScore();
    displayResult(userChoice, computerChoice, winner);
}

// Event listeners
choiceButtons.forEach(button => {
    button.addEventListener('click', handleChoice);
});

resetButton.addEventListener('click', init);

// Initialize game on load
init();
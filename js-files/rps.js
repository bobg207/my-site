// left-side
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const playerChoiceImg = document.querySelector('#player-choice')

// right-side
const computerChoiceImg = document.querySelector('#computer-choice')

// middle
const playersScore = document.querySelector('.player-wins')
const computersScore = document.querySelector('.computer-wins')
const tiesScore = document.querySelector('.ties')
const outcomeText = document.querySelector('.outcome-text')
const outcomeImg = document.querySelector('#arrow')
const newGameBtn = document.querySelector('#new-game')

// bottom
const playerRounds = document.querySelector('#player-rounds')
const computerRounds = document.querySelector('#computer-rounds')

// constant vars
const choiceList = ['../images/rps-images/rock.png', '../images/rps-images/paper.png', './images/rps-images/scissors.png', './images/rps-images/rps.png']
const arrowList = ['../images/rps-images/left-arrow.png', '../images/rps-images/left-right.png', './images/rps-images/right-arrow.png']
const playerWinMsg = "Player Wins!! 😀"
const computerWinMsg = "Computer Wins!! 😠"
const tieMsg = "That's a Tie 😯"
const newGameMsg = "Let's Play!! First to five wins."
const arrowSliding = [
    {transform: 'translateX(0px)'},
    {transform: 'translateX(-100px)'},
    {transform: 'translateX(100px)'},
    {transform: 'translateX(0px)'},
]
const textPulse = [
    {transform: 'scale(1)'},
    {transform: 'scale(1.25)'},
    {transform: 'scale(1)'},
]
const timing = {
    duration: 2000,
    iterations: 3
}

let tiesCurrentScore = 0
let playerCurrentScore = 0
let computerCurrentScore = 0
let playerChoice
let computerChoice
let computerRoundImg
let playerRoundImg
let result

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    return getRandomNumber(0, 2)
}

function displayChoice(player, computer) {
    playerChoiceImg.setAttribute('src', choiceList[player])
    computerChoiceImg.setAttribute('src', choiceList[computer])
}

function displayResults(result) {
    switch (result) {
        case 0:
            playersScore.textContent = playerCurrentScore;
            outcomeText.textContent = playerWinMsg;
            outcomeImg.setAttribute('src', arrowList[result]);
            break;
        case 1:
            tiesScore.textContent = tiesCurrentScore;
            outcomeText.textContent = tieMsg;
            outcomeImg.setAttribute('src', arrowList[result]);
            break;
        case 2:
            computersScore.textContent = computerCurrentScore;
            outcomeText.textContent = computerWinMsg;
            outcomeImg.setAttribute('src', arrowList[result]);
            break;
    }
}

function decideWinner(player, computer) {
    if ((player === 0 && computer === 2) || (player === 1 && computer === 0) || (player === 2 && computer === 1)) {
        playerCurrentScore += 1;
        result = 0;
    } else if ((player === 2 && computer === 0) || (player === 0 && computer === 1) || (player === 1 && computer === 2)) {
        computerCurrentScore += 1;
        result = 2;
    } else {
        tiesCurrentScore += 1;
        result = 1;
    }

    displayResults(result);

    if (playerCurrentScore === 5 || computerCurrentScore === 5) {
        gameOver();
    }
}

function newGame() {
    playerCurrentScore = 0;
    computerCurrentScore = 0;
    tiesCurrentScore = 0;

    playersScore.textContent = playerCurrentScore;
    tiesScore.textContent = computerCurrentScore;
    computersScore.textContent = tiesCurrentScore;
    outcomeText.textContent = newGameMsg;
    outcomeImg.setAttribute('src', arrowList[1]);
    playerChoiceImg.setAttribute('src', choiceList[3]);
    computerChoiceImg.setAttribute('src', choiceList[3]);

    while (playerRounds.firstChild) {
        playerRounds.removeChild(playerRounds.firstChild)
        computerRounds.removeChild(computerRounds.firstChild)
    }

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

function gameOver() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    switch (result) {
        case 0:
            outcomeText.textContent = "Congratulations!! You outsmarted the computer.";
            outcomeImg.setAttribute('src', arrowList[result]);
            break;
        case 2:
            outcomeText.textContent = "The Computer won this match but keep trying.";
            outcomeImg.setAttribute('src', arrowList[result]);
            break;
    }

    outcomeImg.animate(arrowSliding, timing)
    outcomeText.animate(textPulse, timing)
}

function addRoundOutcome(player, computer) {
    roundPlayerImg = document.createElement('img')
    roundComputerImg = document.createElement('img')

    roundPlayerImg.setAttribute('src', choiceList[player])
    roundComputerImg.setAttribute('src', choiceList[computer])

    if (result === 0) {
        roundPlayerImg.style.backgroundColor = 'green'
        roundComputerImg.style.backgroundColor = 'red'
    } else if (result === 2) {
        roundPlayerImg.style.backgroundColor = 'red'
        roundComputerImg.style.backgroundColor = 'green'
    } else {
        roundPlayerImg.style.backgroundColor = 'yellow'
        roundComputerImg.style.backgroundColor = 'yellow'
    }
    
    playerRounds.appendChild(roundPlayerImg)
    computerRounds.appendChild(roundComputerImg)

}

rockBtn.addEventListener('click', function() {
    playerChoice = 0;
    computerChoice = getComputerChoice();
    displayChoice(playerChoice, computerChoice);
    decideWinner(playerChoice, computerChoice);
    addRoundOutcome(playerChoice, computerChoice);
})

paperBtn.addEventListener('click', function() {
    playerChoice = 1;
    computerChoice = getComputerChoice();
    displayChoice(playerChoice, computerChoice);
    decideWinner(playerChoice, computerChoice);
    addRoundOutcome(playerChoice, computerChoice);
})

scissorsBtn.addEventListener('click', function() {
    playerChoice = 2;
    computerChoice = getComputerChoice();
    displayChoice(playerChoice, computerChoice);
    decideWinner(playerChoice, computerChoice);
    addRoundOutcome(playerChoice, computerChoice);
})

newGameBtn.addEventListener('click', newGame)

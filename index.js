const options =
    [{ name: 'rock', icon: "&#9994;" }, { name: 'paper', icon: "&#9995;" }, { name: 'scissors', icon: "&#9996;" }]
let count = 0;
let playerCount = 0;
let computerCount = 0;

const modal = document.getElementById("myModal");
const modalText = document.getElementById("modal-finish-text");
const scoreComputer = document.getElementById('score-computer');
const scorePlayer = document.getElementById('score-player');
const playerOption = document.getElementById("player-option");
const computerOption = document.getElementById("computer-option")

const computerPlay = () => {
    return options[Math.floor(Math.random() * options.length)].name;
}

const playRound = (playerOpt) => {
    let computerSelection = computerPlay();
    let playerSelection = options.find(option => option.name === playerOpt);
    playerOption.innerHTML = playerSelection.icon;
    computerOption.innerHTML = options.find(option => option.name === computerSelection).icon;
    count++

    if (playerSelection.name == 'rock' && computerSelection == 'paper') {
        computerCount++
    }
    else if (playerSelection.name == 'rock' && computerSelection == 'scissors') {
        playerCount++
    }
    else if (playerSelection.name == 'paper' && computerSelection == 'scissors') {
        computerCount++
    }
    else if (playerSelection.name == 'paper' && computerSelection == 'rock') {
        playerCount++
    }
    else if (playerSelection.name == 'scissors' && computerSelection == 'paper') {
        playerCount++
    }
    else if (playerSelection.name == 'scissors' && computerSelection == 'rock') {
        computerCount++
    }
    scoreComputer.textContent = computerCount;
    scorePlayer.textContent = playerCount;
    game(playerCount, computerCount)
}

const game = (playerCount, computerCount) => {
    console.log(playerCount, computerCount)
    if (playerCount == 5) {
        modalText.innerHTML = 'Congratulations!! You have won!'
        modal.style.display = "block";
        console.log("Player has won game")
    }
    else if (computerCount == 5) {
        modalText.innerHTML = "Oh no! The computer won."
        modal.style.display = "block";
        console.log("Computer has won game")
    }
    else if (playerCount > computerCount) {
        console.log('Congrats Player. You have won the round.')
    }
    else if (computerCount > playerCount) {
        console.log('Sorry. The computer has won this round.')
    }
    else {
        console.log('Draw. Better luck next time.')
    }
}
const closeModal = () => {
    modal.style.display = "none";
}

const newGame = () => {
    count = 0
    playerCount = 0
    computerCount = 0
    scoreComputer.innerHTML = computerCount
    scorePlayer.innerHTML = playerCount
    playerOption.innerHTML = ""
    computerOption.innerHTML = ""
    modal.style.display = "none";
}

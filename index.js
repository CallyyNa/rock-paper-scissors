const options =
    [{ name: 'rock', icon: "&#9994;" }, { name: 'paper', icon: "&#9995;" }, { name: 'scissors', icon: "&#9996;" }]
let count = 0;
let playerCount = 0;
let computerCount = 0;

const computerPlay = () => {
    return options[Math.floor(Math.random() * options.length)].name;
}

const playRound = (playerOption) => {
    let computerSelection = computerPlay();
    let playerSelection = options.find(option => option.name === playerOption);
    document.getElementById("player-option").innerHTML = playerSelection.icon;
    document.getElementById("computer-option").innerHTML = options.find(option => option.name === computerSelection).icon;
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
    document.getElementById('score-computer').textContent = computerCount;
    document.getElementById('score-player').textContent = playerCount;
    game(playerCount, computerCount)
}

const game = (playerCount, computerCount) => {
    console.log(playerCount, computerCount)
    if (playerCount == 5) {
        document.getElementById("myModal").style.display = "block";
        console.log("Player has won game")
    }
    else if (computerCount == 5) {
        document.getElementById("myModal").style.display = "block";
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


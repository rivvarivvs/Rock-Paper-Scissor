// Definição aleatória do que o computador vai jogar

function computerPlay() {
    let possibilities = ['Rock', 'Paper', 'Scissor'];
    let result = possibilities[Math.floor(Math.random()*possibilities.length)];
    return result;
}

// Perguntar o que o user vai jogar e definição de parâmetros 

const playerSelection = () => prompt('rock, paper or scissors?');
const computerSelection = () => computerPlay();

function playRound(playerSelection, computerSelection) {

    // Tornar os parâmetros lowercase para não haver problemas com case sensitivity
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    // Conditionals para ver quem ganha
    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            return 'draw';
        } else if (computerChoice === 'paper') {
            return 'computer won';
        } else {
            return 'player won'
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'player won';
        } else if (computerChoice === 'paper') {
            return 'draw';
        } else {
            return 'computer won'
        }
    } else {
        if (computerChoice === 'rock') {
            return 'computer won';
        } else if (computerChoice === 'paper') {
            return 'player won';
        } else {
            return 'draw'
        }
    }
}


console.log(playRound(playerSelection, computerSelection));

// Função para criar um jogo com 5 rondas
function game() {

    let playerWins = 0;
    let computerWins = 0;

    // for loop para repetir as rondas 5 vezes e guardar registo de quem ganha
    for (let i = 0; i < 5; i++) {
        playerSelection();
        computerSelection();
        playRound();
        if (playRound() === 'player won') {
            console.log('player won!');
            playerWins += 1;
        } else if (playRound() === 'computer won') {
            console.log('computer won!');
            computerWins += 1;
        } else (
            console.log("it's a draw!");
            return;
        )
    }

    // declaração do vencedor
    if (playerWins > computerWins) {
        console.log('player won the game1')
    } else if (computerWins > playerWins) {
        console.log('computer won the game!')
    } else {
        console.log('it\'s a draw!');
    }
}
let playGame = confirm("Shall we play rock,paper and scissors?");
if (playGame) {
    let playerChoice = prompt("Please enter rock, paper or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
            let result = playerOne === computer ? "Tie Game!" : playerOne === "rock" && computer === "paper" ? `playerOne : ${playerOne}\n computer : ${computer}\n computer wins!` : playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\n computer: ${computer}\n Computer wins!` : playerOne === "scissors" && computer === "rock" ?  `playerOne : ${playerOne}\n computer: ${computer}\n Computer Wins!`: `playerOne: ${playerOne}\n computer : ${computer}\n playerOne wins!`;
            alert(result);
            let playAgain = confirm("Play Again");
            playAgain ? location.reload(): alert ("Ok, thanks for playing.")
        }
        else {
            alert("You didn't enter rock, paper or scissors.");
        }
    }
    else {
        alert("I think you have changed your mind");
    }
}
else {
    alert("We may play it later");
}
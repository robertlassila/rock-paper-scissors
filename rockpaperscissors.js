let userChoice = prompt("Choose rock, paper or scissors");
        userChoice = userChoice.toLowerCase();
    
        let randomNumber = Math.random();

        let computerChoice = "";
        if (randomNumber < .33) {
            computerChoice = 'rock'
        } else if (randomNumber < .66) {
            computerChoice = 'paper'
        } else if (randomNumber > .66) {
            computerChoice = 'scissors'
        };
        console.log('Computer chose ' + computerChoice);
        if (userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissors') {
            if (userChoice == computerChoice) {
                console.log("It's a draw!")
            } else if (userChoice == 'rock') {
                if (computerChoice == 'paper') {
                    console.log('Computer wins')
                } else {
                    console.log('You won')
                }
            } else if (userChoice == 'paper') {
                if (computerChoice == 'scissors') {
                    console.log('Computer wins')
                } else {
                    console.log('You won')
                }
            } else if (userChoice == 'scissors') {
                if (computerChoice == 'rock') {
                    console.log('Computer wins')
                } else {
                    console.log('You won')
                }
            }
        } else {
            console.log("Looks like you didn't pick a valid option")
        }
// initalizing some variables needed later //
        var rounds = 5; 
        let neededToWin;
        let computerScore = 0;
        let playerScore = 0;
        let computerSelection;
        let playerSelection;
        let result;
        let score;
        let count = 1;

        if (rounds == 3) {
                console.log(rounds)
                document.getElementById("3").style.backgroundColor = "yellow"
                document.getElementById("7").style.backgroundColor = "#ddd"
                document.getElementById("5").style.backgroundColor = "#ddd"
                neededToWin = 2;
            } else if (rounds == 7) {
                document.getElementById("7").style.backgroundColor = "yellow"
                document.getElementById("3").style.backgroundColor = "#ddd"
                document.getElementById("5").style.backgroundColor = "#ddd"
                neededToWin = 4;
            } else {
                rounds = 5
                document.getElementById("5").style.backgroundColor = "yellow"
                document.getElementById("3").style.backgroundColor = "#ddd"
                document.getElementById("7").style.backgroundColor = "#ddd"
                neededToWin = 3;
            }
        

        // creating the let's play div and message //
        // this div will be updating with all round results//
        const container = document.querySelector('#container');
        const main = document.querySelector("#main")
        const scoreKeeper = document.querySelector(".score")
        const content = document.createElement('div');
        const content2 = document.createElement('div');
        const content3 = document.createElement('div');
        
        content3.classList.add('win');
        content3.textContent = `HUMAN VS. COMPUTER`
        content3.style.color = "#0f4c75"
        main.prepend(content3)

        content.classList.add('content');
        content.textContent = `BEST OF 5!`;
        container.appendChild(content);

        content2.classList.add('score1');
        content2.innerHTML = `${playerScore} | ${computerScore}`
        scoreKeeper.appendChild(content2)

        const roundsButton = Array.from(document.querySelectorAll('.rounds'));
        rounds = roundsButton.forEach(button => button.addEventListener('click', roundsSelection, false));

        function roundsSelection (event) {
            rounds = event.target.id
            content.classList.add('content');
            content.textContent = `BEST OF ${rounds}!`;
            container.removeChild(container.lastElementChild)
            container.prepend(content);            
            score = 0
            if (rounds == 3) {
                console.log(rounds)
                document.getElementById("3").style.backgroundColor = "yellow"
                document.getElementById("7").style.backgroundColor = "#ddd"
                document.getElementById("5").style.backgroundColor = "#ddd"
                neededToWin = 2;
            } else if (rounds == 7) {
                document.getElementById("7").style.backgroundColor = "yellow"
                document.getElementById("3").style.backgroundColor = "#ddd"
                document.getElementById("5").style.backgroundColor = "#ddd"
                neededToWin = 4;
            } else {
                rounds = 5
                document.getElementById("5").style.backgroundColor = "yellow"
                document.getElementById("3").style.backgroundColor = "#ddd"
                document.getElementById("7").style.backgroundColor = "#ddd"
                neededToWin = 3;
            }
            playerScore = 0;
            computerScore = 0;
            content2.innerHTML = `${playerScore} | ${computerScore}`
            count = 1
            content3.style.color = "#0f4c75"
            content3.style.textShadow = ".2vw .2vw #00b7c2"
            content3.textContent = `HUMAN VS. COMPUTER`


        } 


        // button listener, when clicked a round will be played with corresponding rock, paper, scissor choice //
        const button = Array.from(document.querySelectorAll('.btn'));
        playerSelection = button.forEach(button => button.addEventListener('click', playerClick, false));

        // main function that runs a round of the game // 
        function playerClick(event) {


            const roundsButton = Array.from(document.querySelectorAll('.rounds'));
            roundsButton.forEach(button => button.addEventListener('click', roundsSelection, false));


            if (rounds == 3) {
                console.log(rounds)
                document.getElementById("3").style.backgroundColor = "yellow"
                document.getElementById("7").style.backgroundColor = "#ddd"
                document.getElementById("5").style.backgroundColor = "#ddd"
                neededToWin = 2;
            } else if (rounds == 7) {
                document.getElementById("7").style.backgroundColor = "yellow"
                document.getElementById("3").style.backgroundColor = "#ddd"
                document.getElementById("5").style.backgroundColor = "#ddd"
                neededToWin = 4;
            } else {
                rounds = 5
                document.getElementById("5").style.backgroundColor = "yellow"
                document.getElementById("3").style.backgroundColor = "#ddd"
                document.getElementById("7").style.backgroundColor = "#ddd"
                neededToWin = 3;
            }

            content3.classList.add('win');
            content3.textContent = `ROUND ${count}`
            content3.style.color = "#0f4c75"
            content3.style.textShadow = ".2vw .2vw #00b7c2"
            main.prepend(content3)

            // this only runs if playing a second game //
            let nodeCount = document.getElementById("container").childElementCount;

            if (nodeCount === 1) {
                container.removeChild(container.lastElementChild)
            } else if (nodeCount == 2) {
                container.removeChild(container.lastElementChild)
                container.removeChild(container.lastElementChild)
            }



            // assigns button pushed to playerselection variable //
            playerSelection = event.target.id;

            // function to randomly assign computer their choice //
            function computerPlay() {
                let comPlay = Math.floor(Math.random() * 3) + 1;
                if (comPlay === 1) {
                    return "Rock";
                } else if (comPlay === 2) {
                    return "Paper";
                } else if (comPlay === 3) {
                    return "Scissors";
                }
            };
            computerSelection = computerPlay();
            computerSelection = computerSelection.toLowerCase();

            // runs a single round of the game //
            function singleRound(playerSelection, computerSelection) {
                if (playerSelection === computerSelection) {
                    result = `This round was a tie.`
                    score = `${playerScore} | ${computerScore}`
                    main.prepend(content3)
                } else if (playerSelection === 'rock'){
                    if (computerSelection === "paper") {
                        computerScore++;
                        result = `You lose. Computer picked paper.` 
                    } else {
                        playerScore++;
                        result = `You win. Computer picked scissors.` 
                    }
                } else if (playerSelection === 'paper'){
                    if (computerSelection === "scissors") {
                        computerScore++;
                        result = `You lose. Computer picked scissors.` 
                    } else {
                        playerScore++;
                        result = `You win. Computer picked rock.` 
                    }
                } else if (playerSelection === 'scissors'){
                    if (computerSelection === "rock") {
                        computerScore++;
                        result = `You lose. Computer picked rock.` 
                    } else {
                        playerScore++;
                        result = `You win. Computer picked paper.` 
                    }
                }
                score = `${playerScore} | ${computerScore}`;
                const content = document.createElement('div');
                content.classList.add('content');
                content2.classList.add('score1');
                content.textContent = result.toUpperCase();
                content2.innerHTML = score
                container.prepend(content)
                return
            } 
            singleRound(playerSelection, computerSelection)
            count ++;
            // gives final results after a player eaches 5 points //
            if (computerScore >= neededToWin | playerScore >= neededToWin) {

                if (computerScore > playerScore) {
                    content3.classList.add('win');
                    content3.textContent = `THE COMPUTER BEAT YOU IN ${count - 1} ROUNDS!`
                    content3.style.textShadow = ".2vw .2vw azure"
                    content3.style.color = "red"
                    main.prepend(content3)
                } else {
                    content3.classList.add('win');
                    content3.textContent = `YOU BEAT THE COMPUTER IN ${count - 1} ROUNDS!`
                    content3.style.textShadow = ".2vw .2vw azure"
                    content3.style.color = "green"
                    main.prepend(content3)
                }

                // reinitalizing the scores and count for the next round //
                computerScore = 0;
                playerScore = 0;
                count = 1;
            };      
        };
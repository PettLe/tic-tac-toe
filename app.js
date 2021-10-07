const Gameboard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const Player = (marker) => {
        marker: marker;
        return {marker};
    };

    const player1 = Player("X");
    const player2 = Player("O");

    

    console.log(player1.marker);
 //   console.log(gameBoard); 

//When square is clicked, push value to array
    const gameController = (() => {

        //Push the player marker to the array
        let clickNum = 0;
        for (i = 0; i < gameBoard.length; i++) {
            const square = document.getElementsByClassName("square");

            square[i].addEventListener("click", function(e) {
                const index = e.target.getAttribute("value");


             //Determine whose turn
                clickNum++;
                console.log(clickNum);
            if (gameBoard[index] === "") {
                if (clickNum % 2 === 0) {
                gameBoard[index] = player2.marker;
                } else {
                    gameBoard[index] = player1.marker;
                }
                console.log(gameBoard);
                console.log();
            }
                checkWinner();
                displayController();
            })
        }

    })();

    //Display the winner. Somehow
    const checkWinner = (function() {
    if (gameBoard[0] !== "" && gameBoard[0] ===  gameBoard[1] && gameBoard[1] === gameBoard[2]) {
        if (gameBoard[0] === player1.marker) {
        return console.log("Pelaaja 1 voitti");
        } else {
            return console.log("Pelaaja 2 voitti");}
    } else if (gameBoard[3] !== "" && gameBoard[3]=== gameBoard[4] && gameBoard[4] === gameBoard[5]) {
            if (gameBoard[3] === player1.marker) {
            return console.log("Pelaaja 1 voitti");
        } else {
            return console.log("Pelaaja 2 voitti");}
    } else if (gameBoard[6] !== "" && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
        if (gameBoard[6] === player1.marker) {
            return console.log("Pelaaja 1 voitti");
            } else {
            return console.log("Pelaaja 2 voitti");}
    } else if (gameBoard[0] !== "" && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
        if (gameBoard[0] === player1.marker) {
            return console.log("Pelaaja 1 voitti");
        } else {
            return console.log("Pelaaja 2 voitti");}
    } else if (gameBoard[1] !== "" && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
        if (gameBoard[1] === player1.marker) {
            return console.log("Pelaaja 1 voitti");
            } else {
            return console.log("Pelaaja 2 voitti");}
    } else if (gameBoard[2] !== "" && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
        if (gameBoard[2] === player1.marker) {
            return console.log("Pelaaja 1 voitti");
            } else {
            return console.log("Pelaaja 2 voitti");}
    } else if (gameBoard[0] !== "" && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
        if (gameBoard[0] === player1.marker) {
            return console.log("Pelaaja 1 voitti");
            } else {
            return console.log("Pelaaja 2 voitti");}
    } else if (gameBoard[2] !== "" && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
        if (gameBoard[2] === player1.marker) {
            return console.log("Pelaaja 1 voitti");
            } else {
            return console.log("Pelaaja 2 voitti");}
    } else if (!gameBoard.includes("")) {
        return console.log("Tasoissa ollaan!");
    }

});


    //Render the gameboard array
    const displayController = (function() {
        const square = document.getElementsByClassName("square");
        for (i = 0; i < gameBoard.length; i++) {
        square[i].textContent = gameBoard[i];
        if (square[i].textContent === "O") {
            square[i].classList.add("O");
        }
        
        }

    });

})();
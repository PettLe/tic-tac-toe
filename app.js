const Gameboard = (() => {
    let gameBoard = ["X", "", "", "", "", "", "", "", ""];

    const Player = (marker) => {
        marker: marker;
        return {marker};
    };

    const player1 = Player("X");
    const player2 = Player("O");


    console.log(player1.marker);
//    gameBoard[4] = "X";
//    console.log(gameBoard); Nää toimii tyhjäänkin arrayhyn

//When square is clicked, push value to array
    const gameController = (function() {
        for (i = 0; i < gameBoard.length; i++) {
            const square = document.getElementsByClassName("square");
            //   square.dataset.index = i;
            square[i].addEventListener("click", function(e) {
                console.log(e.target);
            if (gameBoard[2] === "") {
                gameBoard[2] = player2.marker;
                console.log(gameBoard);
                //    gameBoard[i].push("X");
            }
                displayController();
            })
        }
    })();
    //gameController();

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

    //TÄTÄ EI TARVITA LOPULLISESSA, TESTI VAIN
    displayController();

})();
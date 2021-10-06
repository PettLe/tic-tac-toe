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
    const gameController = (() => {
        for (i = 0; i < gameBoard.length; i++) {
            const square = document.getElementsByClassName("square");
            square[i].addEventListener("click", function(e) {
                const index = e.target.getAttribute("value");
                console.log(i);
                console.log(e.target.getAttribute("value"));
            if (gameBoard[index] === "") {
                gameBoard[index] = player2.marker;
                console.log(gameBoard);
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
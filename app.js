const Gameboard = (() => {
    let gameBoard = ["X", "O", "O", "X", "O", "X", "O", "X", "X"];

    const Player = (marker) => {

        return {marker};
    };

    const player1 = Player("x");
    const player2 = Player("o");

    console.log(player1.marker);
    console.log(player2.marker);

    const gameController = (function() {
//When square is clicked, push value to array
    });

    const displayController = (function() {
//Render the gameboard array
        const square = document.getElementsByClassName("square");
        for (i = 0; i < gameBoard.length; i++) {
        square[i].textContent = gameBoard[i];
        if (square[i].textContent === "O") {
            square[i].classList.add("O");
        }
        }

    })();

})();
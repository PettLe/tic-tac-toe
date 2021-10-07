const Gameboard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const Player = (name, marker) => {
        this.name = name;
        this.marker = marker;
        return {name, marker};
    };

    const player1 = Player(document.getElementById("player1Name").value, "X");
    const player2 = Player(document.getElementById("player2Name").value, "O");


    let clickNum = 0;
    const gameController = (() => {

        //Push the player marker to the array when square is clicked
        for (i = 0; i < gameBoard.length; i++) {
            const square = document.getElementsByClassName("square");
            square[i].addEventListener("click", function(e) {
                const index = e.target.getAttribute("value");
                console.log(player1.name);

             //Determine whose turn
                clickNum++;
            if (gameBoard[index] === "") {
                if (clickNum % 2 === 0) {
                gameBoard[index] = player2.marker;
                } else {
                    gameBoard[index] = player1.marker;
                }
            }
                checkWinner();
                displayController();
            })
        }

    })();


    //Check winning conditions
    const checkWinner = (function() {
    if (gameBoard[0] !== "" && gameBoard[0] ===  gameBoard[1] && gameBoard[1] === gameBoard[2]) {
        if (gameBoard[0] === player1.marker) {
        return winner(player1.name);
        } else {
            return winner(player2.name);}
    } else if (gameBoard[3] !== "" && gameBoard[3]=== gameBoard[4] && gameBoard[4] === gameBoard[5]) {
            if (gameBoard[3] === player1.marker) {
            return winner(player1.name);
        } else {
            return winner(player2.name);}
    } else if (gameBoard[6] !== "" && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
        if (gameBoard[6] === player1.marker) {
            return winner(player1.name);
            } else {
            return winner(player2.name);}
    } else if (gameBoard[0] !== "" && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
        if (gameBoard[0] === player1.marker) {
            return winner(player1.name);
        } else {
            return winner(player2.name);}
    } else if (gameBoard[1] !== "" && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
        if (gameBoard[1] === player1.marker) {
            return winner(player1.name);
            } else {
            return winner(player2.name);}
    } else if (gameBoard[2] !== "" && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
        if (gameBoard[2] === player1.marker) {
            return winner(player1.name);
            } else {
            return winner(player2.name);}
    } else if (gameBoard[0] !== "" && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
        if (gameBoard[0] === player1.marker) {
            return winner(player1.name);
            } else {
            return winner(player2.name);}
    } else if (gameBoard[2] !== "" && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
        if (gameBoard[2] === player1.marker) {
            return winner(player1.name);
            } else {
            return winner(player2.name);}
    } else if (!gameBoard.includes("")) {
        return winner("gameTie");
    }

});

    const winner = (function(name) {
        const playerWin = `Congratulations ${name}, you are the Winner!`;
        const board = document.getElementById("board");
        board.style.display = "none";
        const body = document.querySelector("body");
        const winScreen = document.createElement("div");
        if (name === "gameTie") {
            winScreen.textContent = "It's a Tie!";
        } else {
        winScreen.textContent = playerWin;
        }
        body.insertBefore(winScreen, board);
    })

    //Play / Restart button
    const playBtn = (function() {
    const form = document.querySelector("form");
    const playBtn = document.getElementById("playBtn");
    const board = document.getElementById("board");
    const body = document.querySelector("body");
    playBtn.addEventListener("click", function() {
        if (body.childNodes.length > 17) {
        body.removeChild(body.childNodes[3]);}
        form.style.display = "none";
        board.style.display = "flex";
        playBtn.textContent = "Restart";
        clickNum = 0;
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        displayController();
    })})()

    //Render the gameboard array
    const displayController = (function() {
        const square = document.getElementsByClassName("square");
        for (i = 0; i < gameBoard.length; i++) {
            square[i].classList.remove("O");
        square[i].textContent = gameBoard[i];
        if (square[i].textContent === "O") {
            square[i].classList.add("O");
        }}
    });

})();
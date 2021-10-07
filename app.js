const Gameboard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const Player = (name, marker) => {
        this.name = name;
        this.marker = marker;
        return {name, marker};
    };


    let name1 = document.getElementById("player1Name").value;
    let name2 = document.getElementById("player2Name").value;
    const player1 = Player(name1, "X");
    const player2 = Player(name2, "O");

    
    console.log(player1.name);

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

    //Display the winner


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
        return console.log(gameTie);
    }

});

    const winner = (function(name) {
        const playerWin = `Congratulations ${name}, you are the Winner!`;
        const gameTie = "It's a Tie!";
        const board = document.getElementById("board");
        board.style.display = "none";
        const body = document.querySelector("body");
        const winScreen = document.createElement("div");
        //winScreen.id = "winScreen";
        winScreen.textContent = playerWin;
        body.insertBefore(winScreen, board);
    })

    //Play / Restart button
    const form = document.querySelector("form");
    const playBtn = document.getElementById("playBtn");
    const board = document.getElementById("board");
    const winScreen = document.getElementById("winScreen");
    playBtn.addEventListener("click", function() {
      //  winScreen.style.display = "none";
        form.style.display = "none";
        board.style.display = "flex";
        playBtn.textContent = "Restart";
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        displayController();
    })

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
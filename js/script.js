{
  const playGame = function (playerInput) {
    clearMessages();

    /*Funkcje*/
    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      }

      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    };

    const displayResult = function (argComputerMove, argPlayerMove) {
      console.log("moves: ", argComputerMove, argPlayerMove);
      if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
        printMessage("Tym razem Przegrywasz :(");
      } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
        printMessage("Tym razem Przegrywasz :(");
      } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
        printMessage("Tym razem Przegrywasz :(");
      } else if (argComputerMove == argPlayerMove) {
        printMessage("Remis, spróbuj Ponownie");
      } else {
        printMessage("Wybierz poprawne id Ruchu");
      }
    };

    /*Losowanie Ruchu Komputera*/
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana liczba to: " + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage("Mój ruch to: " + computerMove);

    /*Wybranie Ruchu przez Gracza*/

    console.log("Gracz wpisał: " + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage("Twój ruch to: " + playerMove);

    displayResult(computerMove, playerMove);
  };

  const playRock = document.getElementById("play-rock");

  playRock.addEventListener("click", function () {
    playGame(1);
  });

  const playPaper = document.getElementById("play-paper");

  playPaper.addEventListener("click", function () {
    playGame(2);
  });

  const playScissors = document.getElementById("play-scissors");

  playScissors.addEventListener("click", function () {
    playGame(3);
  });
}

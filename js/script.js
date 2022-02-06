
function playGame(playerInput){
	clearMessages();

/*Funkcje*/
	function getMoveName(argMoveId){
		if(argMoveId == 1){
			return 'kamień';
		} if(argMoveId == 2){
			return 'papier';
		} if(argMoveId == 3){
			return 'nożyce';
		}

		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}

	function displayResult(argComputerMove, argPlayerMove){
		console.log( 'moves: ', computerMove, playerMove);
		if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
			return 'Ty wygrywasz!';
		} if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
			return 'Tym razem Przegrywasz :(';
		} if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
			return 'Tym razem Przegrywasz :(';
		} if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
			return 'Ty wygrywasz!';
		} if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
			return 'Ty wygrywasz!';
		} if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
			return 'Tym razem Przegrywasz :(';
		} if(argComputerMove == argPlayerMove){
			return 'Remis, spróbuj Ponownie';
		} if(argPlayerMove != ('kamień' &&  'papier' && 'nożyce')){
			return 'Wybierz poprawne id Ruchu';
		}
	}

	/*Losowanie Ruchu Komputera*/
	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);

	printMessage('Mój ruch to: ' + computerMove);


	/*Wybranie Ruchu przez Gracza*/

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);

	printMessage('Twój ruch to: ' + playerMove);

	/*Wyswietlenie Wyniku*/
	let gameResult = displayResult(computerMove, playerMove);

	printMessage(gameResult);
}

document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
  });

document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
  });

document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
  });
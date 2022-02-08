
{const playGame = function(playerInput){
		clearMessages();

		/*Funkcje*/
		const getMoveName = function(argMoveId){
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

		const displayResult = function(argComputerMove, argPlayerMove){
			console.log( 'moves: ', argComputerMove, argPlayerMove);
			if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
				printMessage('Ty wygrywasz!');
			} if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
				printMessage('Tym razem Przegrywasz :(');
			} if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
				printMessage('Tym razem Przegrywasz :(');
			} if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
				printMessage('Ty wygrywasz!');
			} if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
				printMessage('Ty wygrywasz!');
			} if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
				printMessage('Tym razem Przegrywasz :(');
			} if(argComputerMove == argPlayerMove){
				printMessage('Remis, spróbuj Ponownie');
			} if(argPlayerMove != 'kamień' &&  argPlayerMove != 'papier' && argPlayerMove != 'nożyce'){
				printMessage('Wybierz poprawne id Ruchu');
			}
		}

		/*Losowanie Ruchu Komputera*/
		const randomNumber = Math.floor(Math.random() * 3 + 1);

		console.log('Wylosowana liczba to: ' + randomNumber);

		const argComputerMove = getMoveName(randomNumber);

		/*if(randomNumber == 1){
			computerMove = 'kamień';
		}
		else if(randomNumber == 2){
			computerMove = 'papier';
		}
		else if(randomNumber == 3){
			computerMove = 'nożyce';
		}*/

		printMessage('Mój ruch to: ' + argComputerMove);


		/*Wybranie Ruchu przez Gracza*/

		console.log('Gracz wpisał: ' + playerInput);

		const argPlayerMove = getMoveName(playerInput);

		/*if(playerInput == 1){
			playerMove = 'kamień';
		} 
		else if(playerInput == 2){
			playerMove = 'papier';
		}
		else if(playerInput == 3){
			playerMove = 'nożyce';
		}*/

		printMessage('Twój ruch to: ' + argPlayerMove);

		/*if( computerMove == 'kamień' && playerMove == 'papier'){
		printMessage('Ty wygrywasz!');
		} else if( computerMove == 'kamień' && playerMove == 'nożyce'){
			printMessage('Ty przegrywasz!');
			}
		else if( computerMove == 'papier' && playerMove == 'kamień'){
			printMessage('Ty przegrywasz!');
			}
		else if( computerMove == 'papier' && playerMove == 'nożyce'){
			printMessage('Ty wygrywasz!');
			}
		else if( computerMove == 'nożyce' && playerMove == 'kamień'){
			printMessage('Ty wygrywasz!');
			}
		else if( computerMove == 'nożyce' && playerMove == 'papier'){
			printMessage('Ty przegrywasz!');
			}
		else if( computerMove == playerMove ){
			printMessage('Remis');
			}
		else if( playerMove > 3 && playerMove < 0 ){
			printMessage('Wpisz poprawny numer');
			}
		else if( playerMove == 'nieznany ruch'){
			printMessage('Wybierz Ruch');
			}*/	

		displayResult(argComputerMove, argPlayerMove);
	}

	const playRock = document.getElementById('play-rock');
	
	playRock.addEventListener('click', function(){
		playGame(1);
	});

	const playPaper = document.getElementById('play-paper');
	
	playPaper.addEventListener('click', function(){
		playGame(2);
	});

	const playScissors = document.getElementById('play-scissors');
	
	playScissors.addEventListener('click', function(){
		playGame(3);
	});
}	
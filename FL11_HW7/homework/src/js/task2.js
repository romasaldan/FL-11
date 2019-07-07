let playGame = confirm('Do you want to play a game?');
if (playGame) {
	let prize = 0;
	let counterGames = 1;
	let playerSpentThreeAttempts = false;
	do {
		const STANDART_PRIZE = 100;
		const START_LENGTH_OF_INTERVAL = 8;
		const STEP_OF_CHANGE = 4;
		let lengthOfInterval = START_LENGTH_OF_INTERVAL+(counterGames-1)*STEP_OF_CHANGE;
		// we choosed winninfNumber=-1 firstly because we have tidy probability that expressions on line 13 will be uqual -1, it possibles when Math.random() return 0. But it is very unlikeky. If it  happens we will choose winningNumberAgain 
		let winningNumber=-1;
		while (winningNumber===-1) {
			winningNumber = Math.ceil(Math.random()*(lengthOfInterval+1)-1);
		}
		console.log(winningNumber);
		const MAX_AMOUNT_OF_ATTEMPTS = 3;
		for (let i=0;i<MAX_AMOUNT_OF_ATTEMPTS;i++) {
			let numberOfUser = +prompt('Choose a roulette pocket number from 0 to '+lengthOfInterval+'\n'+'Attempts left: '+(MAX_AMOUNT_OF_ATTEMPTS-i)+'\n'+'Total prize:'+prize+'$\nPossible prize on current attempt: '+STANDART_PRIZE*Math.pow(2,counterGames-1)/Math.pow(2,i)+'$');
			if (numberOfUser===winningNumber) {
				prize+=STANDART_PRIZE*Math.pow(2,counterGames-1)/Math.pow(2,i);
				console.log(prize)
				counterGames++;
				break;
			}
			if (i===MAX_AMOUNT_OF_ATTEMPTS-1) {
				playerSpentThreeAttempts = true;
			}
		}
		if (!playerSpentThreeAttempts) {
			var stopGame =confirm('Congratulation, you won! Your prize is:'+prize+'$. Do you want to continue?');
			if (!stopGame) {
				alert('Thank you for your participation. Your prize is: '+prize+'$');	
				let playAgain = confirm('Do you want to play again?');
				if (playAgain) {
					prize = 0;
					counterGames = 1;
					playerSpentThreeAttempts = false;
					stopGame = true;
				}				
			}
		} else {
			alert('Thank you for your participation. Your prize is: '+0+'$');
			let playAgain = confirm('Do you want to play again?');
			if (playAgain) {
				prize = 0;
				counterGames = 1;
				playerSpentThreeAttempts = false;
				stopGame = true;
			}
		}
	} while (stopGame);
} else {
	alert('You did not become a billionaire, but can.');
}
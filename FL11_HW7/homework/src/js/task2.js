let playGame = confirm('Do you want to play a game?');
if (playGame) {
	let prize = 0;
	let counterGames = 1;
	let playerSpentThreeAttempts = false;
	let doNotStopGame = true; 
	do {
		const STANDART_PRIZE = 100;
		const START_LENGTH_OF_INTERVAL = 8;
		const STEP_OF_CHANGE = 4;
		let lengthOfInterval = START_LENGTH_OF_INTERVAL+(counterGames-1)*STEP_OF_CHANGE;
		// we choosed winninfNumber=-1 firstly because we have tidy probability that expressions on line 13 will be uqual -1, it possibles when Math.random() return 0. But it is very unlikeky. If it  happens we will choose winningNumberAgain 
		const START_VALUE_FOR_CALCULATING_iNTERVAL = -1;
		let winningNumber=START_VALUE_FOR_CALCULATING_iNTERVAL;
		while (winningNumber===START_VALUE_FOR_CALCULATING_iNTERVAL) {
			winningNumber = Math.ceil(Math.random()*(lengthOfInterval+1)-1);
		}
		const MAX_AMOUNT_OF_ATTEMPTS = 3;
		for (let i=0;i<MAX_AMOUNT_OF_ATTEMPTS;i++) {
			const COEFFICIENT =2;
			let expectPrize =STANDART_PRIZE*Math.pow(COEFFICIENT,counterGames-1)/Math.pow(COEFFICIENT,i);
			let AttempsLeftMessage ='Attempts left: '+(MAX_AMOUNT_OF_ATTEMPTS-i)+'\n';
			let possiblePrize ='Possible prize on current attempt: '+expectPrize+'$';
			let lengthOfCurrentInterval ='Choose a roulette pocket number from 0 to '+lengthOfInterval+'\n';
			let totalPrizeMessage ='Total prize: '+prize+'$\n';
			let numberOfUser = +prompt(lengthOfCurrentInterval+AttempsLeftMessage+totalPrizeMessage+possiblePrize);
			if (numberOfUser===winningNumber) {
				prize+=STANDART_PRIZE*Math.pow(COEFFICIENT,counterGames-1)/Math.pow(COEFFICIENT,i);
				counterGames++;
				break;
			}
			if (i===MAX_AMOUNT_OF_ATTEMPTS-1) {
				playerSpentThreeAttempts = true;
			}
		}
		if (!playerSpentThreeAttempts) {
			doNotStopGame = confirm('Congratulation, you won! Your prize is:'+prize+'$. Do you want to continue?');
			if (!doNotStopGame) {
				alert('Thank you for your participation. Your prize is: '+prize+'$');	
				let playAgain = confirm('Do you want to play again?');
				if (playAgain) {
					prize = 0;
					counterGames = 1;
					playerSpentThreeAttempts = false;
					doNotStopGame = true;
				}				
			}
		} else {
			alert('Thank you for your participation. Your prize is: '+0+'$');
			let playAgain = confirm('Do you want to play again?');
			if (playAgain) {
				prize = 0;
				counterGames = 1;
				playerSpentThreeAttempts = false;
				doNotStopGame = true;
			} else {
				doNotStopGame = false;
			}
		}
	} while (doNotStopGame);
} else {
	alert('You did not become a billionaire, but can.');
}
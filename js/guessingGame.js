/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.


var playersGuess,
    winningNumber,
    guessCounter=0,
    


winningNumber = generateWinningNumber();

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random()*100);
};

// Fetch the Players Guess

function playersGuessSubmission(e){
	e.preventDefault();
	guessCounter++;
	playersGuess = +$("#guess").val();
	checkGuess();
}

$(document).ready(function(){
	$(".guessButton").on('click',playersGuessSubmission);
})

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
		$('#sys_output').find('p').remove();
		$('#sys_output').removeClass('cold');
	if (playersGuess === winningNumber){
		$('.guessButton').addClass('hidden');
		$('#sys_output').append("<p>You Win!</p>");
		$('#sys_output').find('p').addClass('success');
		$('#sys_output').animate({'font-size': '60px' }, 'fast');
		$('#sys_output').fadeOut(3000);
	} else {
		$('#sys_output').append("<p>Try Again!</p>");
		$('#sys_output').find('p').addClass('fail');
		$('#sys_output').addClass('cold');		
		$('#sys_output').animate({'font-size': '60px' }, 'fast');
		$('#sys_output').fadeOut(3000);	
	}
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

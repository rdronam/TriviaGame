$(document).ready(function() {


function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();


$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	generateHTML();

	timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
	
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		

		clearInterval(theClock);
		generateWin();
	}
	else {
		
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	clickSound.play();
	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["In The Day The Earth Stood Still, what was the name of the robot?", "In the movie Who Framed Roger Rabbit, which pair of similar characters perform a piano duet?", "What specific creature does Indiana Jones hate?", "What is the hometown in the Back To The Future movies?", "The Road Warrior was the title of a sequel to which film?",  "Which 2005 movie is a spin-off of the TV series Firefly?", "What is the planet Luke Skywalker lives on at the start of Star Wars: A New Hope?", "Who played Two-Face in The Dark Knight"];
var answerArray = [["Klaatu", "Robbie", "TARS", "HAL"], ["Bambi and Bullwinkle", "Donald Duck and Daffy Duck", "Garfield and Sylvester", "Speedy Gonzales and Minnie Mouse"], ["Scorpions","Spiders","Snakes","Skunks"], ["Pinedale", "Hill Valley", "Sunnyville", "Springfield"], ["The Terminator","Aliens","The Fast and Furious","Mad Max"], ["Serenity", "The Chronicles of Riddick", "Solaris", "The Dark Knight"], ["Trenzelore", "Bogota", "Tatooine","Mumbai"] ["Miles Teller","Anthony Mackie","Heath Ledger","Aaron Eckhart"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/klaatu.jpg'>", "<img class='center-block img-right' src='assets/images/Donald_Duck_Daffy_Duck.jpg'>", "<img class='center-block img-right' src='assets/images/snakes.jpg'>", "<img class='center-block img-right' src='assets/images/HillValley.jpg'>", "<img class='center-block img-right' src='assets/images/MadMax.jpg'>", "<img class='center-block img-right' src='assets/images/Serenity.jpg'>", "<img class='center-block img-right' src='assets/images/tatooine.jpeg'>", "<img class='center-block img-right' src='assets/images/Two-Face.jpg'>"];
var correctAnswers = ["A. Klaatu", "B. Donald Duck and Daffy Duck", "C. Snakes", "B. Hill Valley", "D. Mad Max", "A. Serenity", "C. Tatooine", "D. Aaron Eckhart"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "South Korea") {
		correct++;
}
	if (question2 == "Lindsay Vonn") {
		correct++;
}	
	if (question3 == "Bode Miller") {
		correct++;
	}
	
	/*var pictures = ["mehgif.jpg", "greatjobgif.gif", "failgif.jpg"];
	var messages = ["You could do better!", "Greatjob!!", "You really need to practice!"];
	var range;

	if (correct == 0) {
		range = 2;
	}

	if (correct > 0 && correct < 2) {
		range = 1;
	}

	if (correct == 3) {
		range = 0;
	}
*/
	document.getElementById("after_submit").style.visibility = "visible";

	//document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	//document.getElementById("picture").src = pictures[score];
	}
	
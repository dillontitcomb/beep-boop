var boopBeepTest = function(number) {						// Function turns number into a string, searches it for ones or zeroes, and returns Boop! or Beep! with Boop! getting priority
	var string = number.toString();
	if (string.includes("1") === true) {
		return " Boop!";
	} else if (string.includes("0") === true) {
		return " Beep!";
	} else {
		return number;
	}
};

$(document).ready(function() {
	$("form#nameNumberForm").submit(function(event) {
		var numArray = [0]													//Array starts with zero to avoid 0 % 3 = 0 outcome
		var changedArray = [];
		var userName = $("#name").val();
		var userFavNum = $("input#favNum").val();
		var userInput = $("#numInput").val();
		if (userInput < 0 || userInput === "") { 		//Error handling for 0, negative, or empty input
			alert ("Just what do you think you're doing? Enter a positive integer and try again.")
		} else {
			var total = 0;
			for (i=0; i<userInput; i++) { 						//Creates array from 0 to inputted number
				total += 1;
				numArray.push(total);
			}
			numArray.forEach(function(number) {			//For each loop either returns favorite number text, I'm sorry text, or sends number through boop beep function
				if (number == userFavNum) {
					changedArray.push(number + " is " + userName + "'s favorite number!");
				}	else if (number % 3 === 0 && number !== 0) {
					changedArray.push(" I'm sorry " + userName + ". I'm afraid I can't do that.");
				} else {
					changedArray.push(boopBeepTest(" " + number));
				}
			});
			$("p.showArray").text(changedArray);				//Replaces paragraph text with array
			$("#results").show();												//Shows paragraph and header text by showing the #results div
			event.preventDefault();
		};
		$("button#reverseButton").click(function(event) {
			$("p.showArray").text(changedArray.reverse());
			event.preventDefault();
		});
	});
});

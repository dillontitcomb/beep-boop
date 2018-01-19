var numToString = function(number) {
	var string = number.toString();
	if (string.includes("1") === true) {
		return "boop";
	} else if (string.includes("0") === true) {
		return "beep";
	} else {
		return number;
	}
};

$(document).ready(function() {
  $("form#numForm").submit(function(event) {
		var numArray = [0]
		var changedArray = [];
		var userInput = $("#numInput").val();
		var total = 0;
		for (i=0; i<userInput; i++) {
			total += 1;
			numArray.push(total);
		}
		numArray.forEach(function(number) {
			if (number <= 0) {
				alert("Please input a positive integer.")
			}	else if (number % 3 === 0 && number !== 0) {
					changedArray.push("I'm sorry Dave. I'm afraid I can't do that.");
			} else {
					changedArray.push(numToString(number));
			}
		});
		$("p.showArray").text(changedArray);
		$("#results").show();
		event.preventDefault();
	});
});

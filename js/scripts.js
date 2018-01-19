var numArray = [0]

var numToString = function(num) {
	var string = num.toString();
	alert(string + "hi");
	if (string.includes("1") === true) {
		return "boop";
	} else if (string.includes("0") === true) {
		return "beep";
	}
};

alert(numToString(50));
//
// $(document).ready(function() {
//   $("form#numForm").submit(function(event) {
// 		var userInput = $("#numInput").val();
// 		var total = 0;
// 		for (i=0; i<userInput; i++) {
// 			total += 1;
// 			numArray.push(total);
// 		}
// 		alert(numArray);
// 		var daveArray = numArray.map(function(number) {
// 			if (number % 3 === 0 && number !== 0) {
// 				return ("I'm sorry Dave. I'm afraid I can't do that.");
// 			};
//
// 		});
//
// 		alert(changedArray);
// 		$("p.showArray").text(numArray);
// 		$("#results").show();
// 		event.preventDefault();
// 	});
// });

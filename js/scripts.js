var numArray = [0]


$(document).ready(function() {
  $("form#numForm").submit(function(event) {
		var userInput = $("#numInput").val();
		var total = 0;
		for (i=0; i<userInput; i++) {
			total += 1;
			numArray.push(total);
		}
		alert(numArray);
		$("p.showArray").text(numArray);
		$("#changedArray").show();
		event.preventDefault();
	});
});

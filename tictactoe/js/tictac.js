$(document).ready(function() {

	var player = 1; //change it to 2 for player 2   
					//Player 1 is X and Player 2 is O

	$('.square').on('click', function(event) {

	

		
		var squareSelected = $(this);

		//if someone has already clicked on the square
		if(squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')) { 
			alert('This square has already been selected! Please select another.');
		} else {
			if(player === 1) {
				squareSelected.addClass('fa fa-times'); //Attach the class ex if player 1 selected the square

				//Check if the player won
				if(checkIfPlayerWon('fa fa-times')) {
					alert('Congrats Player ' + player + ' has won!');  //Congratulate player
				} else {
					player = 2; //change player if nobody has won yet
				}
			} else {
				squareSelected.addClass('fa fa-circle-o'); //Attach the class oh if player 2 selected the square

				//Check if the player won
				if(checkIfPlayerWon('fa fa-circle-o')) {
					alert('Congrats Player ' + player + ' has won!');  //Congratulate player
				} else {
					player = 1; //change player if nobody has won yet
				}
			}
		}

	});

		function checkIfPlayerWon(symbol) {

			//It will check if three squares have been filled in a row, if they have it returns true

			//Top Horizontal - Squares 1, 2, and 3
			if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
				return true; 

			//Middle Horizontal - Squares 4, 5, and 6
			} else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
				return true;

			//Bottom Horizontal - Squares 7, 8, and 9
			} else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
				return true;

			//Left Vertical - Squares 1, 4, and 7
			} else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
				return true;	

			//Middle Vertical - Squares 2, 5, and 8
			} else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
				return true;

			//Right Vertical - Squares 3, 6, and 9
			} else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
				return true;

			//Diagonal Down - Squares 1, 5, and 9
			} else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
				return true;

			//Diagonal Up - Squares 3, 5, and 7
			} else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
				return true;

			//If there are no squares in a row
			} else {
				return false;
			}	
		}



});
	 var wins = 0;
     var losses =0;
     var totaUserNumber;
     var computerRandomNumber
    
   
    newgame();

		function newgame()
		{

			var minNumber = 19;
			var maxNumber = 120;
			totalUserNumber = 0;
     		computerRandomNumber = 0;
			

			function setUserNumberText()
			{
				
				var totalUserNumberText = document.getElementById("displayScore");
				document.getElementById("displayScore").innerHTML =  totalUserNumber;
				
			}

			setUserNumberText();

			function randomNumber(min,max)
				{
				    return Math.floor(Math.random()*(max-min+1)+min);
				}

					computerRandomNumber = randomNumber(minNumber, maxNumber);
					
				
				var computerRandomNumberText = document.getElementById("computerScore");
				document.getElementById("computerScore").innerHTML =  computerRandomNumber;
			

			 function setButtonNumber()
			 	{

			     $(".btn").each(function(btnindex, btn)
				     {
						$(btn).data('value', randomNumber(1, 12));

				     });
			 	}

			 setButtonNumber();
			}


       	$(".btn").on("click", function () 
       		{
       			var btn = $(this);
                var btnValue = btn.data('value');

				console.log(btnValue + "btnvalueclicked");	

				totalUserNumber = totalUserNumber + btnValue;

				totalUserNumberText = document.getElementById("displayScore");
				document.getElementById("displayScore").innerHTML =  totalUserNumber;

				checkscore(totalUserNumber,computerRandomNumber);

     		});

				
			function checkscore(totalUserNumber,computerRandomNumber)
				{

					if (totalUserNumber != 0){

						if (totalUserNumber > computerRandomNumber){

								losses ++;
								 // $(".Losses .value").html(losses);
								var lossestext = document.getElementById("losses");
								document.getElementById("Losses").innerHTML = 
								"Losses: " + losses;


								newgame();

						}

						if (totalUserNumber === computerRandomNumber)
						{
							wins ++;
							var winstext = document.getElementById("wins");
					    	document.getElementById("Wins").innerHTML = 
					    	"Wins: " + wins;


							newgame();


						}
					}	

				}
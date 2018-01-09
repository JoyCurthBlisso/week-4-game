
     var wins = 0;
     var losses =0;
     var totalUserNumber = 0;
     var computerRandomNumber;

   
    playgame();

   
    function playgame(){

     	var minNumber = 19;
		var maxNumber = 120;

		function randomNumber(min,max)
			{
			    return Math.floor(Math.random()*(max-min+1)+min);
			}

		computerRandomNumber = randomNumber(minNumber, maxNumber);
		//REMOVE THIS LATER
			console.log("computer random #:" + computerRandomNumber);

    
	     $(".btn").each(function(btnindex, btn)
	     {
			$(btn).data('value', randomNumber(1, 12));

	     });
 	


       	$(".btn").on("click", function () 
       		{
       			var btn = $(this);
                var btnValue = btn.data("value");
				console.log(btnValue);	

				//when a user clicks on a button add it to the total user value
				totalUserNumber = totalUserNumber + btnValue;
				console.log( "totalusernumber" + totalUserNumber);

				if (totalUserNumber = computerRandomNumber){

					wins ++ ;
					// var winstext = document.getElementById("wins");
				    // document.getElementById("wins").innerHTML = 
				    // "Wins: " + wins;
					
					playgame();
				}
				// //if the value is equal to the computer random number increase wins by 1 and start over

				// // else (totalUserNumber > computerRandomNumber){

				// // 	losses ++;
				// // 	var lossestext = document.getElementById("losses");
				// // 	document.getElementById("losses").innerHTML = 
				// // 	"Losses: " + losses;					

				// // 	playgame();

				// // }

				// else (totaUserNumber < userRandomNumber){


    //             }

    //             //not sure if we need the below
    //             // var isInteger = !isNaN(parseInt(btnValue));



     		});
     };

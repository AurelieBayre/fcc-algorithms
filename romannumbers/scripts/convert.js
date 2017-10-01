function output() {

		var userinput = document.getElementById("userinput");
		var num = userinput.elements["usernumber"].value;
		var romanResult = [];
		var displayResult = "";
		var ones = num % 10;
		var tens = ((num - ones) / 10) % 10 ;
		var totalTens = tens * 10;
		var hundreds = ((num - ones - totalTens) / 100) % 10 ;
		var totalHundreds = hundreds * 100;
		var thousands = ((num - ones - totalTens - totalHundreds) / 1000) % 10;
		var decimals = [0,1,2,3,4,5,6,7,8,9];
		convertToRoman (num);



		document.getElementById("result1").innerHTML = "You want to convert " + num + " into Roman numbers";
		document.getElementById("result2").innerHTML = "Here is the answer: " + displayResult;


			function convertToRoman(num)
			{
				//for ones digit

					var romansOnes = ["","I","II","III","IV","V","VI","VII","VIII","IX"];


					for (var x = 0; x < decimals.length; x ++)
							{
							if (decimals[x] == ones)
								{
								var romanOnesDigit = romansOnes[x];
								romanResult.unshift(romanOnesDigit);
								}
						}

//for tens
					var romanTens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
						for (var c=0; c<decimals.length; c++)
						{
							if (decimals[c] == tens)
							{
								var romanTensDigit = romanTens[c];
								romanResult.unshift(romanTensDigit);
							}
						}

//for hundreds

					var romanHundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","M"];
						for (var b=0; b<decimals.length; b++)
							{
								if (decimals[b] == hundreds)
								{
									var romanHundredsDigit = romanHundreds[b];
									romanResult.unshift(romanHundredsDigit);
								}
							}

// for thousands
					var romanThousands = ["","M","MM","MMM",["M" +"v&#773;"],["v&#773;"],["v&#773;"+"M"],["v&#773;"+"M"+"M"],["v&#773;"+"M"+"M"+"M"],["X"+"x&#773;"],["x&#773;"]];
						for (var a=0; a<decimals.length; a++)
							{
								if (decimals[a] == thousands)
						 		{
									var romanThousandsDigit = romanThousands[a];
									romanResult.unshift(romanThousandsDigit);
								}
							}
displayResult = romanResult.join("");
			}
	}

function output () 
{
var userinput = document.getElementById("userinput");
var str = userinput.elements["userstring"].value;
var result;

fearNotLetter(str);

		
		document.getElementById("result1").innerHTML = "You want to know if there's a missing letter in '" + str + "'";
		document.getElementById("result2").innerHTML = "The answer is : " + result ;
		
		function fearNotLetter(str) 
		{
			var arr = [];
			
			for (var c= 0; c < str.length ; c++)
			{
				var unicodeValue = str.charCodeAt(c);
				arr.push(unicodeValue);
				
			}
			
			for (var x = 0; x <arr.length - 1 ; x++)
			{
				nextVal = arr[x] + 1;
				
				console.log(arr[x+1] + "et on compare la valeur d'après: " + nextVal);
				if (arr[x + 1] === arr[x]+1)
				{
					
					result = undefined;
				}
			
			else 
			{
				
				var missingVal =  arr[x] + 1;
				result = String.fromCharCode(missingVal);
				break;
			}
		}
		
			
	}
		
}



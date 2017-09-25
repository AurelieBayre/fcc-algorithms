//Beware, the fcc result doesn't accept nested array, so I did another solution. This one work in your browser.
function output ()
{

var userinput = document.getElementById("userinput");
var input1 = userinput.elements["firstarray"].value;
var arg1 = input1.split(",");
var input2 = userinput.elements["secondarray"].value;
var arg2 = input2.split(",");
var input3 = userinput.elements["thirdarray"].value;
var arg3 = input3.split(",");


var newArr = [];
var result = "";
uniteUnique (arg1, arg2, arg3);


document.getElementById("result1").innerHTML = "you gave the following arrays: ["+ input1 + "], [" + input2 + "], ["+ input3+"]";
document.getElementById("result2").innerHTML = "The answer is: " + result ;
 
 function uniteUnique(arg1, arg2, arg3)
  {
	var totalArr = [].slice.call(arguments);
	var firstArr = totalArr.shift();
	
	var flatArr = totalArr.reduce(
	function (a, b) {
		return a.concat(b)
	},
	[]
	);
	
console.log(flatArr);
	flatArr.unshift(firstArr);
	console.log(firstArr);
	
	for (var a=0; a < flatArr[0].length; a++)
	{
		for (var b=1; b < flatArr.length; b++)
		{
			if (flatArr[0][a] == flatArr[b])
			{
				delete flatArr[b];
			}
		}
	}
	console.log(flatArr);
	newArr = flatArr.filter(Boolean);
	
	
	result = newArr.join(",")
  }
}

/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/
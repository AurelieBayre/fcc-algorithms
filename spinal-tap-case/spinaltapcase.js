function output ()
{
var userinput = document.getElementById("userinput");
var str = userinput.elements["userstring"].value;
var newStr;


spinalCase(str);

		document.getElementById("result1").innerHTML = "You want to convert this sentence to spinal case '" + str + "'";
		document.getElementById("result2").innerHTML = "The answer is : " + newStr;

    function spinalCase(str)
    {
  newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/ /g, "-").replace(/_/g, "-").toLowerCase();
    }
}

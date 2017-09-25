function output ()
{
var userinput = document.getElementById("userinput");
var str = userinput.elements["userstring"].value;
var userArray = str.split(", ");
var userAddArg1 = userinput.elements["firstnumber"].value;
var userAddArg2 = userinput.elements["secondnumber"].value;
var result = "";
console.log(userArray);
destroy (userArray, userAddArg1, userAddArg2);

		document.getElementById("result1").innerHTML = "You want me to check this '" + str + "'";
		document.getElementById("result2").innerHTML = "The answer is : " + result ;

  function destroy (arr)
  {
    var newArr = [];
    var allInArr = Array.prototype.slice.call(arguments);
    console.log(allInArr);

    for (var a = 0; a < allInArr[0].length; a++)
    {
      for (var b = 1; b < allInArr.length; b++)
      {
        if (allInArr[0][a]== allInArr[b])
        {
          delete allInArr[0][a];
        }
      }
    }
    newArr = allInArr[0].filter(Boolean);
    result = newArr.join(",");
    console.log("result is: "+ newArr);

  }

}

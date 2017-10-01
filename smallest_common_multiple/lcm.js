
  function output ()
  {
    var userinput = document.getElementById("userinput");
    var val1 = userinput.elements["usernumber1"].value;
    var val2 = userinput.elements["usernumber2"].value;
    var num1 =parseInt(val1,10);
    var num2 = parseInt(val2,10);
    var toTest = [num1, num2];
    var lCM;
    var consecutiveArr = [];
    toTest.sort(function(a,b) {return a - b});

    smallestCommons(toTest);

    document.getElementById("result1").innerHTML = "First, I will build an array of all consecutive numbers betweeen "+ num1 + " and " + num2;
    document.getElementById("result2").innerHTML = "Here is our array: " + toTest + " and now it becomes: " + consecutiveArr;
    document.getElementById("result3").innerHTML = "";
    document.getElementById("result4").innerHTML = "The smallest common multiple is : <i>" + lCM +"</i>";

    function smallestCommons(arr)
    {
      arr.sort(function(a,b) {return a - b});
var min = arr[0];
console.log(min);
console.log(toTest);
      for (var c= min; c <= arr[1]; c++)
      {
        consecutiveArr.push(c);
      }

      // testing each multiple of max until we reach one divisible by all numbers in array.
// maximum multiple to set a limit
var limit = consecutiveArr.reduce(function (previousVal, currentVal) {
  return previousVal * currentVal;
});

var max = toTest[1];
console.log(max);
console.log(consecutiveArr);

var reverseArr = consecutiveArr.sort(function (a,b) {return b-a});
console.log(reverseArr);
for (var x = max; x < limit; x + max)
    {
      var check = 0;
      /*for (var y = 1; y < reverseArr.length; y ++)
        {
          if (x % reverseArr[y] === 0)
          {
            check++;
          }
        }
      if (check === reverseArr.length)
      {lCM = x;}
      */
    }

  }
}

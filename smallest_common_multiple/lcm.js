
  function output ()
  {
    var userinput = document.getElementById("userinput");
    var val1 = userinput.elements["usernumber1"].value;
    var val2 = userinput.elements["usernumber2"].value;
    var num1 =parseInt(val1,10);
    var num2 = parseInt(val2,10);
    var arr = [num1, num2];
    var lCM;
    var reverseArr=[];
    console.log(arr); //getting stg
arr.sort(function(a,b){return b - a});
    for (var c = arr[0]; c >= arr[1]; c --)
        {
          reverseArr.push(c);
        }
console.log(reverseArr);

    smallestCommons(arr);


    document.getElementById("result1").innerHTML = "The smallest common multiple is : <i>" + lCM +"</i>";

    function smallestCommons(arr)
    {

//Thank you Euclid for GCD!!!
function gcd(x,y) {
  if (y == 0) //when there's no remainder...
  {
    return x; //then we have our gcd
  }
  else if (x >= y && y > 0 )
  {
    return gcd(y, x%y); // that's the heart of our function.
  }

}

lCM = reverseArr.reduce(function (previousVal, currentVal) {
  return (previousVal * currentVal)/ gcd(previousVal, currentVal);
} );

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

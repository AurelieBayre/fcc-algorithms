function output ()
{
  var userinput = document.getElementById("userinput");

  var val1 = userinput.elements["usernumber1"].value;
  var val2 = userinput.elements["usernumber2"].value;

  var num1 =parseInt(val1,10);
  var num2 = parseInt(val2,10);
  var result = gcd(num1,num2);
  var lCM = (num1 * num2) / result;

  function gcd(x,y) {
    if (y == 0) //when there's no remainder...
    {
      return x; //then we have our gcd
    }
    else if (x >= y && y > 0 )
    {
      return gcd(y, x%y); // that's the heart of our function.
    }
    else
    {
      return gcd(y, x); //we change the order of the division if y is greater than x.
    }
}
document.getElementById("result1").innerHTML = "GCD is: " + result;
document.getElementById("result2").innerHTML = "LCM is: " + lCM;
}

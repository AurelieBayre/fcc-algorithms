function output ()
{
var userinput = document.getElementById("userinput");
var num = userinput.elements["usernumber"].value;
var newNum;
var fiboArr = [1,1];

sumFibs(num);

		document.getElementById("result1").innerHTML = "I will add all odd number in the Fibonacci sequence that are inferior to " + num;
    document.getElementById("result2").innerHTML = "the odd numbers in the Fibonacci sequence: " + fiboArr;
    document.getElementById("result3").innerHTML = "The answer is : " + newNum;

    function sumFibs(num)
    {
    var newFibo;

    while (fiboArr[fiboArr.length-1] < num) // not working for some num ex num12, it puts last elem of array = 13!!!
      {
        //adding the last and one before last elem of fiboArr to get the next fibonacci number:
      newFibo = fiboArr[fiboArr.length-2] + fiboArr[fiboArr.length-1]
      fiboArr.push(newFibo);

      }
      //didn't find the math to prevent the little overcounting that occurs sometimes (for ex num=12)
     if (num < fiboArr[fiboArr.length-1])
      {
        delete fiboArr[fiboArr.length-1];
      }

    for (var c= 0; c <fiboArr.length; c++)
      {
        //delete all even numbers
        if (fiboArr[c] % 2 === 0)
        {
          delete fiboArr[c];

        }
      }
      fiboArr = fiboArr.filter(Boolean);
      newNum = fiboArr.reduce(function (previousVal, currentVal)
        {
          return previousVal + currentVal;
        } );
    }
}

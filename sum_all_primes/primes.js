
  function output ()
  {
    var userinput = document.getElementById("userinput");
    var num = userinput.elements["usernumber"].value;
    var newNum;
    var primesArr = [2];
    var primesSequence = "";

    sumPrimes(num);

    document.getElementById("result1").innerHTML = "So, You want the sum of all primes inferior or equal to " + num + "...<br> You know, Human, that's quite a daring task!";
    document.getElementById("result2").innerHTML = "The prime number sequence: ";
    document.getElementById("result3").innerHTML = primesSequence;
    document.getElementById("result4").innerHTML = "Or, to sum it up...<br>the answer is : <i>" +newNum +"</i>";


    function sumPrimes(num)
    {
      var listPrimes = [];
      var listCheck = [];
      var intermediaryArr =[];
      for (var i = 2; i <= num; i++)
        {
        listCheck.push(i);
        }
  //creating a function that will delete all the numbers that are divisible by p.

      function deleteDivisible (arr, p)
      {
          for (var c = 0; c < arr.length; c++)
            {
              if (arr[c] !== p) //we have to keep p out of this! :D
              //we want to keep p, but we need all numbers divisible by p out of this.
              {
                  if (arr[c] % p === 0) //this modulo check if it's divisible by p.
                  //if it weren't divisible by p, the result would be superior to 0.
                  {
                    delete arr[c]; //bye bye non-prime! sorry --- not sorry.
                  }
              }
            }
       intermediaryArr = arr.filter(Boolean); // we delete all the "empty spaces"
       for (newP = 0 ; newP < intermediaryArr.length; newP++)
       //here we want to store the new discovered prime number.
       //It's the prime number immediately superior to p.
       {
         if(intermediaryArr[newP] > p)
         {
           primesArr.push(intermediaryArr[newP]);
           break;
         }
       }
      }
  //we're running the delete non prime function with amoving p (first it will be p, then newP, then new new P etc)
      for (var x = 0; x < primesArr.length ; x++)
        {
          deleteDivisible(listCheck, primesArr[x]);
        }
        //by now we have our array of all the primes inferior to num
        //so we can reduce that array to get the sum of it all:
        primesSequence = primesArr.join(", ");
        newNum = primesArr.reduce(function (previousVal, currentVal)
        {
            return previousVal + currentVal;
        } );

    }
  }

//I will follow the sieve of Eratosthenes
//I love Eratosthenes ever since he helped me argue against a Flat-earther.

/*Wikipedia:

    Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
    Initially, let p equal 2, the smallest prime number.
    Enumerate the multiples of p by counting to n from 2p in increments of p, and mark them in the list (these will be 2p, 3p, 4p, ...; the p itself should not be marked).
    Find the first number greater than p in the list that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.
    When the algorithm terminates, the numbers remaining not marked in the list are all the primes below n.
*/

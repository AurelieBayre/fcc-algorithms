function output()


{
  function truthCheck(collection, pre) {
  // Is everyone being true?
  var countTrue = 0;
  for (var c = 0; c < collection.length; c++)
       {
       var toTest = collection[c];
       var value = collection[c][pre];


         if (!toTest.hasOwnProperty(pre))
          {
            return false;
          }
         else if (toTest.hasOwnProperty(pre))
           {
             if (Boolean(value) === false)//la valeur est un boolean)
             {
               return false;
             }
             else
               {countTrue++;}
           }

       }
if (countTrue === collection.length)
  {return true;}
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
}

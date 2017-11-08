/* I reviewed the exercise to add a function that checks if arg is a number. 
But it doesn't differentiate between 2 and "2"...
So I had to add a little something at the end of the function (see var result and how it is checked) */


function addTogether() {
  
  //vérifier si l'arg est bien un nombre
  var checkArg = function(num) {
      if (typeof num !== "number"){
          return undefined;
      }
      else {
          return num;
      }
  };
  
 if (arguments.length === 1){
   console.log("only one!!");
     var onlyOne = checkArg(arguments[0]);   
 //if it's not a number then it returns undefined and we don't have to worry about it anymore/
 //but if it IS a number, then we do:
 if (checkArg(onlyOne)) {
     //return a function that waits for an additional argument:
     return function(additionalArg) {
         //is it a number?
         if(!checkArg(additionalArg)){
             //if it's not, then the whole thing goes undefined
             return undefined;
         }
         else {
             return onlyOne + additionalArg;
         }
     };
 }
 }
  
 else {
  
     //case 2 args are provided at the begininng:
     var first = checkArg(arguments[0]);
     var second = checkArg(arguments[1]);
     //if both are number, then return the sum; else abort.
    if (first !== "undefined" || second !== "undefined"){
      var result = first + second;
      if (checkArg(result)) { //had to do this in the case is something like (2, "3")
        return first + second;
      }
      else {
        return undefined;
      }
      
    }
   else {
     return undefined;
   }
 }   
}


addTogether(2, 3);

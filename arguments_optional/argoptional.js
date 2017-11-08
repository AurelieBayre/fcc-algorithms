function addTogether() {
  var arr = [].slice.call(arguments);
  
  if (arguments.length === 1)
   
    {//case: only 1 arg is provided.
      if (typeof arr[0] !== "number") //case: the arg is not a number.
        {
          return undefined;
        }
      //now, there's 1 arg, and it's a number, so we return a function that takes a second Arg.
      return function (secondArg){
      if (typeof secondArg !== "number" )
        {
          return undefined;
        }
      
        arr.push(secondArg);
        
        var num = arr.reduce(function (previousVal, currentVal){
          return previousVal + currentVal;
          });
        return num;                         
    };                         
  }
  //now if there are two arguments
      else if ( arr.length === 2) {
       for (var c= 0; c < arr.length; c++)
              {
                if (typeof arr[c] !== "number")
                  {
                  return undefined;
                  }
              }
        var num = arr.reduce(function (previousVal, currentVal) 
                 {
        return previousVal + currentVal;
                  });
        return num;
                           
     }
}

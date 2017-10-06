
function addTogether() {
  var arr = [].slice.call(arguments);
  
  if (arguments.length === 1)
   
    {
      if (typeof arr[0] !== "number")
      {return undefined;}
      return function (b) 
      {
      if (typeof b !== "number" )
        {return undefined;}
      
        arr.push(b);
      var num = arr.reduce(function (previousVal, currentVal) 
                 {
        return previousVal + currentVal;
                  },);
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
                  },);
        return num;
                           
           }
          
                           
                           
        
     
         
        
}
addTogether(2, "I dream");

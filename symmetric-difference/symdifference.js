//pair-programmed this one with Hannah Zulueta (@homemadecoder)

function sym(args) {
    let bigArr = [].slice.call(arguments);
   
    
    let resultArr = bigArr.reduce(function(first, second) {
     /* for (var b = 0; b < second.length; b++ ){
        if (!first.includes(second[b]) && !result.includes(second[b])) {
            result.push(second[b]);       
          }
        }  */
       let result= [];
      for (var a = 0; a < first.length; a++ ) {
        for (var b = 0; b < second.length; b++ ){
          if (!first.includes(second[b]) && !result.includes(second[b])){
            result.push(second[b]);
            //console.log ("first if: " + result);
            
          }
          if (!second.includes(first[a]) && !result.includes(first[a])){
            result.push(first[a]);
            //console.log ("second if: " + result);
            
          }
        }
      }
     return result;
      
    });
   return resultArr;
  
  }
 //so you can test it with multiple arrays as arguments ex:
 //sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].   
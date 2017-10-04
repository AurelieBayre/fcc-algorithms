function binaryAgent(str) {
  
  var arr = str.split(" ");
  var asciiArr = [];
  
  for (var c = 0; c < arr.length; c++)
    {
      var miniStr = arr[c];
      var miniArr = miniStr.split("");
      miniArr.reverse();
      var asciiMiniArr = [];
      //translating binary to decimal
      for (var z = 0; z < miniArr.length; z++)
        {
          var toAdd = miniArr[z] * Math.pow(2,z);
          asciiMiniArr.push(toAdd);
        }
        var asciiVal = asciiMiniArr.reduce(function(previousVal, currentVal)
                       { return previousVal + currentVal;} ); 
        asciiArr.push(asciiVal);
        
     
    }
  
  var newArr = String.fromCharCode.apply(String, asciiArr).split(" ");
  var result = newArr.join(" ");
  return result;
}

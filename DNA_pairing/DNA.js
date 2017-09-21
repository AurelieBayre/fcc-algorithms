
function pairElement(str) {
  var baseArr = str.split("");
  var newArr = [];

  for (var c = 0; c < baseArr.length; c++)
    {
      var pair = baseArr[c];
      var pushArr = [];
      switch (pair)
      {
        case "A":
          pushArr.push("A","T");

          break;
        case "T":
          pushArr.push("T","A");

          break;
        case "C":
          pushArr.push("C", "G");

          break;
        case "G":
          pushArr.push("G","C");

          break;
      }
      newArr.push(pushArr);
    }

      return newArr;
}

pairElement("GCG");

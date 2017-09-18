
function myReplace(str, before, after)
{
  var capitalFirst = /(^[A-Z])/.test(before);
 var newAfter;
  var textArr = str.split(" ");
  var newStr = "";

  if (capitalFirst)
  {
   newAfter = after.replace((/^[a-z]/), function(after)
     {
       return after.toUpperCase();
     });
   }
  else {
    newAfter = after;
  }

  for (var c = 0; c < textArr.length; c++)
    {
      if (textArr[c] === before)
        {
          textArr.splice([c], 1, newAfter);
          newStr = textArr.join(" ");
        }
    }
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

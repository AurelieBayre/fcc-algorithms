function output()
{
var userinput = document.getElementById("userinput");
var str = userinput.elements["englishword"].value;
var newStr;
translatePigLatin(str);

document.getElementById("result").innerHTML = "You want to convert " + str + " into Pig Latin <br> And the result is : " + newStr;

    function translatePigLatin(str)
    {
    var vowels = ["a", "e", "i", "o", "u"];
    var textArr = str.split("");
    var ending = [];
    firstIsVowel();

    function firstIsVowel ()
      {
          var first = textArr[0].match(/a|e|i|o|u/);
          if (first !== null)
            {
              return true;
            }
          else
            {
              return false;
            }
      }

    if (firstIsVowel())
      {
          ending.push("way");
      }

    else
      {
        do
          {
            var cluster = [],
            cluster = textArr.shift();
            ending.push(cluster);
          }
        while (!firstIsVowel());

      ending.push("ay");
      }

  newStr = textArr.concat(ending);
  newStr = newStr.join("");
  return newStr;

  }
}

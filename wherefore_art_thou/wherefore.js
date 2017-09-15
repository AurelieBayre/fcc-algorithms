window.onload = function ()
{


function whatIsInAName(collection, source)
{
  // What's in a name?
  var arr= [];
  // Only change code below this line
var ourKeys = Object.keys(source);

var newCollection = collection; //JSON.parse(JSON.stringify(collection));

arr = newCollection.filter(function(obj)
  {
    for (var k = 0; k < ourKeys.length; k++)
    {
    if (!obj.hasOwnProperty(ourKeys[k]))
      {
        return false;
      }

      else if (obj[ourKeys[k]] !== source[ourKeys[k]])
      {return false;}
    }
  return true;
  });
console.log(arr);


document.getElementById("thecollection").innerHTML = "Here is the collection to filter: " + (JSON.stringify (collection));
document.getElementById("thesource").innerHTML = "We want an array with all objects containing: " + (JSON.stringify(source));
document.getElementById("theresult").innerHTML = "so I used Object.keys, and so far, what's in it : " + ourKeys + "<br> <br> and here the desired array:" +(JSON.stringify(arr));
  // Only change code above this line
//return arr;

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



}

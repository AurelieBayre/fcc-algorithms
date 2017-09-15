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


document.getElementById("thecollection").innerHTML = "<p>Here is the collection to filter: " + (JSON.stringify (collection))+"</p>";
document.getElementById("thesource").innerHTML = "<p>We want an array with all objects containing: " + (JSON.stringify(source)) +"</p>";
document.getElementById("theresult").innerHTML = "<p>so I used Object.keys, and so far, what's in it : <b>" + ourKeys + "</b></p><p> We have to use that as such : <ul> <li>check if the key exist in the objects: <i>obj.hasOwnProperty(theKeyYouWantToCheck)</i></li><li> then chek if the corresponding value matches the value in source! <i>(obj[theKeyYouWantToCheck] === source[theKeyYouWantToCheck])</i></li></ul> </p><p> so here is the desired array:" +(JSON.stringify(arr))+ "</p>";
  // Only change code above this line
//return arr;

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



}

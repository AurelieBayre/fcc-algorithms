// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  var albumId = collection[id];
  var albumProp = albumId[prop];
  var test = collection[id][prop];
 // console.log(test);
 
if (value === "")
  {
    delete collection[id][prop];
  }
  
  else {
    //
      if (prop != "tracks" && value != "") {     
    //console.log("no tracks!!");
    collection[id][prop] = value;     
  }
  
  else {
   // console.log("there is tracks!");
    if (albumProp === undefined) {
      //console.log("we've got value!");
      collection[id][prop] = [];
     collection[id][prop].push(value);
      
    }      
   else {
     //console.log("we're not worth it");
     albumProp.push(value);
   }
 
  }
  }
 
      return collection;
  }
  

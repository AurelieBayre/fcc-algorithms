//the one I submitted to freecodecamp, because it wouldn't accept a nested array.
function uniteUnique(arr) {
  var totalArr = [].slice.call(arguments);
	var firstArr = totalArr.shift();
	var count = firstArr.length;
  
	var flatArr = totalArr.reduce(
	function (a, b) {
		return a.concat(b);
	},
	[]
	);
	
	
	for (var a=0; a < firstArr.length; a++)
	{
		for (var b=0; b < flatArr.length; b++)
		{
			if (firstArr[a] == flatArr[b])
			{
				delete flatArr[b];
			}
		}
	}
 return firstArr.concat(flatArr).filter(Boolean);
	
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

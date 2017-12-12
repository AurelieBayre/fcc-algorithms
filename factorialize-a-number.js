/* Old solution:

function factorialize(num) {
 var arr = [];
  var a = 0;
  
  while ( a <= num) {
    arr.push(a);
    a++;
   }
 if (arr[0] === 0) {
   arr.shift();
   arr.unshift(1);
 }
  factNum = arr.reduce(function(previousVal, currentVal) {
 return previousVal * currentVal;
 });
    return factNum;
}

factorialize(5);

*/

function reverseString(str) {
  array = str.split('');
  array.reverse();
  reverseStr = array.join('');
  return reverseStr;
}

reverseString("hello");

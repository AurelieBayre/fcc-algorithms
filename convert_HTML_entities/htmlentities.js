function output()
{

  var userinput = document.getElementById("userinput");
  var str = userinput.elements["userstring"].value;
  var newStr;


  convertHTML(str);

  document.getElementById("result1").innerHTML = "You want to convert special character into HTML entities: '" + str + "'";
  document.getElementById("result2").innerHTML = "The answer is : " + newStr ;


  function convertHTML(str)
  {

  newStr = str.replace(/&/g, "&​amp;").replace(/</g, "&​lt;").replace(/>/g, "&​gt").replace(/'/g, "&​apos;");

  return newStr;
}
}

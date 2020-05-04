
// function printa(name){
//      name=document.getElementById("fName").value;
// console.log(name);
}function myFunction() {
  var x = document.getElementById("myText");
  var defaultVal = x.defaultValue;
  var currentVal = x.value;
  
  if (defaultVal == currentVal) {
    document.getElementById("demo").innerHTML = "Default value and current value is the same: "
    + x.defaultValue + " and " + x.value
    + "<br>Change the value of the text field to see the difference!";
  } else {
    document.getElementById("demo").innerHTML = "The default value was: " + defaultVal
    + "<br>The new, current value is: " + currentVal;
  }
}
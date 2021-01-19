
function clean() {
  document.getElementById("textview").innerHTML = "0";
}

function removeZero() {
  var value = document.getElementById("textview").innerHTML;
  if (value == "0") {
      value = " "
      document.getElementById("textview").innerHTML = value;
  }
}

function display(value) {
  removeZero()
  document.getElementById("textview").innerHTML += value;
}

function equal() {
  removeZero()
  var equation = document.getElementById("textview").innerHTML;
  var solved = eval(equation);
  document.getElementById('textview').innerHTML = solved;
}








function myFunction() {

  var h = document.getElementById("hours").value;
  var m = document.getElementById("minutes").value;
  const x = document.getElementById("Bad");

  //validate 
  if (h > 12) {
    return x.classList.remove ("d-none")
  }

  if (m > 59) {
    return x.classList.remove ("d-none")
  }

  // Process
  document.getElementById("angle").innerHTML = (30 * h) - ((11 / 2) * m)
}



function evince() {
  var x = document.getElementById("boton");
  var y = document.getElementById("chagen");

  x.classList.add("d-none");
  y.classList.remove ("d-none");
}


function test() {

  var h = document.getElementById("hour").value;
  var m = document.getElementById("minute").value;
  const x = document.getElementById("Bad");

  //validate 
  if (h > 12) {
    return x.classList.remove ("d-none")
  }

  if (m > 59) {
    return x.classList.remove ("d-none")
  }

  // Process
  document.getElementById("angl").innerHTML = (30 * h) - ((11 / 2) * m)
}
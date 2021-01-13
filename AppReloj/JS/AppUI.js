// changeLayout Muestra verticalmente  
function changeLayout() {
  var hours = document.getElementById("input-hour");
  var minutes = document.getElementById("input-minute");

  if(hours.classList.contains('col-sm-6')){
    hours.classList.remove("col-sm-6");
    hours.classList.add("col-sm-12");
    minutes.classList.remove("col-sm-6");
    minutes.classList.add("col-sm-12");
 }else{
    if(hours.classList.contains('col-sm-12')){
        hours.classList.remove("col-sm-12");
        hours.classList.add("col-sm-6");
        minutes.classList.remove("col-sm-12");
        minutes.classList.add("col-sm-6");
    }
 }

}

// Hallar angulo 

function sendInformation() {

  var hours = document.getElementById("hours").value;
  var minutes = document.getElementById("minutes").value;
  var textSecondary = document.getElementById("text-secondary");
  var textInitial = document.getElementById("text-initial");
  var inputError = document.getElementById("input-error");

 // Muestra si hay un error en los numeros digitados 
  if(! inputError.classList.contains('d-none')){
   inputError.classList.add('d-none');
 }

  // Validate error
  if (hours > 12) {
    return inputError.classList.remove ("d-none")
  }

  if (minutes > 59) {
    return inputError.classList.remove ("d-none")
  }

  var angle = (30 * hours) - ((11 / 2) * minutes);
  console.log(angle);

  if (angle < 0){
    angle = angle * (-1);
    document.getElementById("angle").innerHTML = angle + "º"
  }

  // Process angle
  document.getElementById("angle").innerHTML = angle + "º"
  // Mostrar las horas y minutos con las que se hace el angulo
  document.getElementById("hour").innerHTML = hours + ' Hours'
  document.getElementById("minute").innerHTML = minutes + ' Minutes'

  textInitial.classList.add("d-none");
  textSecondary.classList.remove ("d-none");
}


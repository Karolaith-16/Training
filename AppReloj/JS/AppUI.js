// Muestra si hay un error en los numeros digitados 
function evince() {
   var hours = document.getElementById("input-hour");
   var minutes = document.getElementById("input-minute");
 
   hours.classList.remove("col-sm-6");
   hours.classList.add("col-sm-12");
   minutes.classList.remove("col-sm-6");
   minutes.classList.add("col-sm-12");
 
 }
 
 // Hallar angulo 
 
 function myFunction() {
 
   var hours = document.getElementById("hours").value;
   var minutes = document.getElementById("minutes").value;
   var text_secondary = document.getElementById("text-secondary");
   var text_initial = document.getElementById("text-initial");
   var input_error = document.getElementById("input-error");
 
  // Muestra si hay un error en los numeros digitados 
   if(! input_error.classList.contains('d-none')){
     input_error.classList.add('d-none');
  }
 
   // Validate error
   if (hours > 12) {
     return input_error.classList.remove ("d-none")
   }
 
   if (minutes > 59) {
     return input_error.classList.remove ("d-none")
   }
 
   var angle = (30 * hours) - ((11 / 2) * minutes);
   console.log(angle);
 
   // Process angle
   document.getElementById("angle").innerHTML = angle + "º"
   // Mostrar las horas y minutos con las que se hace el angulo
   document.getElementById("hour").innerHTML = hours + ' Hours'
   document.getElementById("minute").innerHTML = minutes + ' Minutes'
 
   text_initial.classList.add("d-none");
   text_secondary.classList.remove ("d-none");
 }
 
 
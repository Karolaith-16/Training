// Muestra si hay un error en los numeros digitados 
function evince() {
   var x = document.getElementById("boton");
   var y = document.getElementById("chagen");
 
   x.classList.add("d-none");
   y.classList.remove ("d-none");
 }
 
 // Hallar angulo 
 
 function myFunction() {
 
   var h = document.getElementById("hours").value;
   var m = document.getElementById("minutes").value;
   var x = document.getElementById("si");
   var y = document.getElementById("tex");
   const z = document.getElementById("Bad");
 
   // Mostrar las horas y minutos con las que se hace el angulo
   y.classList.add("d-none");
   x.classList.remove ("d-none");
 
   // Validate error
   if (h > 12) {
     return z.classList.remove ("d-none")
   }
 
   if (m > 59) {
     return z.classList.remove ("d-none")
   }
 
   // Hours
 
   if (h == 1){
      document.getElementById("h").innerHTML = "1Hours";         
   }
 
   if (h == 2){
      document.getElementById("h").innerHTML = "2Hours";         
   }
 
   if (h == 3){
      document.getElementById("h").innerHTML = "3Hours";         
   }
 
   if (h == 4){
      document.getElementById("h").innerHTML = "4Hours";         
   }
 
   if (h == 5){
      document.getElementById("h").innerHTML = "5Hours";         
   }
 
   if (h == 6){
      document.getElementById("h").innerHTML = "6Hours";         
   }
 
   if (h == 7){
      document.getElementById("h").innerHTML = "7Hours";         
   }
 
   if (h == 8){
      document.getElementById("h").innerHTML = "8Hours";         
   }
 
   if (h == 9){
      document.getElementById("h").innerHTML = "9Hours";         
   }
 
   if (h == 10){
      document.getElementById("h").innerHTML = "10Hours";         
   }
 
   if (h == 11){
      document.getElementById("h").innerHTML = "11Hours";         
   }
 
   if (h == 12){
      document.getElementById("h").innerHTML = "12Hours";         
   }
 
   // Minutes
 
   if (m == 00){
      document.getElementById("m").innerHTML = "00Minutes";         
   }
   
   if (m == 1){
      document.getElementById("m").innerHTML = "01Minutes";         
   }
 
   if (m == 2){
      document.getElementById("m").innerHTML = "02Minutes";         
   }
 
   if (m == 3){
      document.getElementById("m").innerHTML = "03Minutes";         
   }
 
   if (m == 4){
      document.getElementById("m").innerHTML = "04Minutes";         
   }
 
   if (m == 5){
      document.getElementById("m").innerHTML = "05Minutes";         
   }
 
   if (m == 6){
      document.getElementById("m").innerHTML = "06Minutes";         
   }
 
   if (m == 7){
      document.getElementById("m").innerHTML = "07Minutes";         
   }
 
   if (m == 8){
      document.getElementById("m").innerHTML = "08Minutes";         
   }
 
   if (m == 9){
      document.getElementById("m").innerHTML = "09Minutes";         
   }
 
   if (m == 10){
      document.getElementById("m").innerHTML = "10Minutes";         
   }
 
   if (m == 11){
      document.getElementById("m").innerHTML = "11Minutes";         
   }
 
   if (m == 12){
      document.getElementById("m").innerHTML = "12Minutes";         
   }
 
   if (m == 13){
      document.getElementById("m").innerHTML = "13Minutes";         
   }
 
   if (m == 14){
      document.getElementById("m").innerHTML = "14Minutes";         
   }
   
   if (m == 15){
      document.getElementById("m").innerHTML = "15Minutes";         
   }
 
   if (m == 16){
      document.getElementById("m").innerHTML = "16Minutes";         
   }
 
   if (m == 17){
      document.getElementById("m").innerHTML = "17Minutes";         
   }
 
   if (m == 18){
      document.getElementById("m").innerHTML = "18Minutes";         
   }
 
   if (m == 19){
      document.getElementById("m").innerHTML = "19Minutes";         
   }
 
   if (m == 20){
      document.getElementById("m").innerHTML = "20Minutes";         
   }
 
   if (m == 21){
      document.getElementById("m").innerHTML = "21Minutes";         
   }
 
   if (m == 22){
      document.getElementById("m").innerHTML = "22Minutes";         
   }
 
   if (m == 23){
      document.getElementById("m").innerHTML = "23Minutes";         
   }
 
   if (m == 24){
      document.getElementById("m").innerHTML = "24Minutes";         
   }
 
   if (m == 25){
      document.getElementById("m").innerHTML = "25Minutes";         
   }
 
   if (m == 26){
      document.getElementById("m").innerHTML = "26Minutes";         
   }
 
   if (m == 27){
      document.getElementById("m").innerHTML = "27Minutes";         
   }
 
   if (m == 28){
      document.getElementById("m").innerHTML = "28Minutes";         
   }
   
   if (m == 29){
      document.getElementById("m").innerHTML = "29Minutes";         
   }
 
   if (m == 30){
      document.getElementById("m").innerHTML = "30Minutes";         
   }
 
   if (m == 31){
      document.getElementById("m").innerHTML = "31Minutes";         
   }
 
   if (m == 32){
      document.getElementById("m").innerHTML = "32Minutes";         
   }
 
   if (m == 33){
      document.getElementById("m").innerHTML = "33Minutes";         
   }
 
   if (m == 34){
      document.getElementById("m").innerHTML = "34Minutes";         
   }
 
   if (m == 35){
      document.getElementById("m").innerHTML = "35Minutes";         
   }
 
   if (m == 36){
      document.getElementById("m").innerHTML = "36Minutes";         
   }
 
   if (m == 37){
      document.getElementById("m").innerHTML = "37Minutes";         
   }
 
   if (m == 38){
      document.getElementById("m").innerHTML = "38Minutes";         
   }
 
   if (m == 39){
      document.getElementById("m").innerHTML = "39Minutes";         
   }
 
   if (m == 40){
      document.getElementById("m").innerHTML = "40Minutes";         
   }
 
   if (m == 41){
      document.getElementById("m").innerHTML = "41Minites";         
   }
 
   if (m == 42){
      document.getElementById("m").innerHTML = "42Minutes";         
   }
   
   if (m == 43){
      document.getElementById("m").innerHTML = "43Minutes";         
   }
 
   if (m == 44){
      document.getElementById("m").innerHTML = "44Minutes";         
   }
 
   if (m == 45){
      document.getElementById("m").innerHTML = "45Minutes";         
   }
 
   if (m == 46){
      document.getElementById("m").innerHTML = "46Minutes";         
   }
 
   if (m == 47){
      document.getElementById("m").innerHTML = "47Minutes";         
   }
 
   if (m == 48){
      document.getElementById("m").innerHTML = "48Minutes";         
   }
 
   if (m == 49){
      document.getElementById("m").innerHTML = "49Minutes";         
   }
 
   if (m == 50){
      document.getElementById("m").innerHTML = "50Minutes";         
   }
 
   if (m == 51){
      document.getElementById("m").innerHTML = "51Minutes";         
   }
 
   if (m == 52){
      document.getElementById("m").innerHTML = "52Minutes";         
   }
 
   if (m == 53){
      document.getElementById("m").innerHTML = "53Minutes";         
   }
 
   if (m == 54){
      document.getElementById("m").innerHTML = "54Minutes";         
   }
 
   if (m == 55){
      document.getElementById("m").innerHTML = "55Minutes";         
   }
 
   if (m == 56){
      document.getElementById("m").innerHTML = "56Minutes";         
   }
 
   if (m == 57){
      document.getElementById("m").innerHTML = "57Minutes";         
   }
 
   if (m == 58){
      document.getElementById("m").innerHTML = "58Minutes";         
   }
 
   if (m == 59){
      document.getElementById("m").innerHTML = "59Minutes";         
   }
 
   // Process angle
   document.getElementById("angle").innerHTML = (30 * h) - ((11 / 2) * m)
 }
 
 
 
 // Hallar angulo Segunda forma 
 
 function text() {
 
   var h = document.getElementById("hour").value;
   var m = document.getElementById("minute").value;
   var x = document.getElementById("sii");
   var y = document.getElementById("tex1");
   const z = document.getElementById("Bad");
 
   // Mostrar las horas y minutos con las que se hace el angulo
   y.classList.add("d-none");
   x.classList.remove ("d-none");
 
   // Validate error
   if (h > 12) {
     return z.classList.remove ("d-none")
   }
 
   if (m > 59) {
     return z.classList.remove ("d-none")
   }
 
   // Hours
 
   if (h == 1){
      document.getElementById("hou").innerHTML = "1Hours";         
   }
 
   if (h == 2){
      document.getElementById("hou").innerHTML = "2Hours";         
   }
 
   if (h == 3){
      document.getElementById("hou").innerHTML = "3Hours";         
   }
 
   if (h == 4){
      document.getElementById("hou").innerHTML = "4Hours";         
   }
 
   if (h == 5){
      document.getElementById("hou").innerHTML = "5Hours";         
   }
 
   if (h == 6){
      document.getElementById("hou").innerHTML = "6Hours";         
   }
 
   if (h == 7){
      document.getElementById("hou").innerHTML = "7Hours";         
   }
 
   if (h == 8){
      document.getElementById("hou").innerHTML = "8Hours";         
   }
 
   if (h == 9){
      document.getElementById("hou").innerHTML = "9Hours";         
   }
 
   if (h == 10){
      document.getElementById("hou").innerHTML = "10Hours";         
   }
 
   if (h == 11){
      document.getElementById("hou").innerHTML = "11Hours";         
   }
 
   if (h == 12){
      document.getElementById("hou").innerHTML = "12Hours";         
   }
 
   // Minutes
 
   if (m == 00){
      document.getElementById("min").innerHTML = "00Minutes";         
   }
   
   if (m == 1){
      document.getElementById("min").innerHTML = "01Minutes";         
   }
 
   if (m == 2){
      document.getElementById("min").innerHTML = "02Minutes";         
   }
 
   if (m == 3){
      document.getElementById("min").innerHTML = "03Minutes";         
   }
 
   if (m == 4){
      document.getElementById("min").innerHTML = "04Minutes";         
   }
 
   if (m == 5){
      document.getElementById("min").innerHTML = "05Minutes";         
   }
 
   if (m == 6){
      document.getElementById("min").innerHTML = "06Minutes";         
   }
 
   if (m == 7){
      document.getElementById("min").innerHTML = "07Minutes";         
   }
 
   if (m == 8){
      document.getElementById("min").innerHTML = "08Minutes";         
   }
 
   if (m == 9){
      document.getElementById("min").innerHTML = "09Minutes";         
   }
 
   if (m == 10){
      document.getElementById("min").innerHTML = "10Minutes";         
   }
 
   if (m == 11){
      document.getElementById("min").innerHTML = "11Minutes";         
   }
 
   if (m == 12){
      document.getElementById("min").innerHTML = "12Minutes";         
   }
 
   if (m == 13){
      document.getElementById("min").innerHTML = "13Minutes";         
   }
 
   if (m == 14){
      document.getElementById("min").innerHTML = "14Minutes";         
   }
   
   if (m == 15){
      document.getElementById("min").innerHTML = "15Minutes";         
   }
 
   if (m == 16){
      document.getElementById("min").innerHTML = "16Minutes";         
   }
 
   if (m == 17){
      document.getElementById("min").innerHTML = "17Minutes";         
   }
 
   if (m == 18){
      document.getElementById("min").innerHTML = "18Minutes";         
   }
 
   if (m == 19){
      document.getElementById("min").innerHTML = "19Minutes";         
   }
 
   if (m == 20){
      document.getElementById("min").innerHTML = "20Minutes";         
   }
 
   if (m == 21){
      document.getElementById("min").innerHTML = "21Minutes";         
   }
 
   if (m == 22){
      document.getElementById("min").innerHTML = "22Minutes";         
   }
 
   if (m == 23){
      document.getElementById("min").innerHTML = "23Minutes";         
   }
 
   if (m == 24){
      document.getElementById("min").innerHTML = "24Minutes";         
   }
 
   if (m == 25){
      document.getElementById("min").innerHTML = "25Minutes";         
   }
 
   if (m == 26){
      document.getElementById("min").innerHTML = "26Minutes";         
   }
 
   if (m == 27){
      document.getElementById("min").innerHTML = "27Minutes";         
   }
 
   if (m == 28){
      document.getElementById("min").innerHTML = "28Minutes";         
   }
   
   if (m == 29){
      document.getElementById("min").innerHTML = "29Minutes";         
   }
 
   if (m == 30){
      document.getElementById("min").innerHTML = "30Minutes";         
   }
 
   if (m == 31){
      document.getElementById("min").innerHTML = "31Minutes";         
   }
 
   if (m == 32){
      document.getElementById("min").innerHTML = "32Minutes";         
   }
 
   if (m == 33){
      document.getElementById("min").innerHTML = "33Minutes";         
   }
 
   if (m == 34){
      document.getElementById("min").innerHTML = "34Minutes";         
   }
 
   if (m == 35){
      document.getElementById("min").innerHTML = "35Minutes";         
   }
 
   if (m == 36){
      document.getElementById("min").innerHTML = "36Minutes";         
   }
 
   if (m == 37){
      document.getElementById("min").innerHTML = "37Minutes";         
   }
 
   if (m == 38){
      document.getElementById("min").innerHTML = "38Minutes";         
   }
 
   if (m == 39){
      document.getElementById("min").innerHTML = "39Minutes";         
   }
 
   if (m == 40){
      document.getElementById("min").innerHTML = "40Minutes";         
   }
 
   if (m == 41){
      document.getElementById("min").innerHTML = "41Minites";         
   }
 
   if (m == 42){
      document.getElementById("min").innerHTML = "42Minutes";         
   }
   
   if (m == 43){
      document.getElementById("min").innerHTML = "43Minutes";         
   }
 
   if (m == 44){
      document.getElementById("min").innerHTML = "44Minutes";         
   }
 
   if (m == 45){
      document.getElementById("min").innerHTML = "45Minutes";         
   }
 
   if (m == 46){
      document.getElementById("min").innerHTML = "46Minutes";         
   }
 
   if (m == 47){
      document.getElementById("min").innerHTML = "47Minutes";         
   }
 
   if (m == 48){
      document.getElementById("min").innerHTML = "48Minutes";         
   }
 
   if (m == 49){
      document.getElementById("min").innerHTML = "49Minutes";         
   }
 
   if (m == 50){
      document.getElementById("min").innerHTML = "50Minutes";         
   }
 
   if (m == 51){
      document.getElementById("min").innerHTML = "51Minutes";         
   }
 
   if (m == 52){
      document.getElementById("min").innerHTML = "52Minutes";         
   }
 
   if (m == 53){
      document.getElementById("min").innerHTML = "53Minutes";         
   }
 
   if (m == 54){
      document.getElementById("min").innerHTML = "54Minutes";         
   }
 
   if (m == 55){
      document.getElementById("min").innerHTML = "55Minutes";         
   }
 
   if (m == 56){
      document.getElementById("min").innerHTML = "56Minutes";         
   }
 
   if (m == 57){
      document.getElementById("min").innerHTML = "57Minutes";         
   }
 
   if (m == 58){
      document.getElementById("min").innerHTML = "58Minutes";         
   }
 
   if (m == 59){
      document.getElementById("min").innerHTML = "59Minutes";         
   }
 
   // Process angle
   document.getElementById("angl").innerHTML = (30 * h) - ((11 / 2) * m)
 }
 
 
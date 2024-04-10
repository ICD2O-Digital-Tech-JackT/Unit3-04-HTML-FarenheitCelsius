function Display(fahrenheit){
  document.getElementById("Output").innerHTML = "Fahrenheit: " + fahrenheit; 
}
function Calculate(){
  let Celsius = document.getElementById("celsius").value;
  let fahrenheit = (Celsius * (9/5)) + 32;
  Display(fahrenheit)
}
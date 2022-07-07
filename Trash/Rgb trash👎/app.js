var result = document.querySelectorAll ("#result")[0];
var red = document.querySelectorAll ("#red")[0];
var redv = document.querySelectorAll ("#redv")[0];
var redspan = document.querySelectorAll ("#redspan")[0];
var green = document.querySelectorAll ("#green")[0];
var greenv = document.querySelectorAll ("#greenv")[0];
var greenspan = document.querySelectorAll ("#greenspan")[0];
var blue = document.querySelectorAll ("#blue")[0];
var bluev = document.querySelectorAll ("#bluev")[0];
var bluespan = document.querySelectorAll ("#bluespan")[0];
var opacity = document.querySelectorAll ("#opacity")[0];
var opacityv = document.querySelectorAll ("#opacityv")[0];
var opacityspan = document.querySelectorAll ("#opacityspan")[0];
/*

red.addEventListener("input",function(){
  var redvalue = red.value;
  redv.innerHTML = redvalue;
})
green.addEventListener("input",function(){
  var greenvalue = green.value;
  greenv.innerHTML = greenvalue;
})
blue.addEventListener("input",function(){
  var bluevalue = blue.value;
  bluev.innerHTML = bluevalue;
})
opacity.addEventListener("input",function(){
  var opacityvalue = opacity.value;
  opacityv.innerHTML = opacityvalue;
})
*/
function change() {
  var redvalue = red.value;
  var greenvalue = green.value;
  var bluevalue = blue.value;
  var opacityvalue = opacity.value;
  redv.innerHTML = redvalue;
  greenv.innerHTML = greenvalue;
  bluev.innerHTML = bluevalue;
}
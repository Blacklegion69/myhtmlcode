var fruit_names = ["Apple","Dragon Fruit","Mango","PineApple","WaterMelon"];
var fname = document.querySelector (".Fruit_name");
var slider_img1 = document.querySelector (".slider_img1");
var slider_img2 = document.querySelector (".slider_img2");
var slider_img3 = document.querySelector (".slider_img3");
var slider_img4 = document.querySelector (".slider_img4");
var slider_img5 = document.querySelector (".slider_img5");
var big_img = document.querySelector (".big_img");
var body = document.querySelectorAll ("body")[0];
slider_img1.addEventListener("click",function(){
  big_img.src = "images/apple.png";
  body.style.backgroundColor = "#f30a0a";
  fname.innerHTML = fruit_names[0];
})
slider_img2.addEventListener("click",function(){
  big_img.src = "images/dragonFruits.png";
  body.style.backgroundColor = "#F552AE";
  fname.innerHTML = fruit_names[1];
})
slider_img3.addEventListener("click",function(){
  big_img.src = "images/mango.png";
  body.style.backgroundColor = "#FBCF50";
  fname.innerHTML = fruit_names[2];
})
slider_img4.addEventListener("click",function(){
  big_img.src = "images/pineApple.png";
  body.style.backgroundColor = "#D49830";
  fname.innerHTML = fruit_names[3];
})
slider_img5.addEventListener("click",function(){
  big_img.src = "images/watermelon.png";
  body.style.backgroundColor = "#7B9E21";
  fname.innerHTML = fruit_names[4];
})
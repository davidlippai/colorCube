let colors = ["red", "blue", "green"];
let makecolorBtn = document.getElementById("makecolor");

makecolorBtn.addEventListener('click', function(){
  let cubes = document.querySelectorAll("cubes");
  cubes.style.backgroundColor = "red";
})


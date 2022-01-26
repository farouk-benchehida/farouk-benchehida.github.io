let togg1 = document.getElementById("button1");
let togg2 = document.getElementById("button2");


let d1 = document.getElementById("savoir");
let d2 = document.getElementById("etre");


togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})

togg2.addEventListener("click", () => {
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
})


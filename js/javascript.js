//navlinks menu mobile
let menu_icon_box = document.querySelector(".btn-toggle");
let box = document.querySelector(".box");

menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}
document.onclick = function(e){
    if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_box");
    }
}

window.addEventListener("scroll", reveal);

// popup
window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popuphome").style.display = "flex";
      },
      1000
  )
});


document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popuphome").style.display = "none";
});
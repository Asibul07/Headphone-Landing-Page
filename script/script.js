let menu = document.querySelector("#bar");
let list = document.querySelector(".navList");

menu.onclick = function(){
    menu.classList.toggle('fa-times')
    list.classList.toggle('active')
}
let mainNav = document.querySelectorAll(".main-nav-ul > li > a");
let subMenu = document.querySelector(".main-nav-ul li > ul");
let subNav = document.querySelectorAll(".sub-nav-ul > li > a");
 

for (let i = 0; i < mainNav.length; i++) {
    mainNav[i].addEventListener("click", function (e) {
        let li = e.srcElement.parentElement.children;
        li[1].style.display = !li[1].style.display || li[1].style.display == "none" ? "block" : "none";
    });
}
for (let i = 0; i < subNav.length; i++) {
    subNav[i].addEventListener("click", function (e) {
        let listLi = document.querySelectorAll(".level2");
        listLi.forEach(function (li) {
            li.style.display = "none";
        })
        let li = e.srcElement.parentElement.children;
        li[1].style.display = !li[1].style.display || li[1].style.display == "none" ? "block" : "none";
    });
}
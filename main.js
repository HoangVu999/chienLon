let mainNav = document.querySelector(".main-nav-ul > li > a");
let subMenu = document.querySelector(".main-nav-ul li > ul");
let subNav = document.querySelectorAll(".sub-nav-ul > li > a");
 
let checkMain = true;
mainNav.addEventListener("click", function () {
    subMenu.style.display = checkMain ? "block" : "none";
    checkMain = !checkMain;
});

let checkSub = true;
for (let i = 0; i < subNav.length; i++) {
    checkSub = true
    subNav[i].addEventListener("click", function (e) {
        let listLi = document.querySelectorAll(".level2");
        listLi.forEach(function (li) {
            li.style.display = "none";
        })
        let li = e.srcElement.parentElement.children;
        li[1].style.display = checkSub ? "block" : "none";
        checkSub = !checkSub
    });
}

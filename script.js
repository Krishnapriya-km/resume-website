// Dark Mode

const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

themeBtn.onclick = function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }

};
}

//typing animation

const text = "BCA (Hons) AI & Data Science Student";
const typing = document.getElementById("typing");

let index = 0;

function typeText() {
    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }
}

typeText();

// Scroll To Top

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>200){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

//mobile menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.onclick = function () {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }

    else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

};

document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

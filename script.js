// ===== DARK MODE =====
const themeBtn = document.getElementById("theme");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.classList.remove("fa-moon");
            themeBtn.classList.add("fa-sun");
        } else {
            themeBtn.classList.remove("fa-sun");
            themeBtn.classList.add("fa-moon");
        }
    });
}

// ===== MOBILE MENU =====
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===== SCROLL ANIMATION =====
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s";

    observer.observe(section);

});

// ===== ADMISSION FORM =====
const form = document.querySelector("form");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

alert("🎉 Admission Submitted Successfully!");

form.reset();

});

}

// ===== CHATBOT =====
const chatbot = document.querySelector(".chatbot");

if(chatbot){

chatbot.addEventListener("click",()=>{

let message = prompt(
"👋 Hello!\nHow can we help you?\n\n1. Admission\n2. Fees\n3. Timings"
);

if(message==1){

alert("Admissions are open for Playgroup, Nursery, LKG & UKG.");

}
else if(message==2){

alert("Please contact our office for fee details.");

}
else if(message==3){

alert("School Timings: 9:00 AM - 1:00 PM");

}
else{

alert("Thank you! We will contact you soon.");

}

});

}

// ===== GALLERY AUTO ANIMATION =====
const images = document.querySelectorAll(".gallery img");

let index=0;

if(images.length>0){

setInterval(()=>{

images.forEach(img=>{

img.style.opacity="0.6";

});

images[index].style.opacity="1";
images[index].style.transform="scale(1.05)";

setTimeout(()=>{

images[index].style.transform="scale(1)";

},1000);

index++;

if(index>=images.length){

index=0;

}

},2000);

}

// ===== WELCOME =====
window.onload=function(){

setTimeout(()=>{

alert("🌈 Welcome to Little Stars PlaySchool!");

},1000);

};
const aboutProjectLink = document.getElementById("aboutProject");

if (aboutProjectLink) {
    aboutProjectLink.addEventListener("click", function (e) {
        e.preventDefault();

        const openPage = confirm("Do you want to open the About Project page?");

        if (openPage) {
            window.location.href = "aboutproject.html";
        }
    });
}
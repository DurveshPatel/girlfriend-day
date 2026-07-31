/*==================================================
        Happy Girlfriend's Day ❤️
        script.js - Part 1
==================================================*/

/*=========================================
        LOADER
=========================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "1s";

    }, 2500);

});


/*=========================================
        AOS INITIALIZE
=========================================*/

AOS.init({

    duration:1200,
    once:true,
    offset:120

});


/*=========================================
        TYPED TEXT
=========================================*/

new Typed("#typing",{

    strings:[

        "My Happiness ☺️💗",

        "My SweetHeart 🥰💕",

        "My Safe Place 🥹🤍",

        "My Bachcha 🐣💖"

    ],

    typeSpeed:70,

    backSpeed:45,

    backDelay:1800,

    loop:true

});


/*=========================================
        BACKGROUND MUSIC
=========================================*/

const bgMusic = document.getElementById("bgMusic");

const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click",()=>{

    bgMusic.play();

    document.getElementById("letter")
            .scrollIntoView({

        behavior:"smooth"

    });

});


/*=========================================
        NAVBAR ACTIVE
=========================================*/

const navbar = document.getElementById("navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 100){

        navbar.style.background="rgba(255,255,255,.85)";

        navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

    }

    else{

        navbar.style.background="rgba(255,255,255,.25)";

        navbar.style.boxShadow="none";

    }

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const id=this.getAttribute("href");

        document.querySelector(id).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*=========================================
        LOVE LETTER TYPING
=========================================*/

const letter = `

My Love ❤️,

Every day with you becomes
my favorite memory.

Every smile...😊
Every hug...🤗
Every ride...🛵
Every rainy evening...🌧️🌈

You make my world brighter. 🌏

Thank you for loving me,
supporting me,
understanding me,
and always standing beside me.

You are my happiness 🥰,
my peace 🤍,
my safe place 🫂,
and my forever.

Happy Girlfriend's Day ❤️

I Love You So Much My Jaana... 🥰💘♾️🦢🧿💐🪷

- Yours,
Duruuu 💗🧿

`;

let index = 0;

const letterBox = document.getElementById("letterTyping");

function typeLetter(){

    if(index < letter.length){

        letterBox.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter,45);

    }

}

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            typeLetter();

            observer.disconnect();

        }

    });

});

observer.observe(letterBox);


/*=========================================
        END PART - 1
=========================================*/


/*==================================================
        script.js - Part 2
==================================================*/

/*=========================================
        FLOATING HEARTS
=========================================*/

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },10000);

}

setInterval(createHeart,350);

/*=========================================
        LOVE COUNTER
=========================================*/

// Change this date to your relationship start date
const loveDate = new Date("2026-02-05T10:29:00");

function updateCounter(){

    const now = new Date();

    const difference = now - loveDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

updateCounter();

setInterval(updateCounter,1000);

/*=========================================
        GALLERY HOVER EFFECT
=========================================*/

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img)=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform = "scale(1.12)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform = "scale(1)";

    });

});

/*=========================================
        PARALLAX HERO
=========================================*/

window.addEventListener("scroll",()=>{

    const hero = document.getElementById("home");

    let offset = window.pageYOffset;

    hero.style.backgroundPositionY = offset * 0.5 + "px";

});

/*=========================================
        REVEAL ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(
    ".love-card, .gallery-item, .timeline-item"
);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.2
});

revealElements.forEach((element)=>{

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = ".8s ease";

    revealObserver.observe(element);

});

/*=========================================
        IMAGE CLICK EFFECT
=========================================*/

galleryImages.forEach((img)=>{

    img.addEventListener("click",()=>{

        img.style.transition = ".3s";

        img.style.transform = "scale(.95)";

        setTimeout(()=>{

            img.style.transform = "scale(1)";

        },200);

    });

});

/*=========================================
        END PART - 2
=========================================*/

/*==================================================
        script.js - Part 3
==================================================*/

/*=========================================
        SURPRISE POPUP
=========================================*/

const surpriseBtn = document.getElementById("surpriseBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

surpriseBtn.addEventListener("click", () => {

    popup.style.display = "flex";

    document.body.style.overflow = "hidden";

    launchConfetti();

});

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

    document.body.style.overflow = "auto";

});

window.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.style.display = "none";

        document.body.style.overflow = "auto";

    }

});


/*=========================================
        CONFETTI
=========================================*/

function launchConfetti() {

    const duration = 5000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {

        confetti({

            particleCount: 8,
            angle: 60,
            spread: 60,
            origin: { x: 0 }

        });

        confetti({

            particleCount: 8,
            angle: 120,
            spread: 60,
            origin: { x: 1 }

        });

        if (Date.now() > end) {

            clearInterval(interval);

        }

    }, 250);

}


/*=========================================
        HEART BURST
=========================================*/

function heartBurst() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.className = "heart";

        heart.style.left = (window.innerWidth / 2) + "px";

        heart.style.top = (window.innerHeight / 2) + "px";

        heart.style.position = "fixed";

        heart.style.fontSize = (20 + Math.random() * 25) + "px";

        heart.style.transition = "2s ease-out";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.left =
                (Math.random() * window.innerWidth) + "px";

            heart.style.top =
                (Math.random() * window.innerHeight) + "px";

            heart.style.opacity = "0";

            heart.style.transform =
                "scale(2) rotate(" + (Math.random() * 360) + "deg)";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

}

surpriseBtn.addEventListener("click", heartBurst);


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height =
            diameter + "px";

        circle.style.left =
            e.clientX - this.offsetLeft - radius + "px";

        circle.style.top =
            e.clientY - this.offsetTop - radius + "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


/*=========================================
        NAVBAR ACTIVE LINK
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        AUTO PLAY MUSIC AFTER FIRST CLICK
=========================================*/

document.addEventListener("click", function startMusic() {

    if (bgMusic.paused) {

        bgMusic.play().catch(() => {});

    }

    document.removeEventListener("click", startMusic);

}, { once: true });


/*=========================================
        CONSOLE MESSAGE ❤️
=========================================*/

console.clear();

console.log("%c❤️ Happy Girlfriend's Day ❤️",
    "font-size:28px;color:#ff3366;font-weight:bold;");

console.log("%cMade with Love by Durvesh ❤️",
    "font-size:18px;color:#ff4d6d;");


    /*=========================================
        PHOTO LIGHTBOX
=========================================*/

const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

const nextImage = document.getElementById("nextImage");

const prevImage = document.getElementById("prevImage");

let currentIndex = 0;

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;

        showImage();

        lightbox.style.display="flex";

    });

});

function showImage(){

    lightboxImage.src=images[currentIndex].src;

}

nextImage.onclick=()=>{

    currentIndex++;

    if(currentIndex>=images.length){

        currentIndex=0;

    }

    showImage();

};

prevImage.onclick=()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=images.length-1;

    }

    showImage();

};

closeLightbox.onclick=()=>{

    lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

};

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display==="flex"){

        if(e.key==="ArrowRight"){

            nextImage.click();

        }

        if(e.key==="ArrowLeft"){

            prevImage.click();

        }

        if(e.key==="Escape"){

            closeLightbox.click();

        }

    }

});



/*==================================================
        FALLING ROSE PETALS
==================================================*/

const petals = [

    "🌹",

    "🌸",

    "🌺",

    "💮"

];

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "rose-petal";

    petal.innerHTML = petals[
        Math.floor(Math.random() * petals.length)
    ];

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.fontSize =
        (18 + Math.random() * 22) + "px";

    petal.style.animationDuration =
        (8 + Math.random() * 6) + "s";

    petal.style.opacity =
        0.5 + Math.random() * 0.5;

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },15000);

}

setInterval(createPetal,450);




/*=========================================
        END OF SCRIPT.JS
==================================================*/
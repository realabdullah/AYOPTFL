import { gsap, ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
import { Tween } from "gsap/gsap-core";

gsap.registerPlugin(Timeline, Tween, ScrollTrigger);

const interest = document.getElementsByClassName("interest__section-summary");
const details = document.getElementsByClassName("interest__section-details");
let expanded = false;

let i;
for (i = 0; i < interest.length; i++) {
    let tl = new Timeline({
        paused: true,
    });

    Tween.set(details[i], { 
        autoAlpha: 0, 
        visibility: "hidden",
        height: 0,
        yPercent: -30,
    });

    tl.to(details[i], {
        autoAlpha: 1,
        yPercent: 0,
        visibility: "visible",
        height: "auto",
        duration: 0.8,
        ease: "power1.inOut"
    }, 0);

    tl.progress(1).progress(0);

    interest[i].addEventListener("click", function () {
        expanded = !expanded;
        if (expanded) {
            tl.play();
        } else {
            tl.reverse();
        }
    });
}

const openSpotify = document.querySelector(".openSpotify");
const spotifyModal = document.querySelector(".spotify__modal");
const modalOverlay = document.querySelector(".modal__overlay");

let openPlaylist = new Timeline({
    paused: true,
});

Tween.set(spotifyModal, { 
    autoAlpha: 0, 
    display: "none",
    yPercent: -100,
});

openPlaylist.to(spotifyModal, {
    autoAlpha: 1,
    yPercent: 0,
    display: "block",
    duration: 0.4,
    ease: "power1.inOut"
}, 0);

openPlaylist.progress(1).progress(0);

openSpotify.addEventListener("click", function () {
    modalOverlay.style.display = "block";
    openPlaylist.play();
});

modalOverlay.addEventListener("click", function () {
    modalOverlay.style.display = "none";
    openPlaylist.reverse();
});

// import { gsap, ScrollTrigger } from "gsap/all";

//scroll reveal
function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 2.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

function scrollAnimation() {
    // gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".reveal").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function () { animateFrom(elem) },
            onEnterBack: function () { animateFrom(elem, -1) },
            onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
};

window.onload = function () {
    scrollAnimation();
};

window.onunload = function () {
    scrollAnimation();
};

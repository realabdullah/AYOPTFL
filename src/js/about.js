import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";
import { Tween } from "gsap/gsap-core";

gsap.registerPlugin(Timeline, Tween);

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
        visiblity: "hidden",
        height: 0,
        yPercent: -30,
    });

    tl.to(details[i], {
        autoAlpha: 1,
        yPercent: 0,
        visiblity: "visible",
        height: "auto",
        duration: 0.8,
        ease: "power1.inOut"
    }, 0);

    tl.progress(1).progress(0);

    interest[i].addEventListener("click", function () {
        expanded = !expanded;
        if (expanded) {
            console.log(i)
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
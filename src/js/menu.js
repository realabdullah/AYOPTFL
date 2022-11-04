import { gsap,  } from "gsap";
import { Timeline } from "gsap/gsap-core";

// Mobile Nav
const toggle = document.getElementById("toggle");

const openNavbar = () => {
    const openTimeline = new Timeline();
    openTimeline.to(".navbar", 0, { display: "block" });
};

const closeNavbar = () => {
    const closeTimeline = new Timeline();
    closeTimeline.to(".navbar", 0, { display: "none" });
};

let isOpen = false;

toggle.onclick = function () {
    console.log("clicked");
    if (isOpen) {
        this.classList.remove("active");
        closeNavbar();
    } else {
        this.classList.add("active");
        openNavbar();
    }
    isOpen = !isOpen;
};
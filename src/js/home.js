import { gsap, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

document.querySelector("#toTop").addEventListener("click", function () {
    gsap.to(window, {duration: 2, scrollTo:".home__hero"});
});

document.querySelector("#portfolio").addEventListener("click", function () {
    gsap.to(window, {duration: 2, scrollTo:"#featured__projects"});
});
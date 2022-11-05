import { gsap, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const toPortfolio = document.querySelectorAll("#portfolio");

toPortfolio.forEach(element => {
    element.addEventListener("click", function () {
        gsap.to(window, {duration: 2, scrollTo:"#featured__projects"});
    });
});

document.querySelector("#toTop").addEventListener("click", function () {
    gsap.to(window, {duration: 2, scrollTo:".home__hero"});
});
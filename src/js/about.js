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
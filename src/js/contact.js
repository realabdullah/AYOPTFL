(function () {
    emailjs.init(process.env.PUBLIC_KEY);
})();

const sendEmail = async () => {
    try {
        document.querySelector('#submit-btn').innerHTML = 'Sending...';
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, document.querySelector('#contact-form'));
        setTimeout(() => {
            document.querySelector('#submit-btn').innerHTML = 'Send';
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#message').value = '';
        }, 3000);
    } catch (error) {
        document.querySelector('#submit-btn').innerHTML = 'Failed to send!';
        setTimeout(() => {
            document.querySelector('#submit-btn').innerHTML = 'Send';
        }, 3000);
    }
}

import { gsap, ScrollTrigger } from "gsap/all";

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
    gsap.registerPlugin(ScrollTrigger);

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
    document.getElementById('contact-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        await sendEmail();
    });
}

window.onunload = function () {
    scrollAnimation();
};
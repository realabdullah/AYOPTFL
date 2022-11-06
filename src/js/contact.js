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

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        await sendEmail();
    });
}
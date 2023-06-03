<script lang="ts" setup>
import emailjs from '@emailjs/browser';
const runtimeConfig = useRuntimeConfig();

const btnText = ref('Send');
const formEl = ref();
const name = ref('');
const email = ref('');
const message = ref('');

const sendMail = async () => {
    if (!name.value || !email.value || !message.value) return;

    try {
        btnText.value = 'Sending...';
        const data = {
            name: name.value,
            email: email.value,
            message: message.value
        };

        emailjs.sendForm(runtimeConfig.public.serviceId, runtimeConfig.public.templateId, formEl.value, runtimeConfig.public.publicKey);
        setTimeout(() => {
            btnText.value = 'Send';
            name.value = '';
            email.value = '';
            message.value = '';
        }, 2000);
    } catch (error) {
        console.log("error ==> ", error);
        btnText.value = 'Fail to send!';
        setTimeout(() => {
            btnText.value = 'Send';
        }, 2000);
    }
};
</script>

<template>
    <main class="container reveal">
        <BaseHeader page="contact" />
        <div class="contact__body">
            <h4 class="reveal">Get in <span>touch</span> with me<span>.</span></h4>
            <div class="contact__form reveal">
                <form ref="formEl" @submit.prevent="sendMail">
                    <label class="name reveal" for="name">
                        <input v-model="name" id="name" name="name" type="text" placeholder="NAME" required>
                    </label>
                    <label class="email reveal" for="email">
                        <input v-model="email" id="email" name="email" type="email" placeholder="E-MAIL" required>
                    </label>
                    <label class="message reveal" for="message">
                        <textarea v-model="message" id="message" name="message" placeholder="MESSAGE" cols="30" rows="5"
                            required></textarea>
                    </label>
                    <div class="submit__btn reveal">
                        <button id="submit-btn" type="submit">{{ btnText }}</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
    <BaseFooter />
</template>

<style lang="scss" scoped>
.container {
    background: $col-white;
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 3rem;

    @media (max-width: 700px) {
        padding: 0 2rem;
    }

    .contact__body {
        max-width: 94rem;
        margin: 0 auto;
        padding: 14.4rem 0;

        @media (max-width: 700px) {
            padding: 3.5rem 0;
        }

        h4 {
            font-weight: 600;
            font-size: 9.6rem;
            line-height: 11.5rem;
            color: $col-black;

            @media (max-width: 700px) {
                font-size: 2.7rem;
                line-height: 3.2rem;
            }

            span {
                color: $col-navyBlue;
                font-style: italic;
            }
        }

        .contact__form {
            margin-top: 6.4rem;

            @media (max-width: 700px) {
                margin-top: 1.6rem;
            }

            form {
                width: 100%;
                background: $col-navyBlue;
                max-width: 82rem;
                padding: 9.3rem 7.4rem;

                @media (max-width: 700px) {
                    width: auto;
                    padding: 9.3rem 2.4rem;
                    max-width: none;
                    display: flex;
                    flex-direction: column;
                    gap: 5.6rem;
                }

                .name {
                    width: 45%;
                    float: left;

                    @media (max-width: 700px) {
                        float: unset;
                        width: 100%;
                    }
                }

                .email {
                    width: 45%;
                    float: right;

                    @media (max-width: 700px) {
                        float: unset;
                        width: 100%;
                    }
                }

                .message {
                    width: 100%;
                    float: none;
                }

                input,
                textarea {
                    width: 100%;
                    border: none;
                    border-radius: 0;
                    border-bottom: 1px solid $col-white;
                    background: transparent;
                    color: $col-fadedWhite;
                    font-weight: 500;
                    font-size: 1.6rem;
                    line-height: 120%;
                    padding-bottom: 10px;
                    outline: none;

                    &::placeholder {
                        color: $col-fadedWhite;
                    }
                }

                textarea {
                    margin-top: 12rem;

                    @media (max-width: 700px) {
                        margin-top: unset;
                    }
                }

                .submit__btn {
                    margin-top: 4.8rem;

                    @media (max-width: 700px) {
                        margin-top: 1.4rem;
                    }

                    button {
                        border: 2px solid $col-white;
                        padding: 0.8rem 2.4rem;
                        font-weight: 600;
                        font-size: 1.6rem;
                        line-height: 1.9rem;
                        color: $col-white;
                        background: linear-gradient(to right, $col-white 50%, $col-navyBlue 50%);
                        background-size: 200% 100%;
                        background-position: right bottom;
                        transition: all .5s ease-out;

                        &:hover {
                            cursor: pointer;
                            background-position: left bottom;
                            color: $col-navyBlue;
                        }
                    }
                }
            }
        }
    }
}
</style>

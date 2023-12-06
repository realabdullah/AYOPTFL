<script lang="ts" setup>
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
</script>

<template>
    <footer>
        <section class="footer">
            <div class="footer-section">
                <div class="footer-section__body">
                    <div class="item-0 footer-section__body-logo">
                        <IconLogo variant="large" />
                    </div>
                    <div class="sitemap item-1">
                        <span class="sitemap-header">SITEMAP</span>
                        <ul>
                            <li><nuxt-link to="/">HOME</nuxt-link></li>
                            <li><nuxt-link to="/">PORTFOLIO</nuxt-link></li>
                            <li><nuxt-link to="/about">ABOUT</nuxt-link></li>
                            <li><nuxt-link to="/contact">CONTACT</nuxt-link></li>
                        </ul>
                    </div>
                    <div class="sitemap item-2">
                        <span class="sitemap-header">FOLLOW ME</span>
                        <ul>
                            <li><a href="https://www.behance.net/ayoadenowo" target="_blank"
                                    rel="noopener noreferrer">BEHANCE</a></li>
                            <li><a href="https://www.linkedin.com/in/ayomideadenowo/" target="_blank"
                                    rel="noopener noreferrer">LINKEDIN</a></li>
                            <li><a href="https://twitter.com/AyomideAdenowo1" target="_blank"
                                    rel="noopener noreferrer">TWITTER</a></li>
                        </ul>
                    </div>
                    <div class="sitemap item-3">
                        <span class="sitemap-header">CONTACT ME</span>
                        <ul>
                            <li><a href="tel:+2348145030598">+234 8145 030 598</a></li>
                            <li><a href="mailto:adenowoayomide3@gmail.com">adenowoayomide3@gmail.com</a></li>
                        </ul>
                        <a href="https://drive.google.com/file/d/19dBxyNyTQamjQqQfv4rRi8ri7iRVbUl3/view?usp=sharing"
                            target="_blank" rel="noopener noreferrer">
                            <button>Resumé</button>
                        </a>
                    </div>
                </div>
                <hr>
                <div class="footer-section__attribution">
                    <span class="copyright">©2022 copyright. All rights reserved</span>
                    <IconArrow variant="up" @click="scrollToTop" />
                    <span>A-yo!</span>
                </div>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background: $col-navyBlue;
    padding: 0 4.8rem;

    @media (max-width: 700px) {
        padding: 0 2rem;
    }

    .footer {
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;

        &-section {
            &__body {
                width: 100%;
                padding: 14.3rem 0;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 4rem;

                @media (max-width: 700px) {
                    grid-template-columns: repeat(1, 1fr);
                    gap: 3rem;
                    padding: 5.6rem 0;
                }

                &-logo {
                    @media (max-width: 700px) {
                        margin-bottom: 3rem;
                    }
                }

                .sitemap {

                    .sitemap-header {
                        white-space: nowrap;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 1.6rem;
                        line-height: 1.9rem;
                        color: $col-white;
                        display: block;
                        padding-bottom: 3.2rem;

                        @media (max-width: 700px) {
                            font-size: 1.4rem;
                            line-height: 1.7rem;
                            padding-top: 3.2rem;
                            padding-bottom: 1.4rem;
                        }
                    }

                    ul {

                        li {

                            &:not(:first-child) {
                                padding-top: 1.6rem;
                            }

                            a {
                                text-decoration: none;
                                font-style: normal;
                                font-weight: 500;
                                font-size: 1.6rem;
                                line-height: 1.9rem;
                                color: $col-white;
                                transition: cubic-bezier(0.075, 0.82, 0.165, 1);

                                @media (max-width: 700px) {
                                    font-size: 1.4rem;
                                    line-height: 1.7rem;
                                }

                                &:hover {
                                    cursor: pointer;
                                    color: #ffffffe0;
                                }
                            }
                        }
                    }

                    button {
                        border: 0.2rem solid $col-white;
                        padding: 0.8rem 2.4rem;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 1.6rem;
                        line-height: 1.9rem;
                        color: $col-white;
                        cursor: pointer;
                        margin-top: 6.4rem;
                        background: linear-gradient(to right, $col-white 50%, $col-navyBlue 50%);
                        background-size: 200% 100%;
                        background-position: right bottom;
                        transition: all .5s ease-out;

                        @media (max-width: 700px) {
                            font-size: 1.4rem;
                            line-height: 1.7rem;
                            margin-top: 4.8rem;
                        }

                        &:hover {
                            background-position: left bottom;
                            color: $col-navyBlue;
                        }
                    }
                }
            }

            hr {
                height: 1px;
                background: $col-white;
                width: 100%;
            }

            &__attribution {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1.5rem 0;
                position: relative;

                span {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 1.6rem;
                    line-height: 1.9rem;
                    color: $col-white;

                    @media (max-width: 700px) {
                        font-size: 1.4rem;
                        line-height: 1.7rem;
                    }
                }

                svg {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    cursor: pointer;

                    @media (max-width: 700px) {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>

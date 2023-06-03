<script lang="ts" setup>

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
                            <li><a href="https://docs.google.com/document/d/1rFh464HNn-HV5wimK8GXVLjyr4nY2crh1t-hto8YIC0/edit"
                                    target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
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
                        <a href="https://docs.google.com/document/d/1rFh464HNn-HV5wimK8GXVLjyr4nY2crh1t-hto8YIC0/edit"
                            target="_blank" rel="noopener noreferrer">
                            <button>Resumé</button>
                        </a>
                    </div>
                </div>
                <hr>
                <div class="footer-section__attribution">
                    <span class="copyright">©2022 copyright. All rights reserved</span>
                    <IconArrow variant="up" />
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
        max-width: 1500px;
        margin: 0 auto;

        @media (max-width: 700px) {
            max-width: unset;
            margin: unset;
        }

        &-section {
            &__body {
                padding: 14.3rem 0;
                display: grid;
                grid-template-rows: 1fr 1fr;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                grid-template-areas:
                    "label0 label0 label1 label2 label3"
                    "label0 label0 label1 label2 label3";
                gap: 4rem;

                @media (max-width: 514px) {
                    grid-template-areas:
                        "label0 label0 label0 label0"
                        "label1 label1 label2 label2"
                        "label3 label3 label3 label3";
                    gap: 0;
                }

                @media (min-width: 515px) and (max-width: 900px) {
                    grid-template-areas:
                        "label0 label0 label0 label0"
                        "label1 label2 label3 label3";
                    gap: 5rem;
                }

                @media (min-width: 901px) and (max-width: 1145px) {
                    grid-template-areas:
                        "label0 label1 label1 label2"
                        "label3 label3 label3 label3";
                }

                .item-0 {
                    grid-area: label0;
                }

                .item-1 {
                    grid-area: label1;
                }

                .item-2 {
                    grid-area: label2;
                }

                .item-3 {
                    grid-area: label3;
                }

                &-logo {
                    @media (max-width: 700px) {
                        width: max-content;
                        margin-bottom: 3rem;
                    }

                    @media (min-width: 701px) and (max-width: 850px) {
                        width: max-content;
                        margin-bottom: 3rem;
                    }

                    svg {
                        @media (max-width: 700px) {
                            width: max-content;
                        }
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
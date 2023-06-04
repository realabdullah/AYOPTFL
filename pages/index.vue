<script lang="ts" setup>
const services = [
    {
        title: 'Product Design',
        description: 'UI/UX Designs for all your website, applications & other interfaces.',
        image: 'https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828612/AYPTFL/product-design_es8o0x.svg',
    },
    {
        title: 'Graphic Design',
        description: 'Different designs fall into this category, ranging from logos to banners, business cards.',
        image: 'https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828610/AYPTFL/graphic-design_l5bs2c.svg',
    },
    {
        title: 'Brand Design',
        description: 'I can help your brand tell its story to reach its target audience.',
        image: 'https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828605/AYPTFL/brand-design_udt6kq.svg',
    },
];

const projects = [
    {
        title: "Big Architecture",
        image: "https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828605/AYPTFL/big_vdkknk.webp",
        link: "https://www.behance.net/ayoadenowo"
    },
    {
        title: "Osan",
        image: "https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828611/AYPTFL/osan_neme1h.webp",
        link: "https://www.behance.net/gallery/147879007/Osan"
    },
    {
        title: "Data Lens",
        image: "https://res.cloudinary.com/dxvhsze0l/image/upload/v1685465325/zgsbtqpc3tpnzianbfa8.png",
        link: "https://www.behance.net/gallery/147879007/Osan"
    },
    {
        title: "Forene",
        image: "https://res.cloudinary.com/dxvhsze0l/image/upload/v1685465323/gbfd3kynquvdhvknlphl.png",
        link: "https://www.behance.net/gallery/147879007/Osan"
    },
    {
        title: "Contenta",
        image: "https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828606/AYPTFL/contenta_txss8z.webp",
        link: "https://www.behance.net/ayoadenowo"
    },
    {
        title: "Mimi’s Threads ‘n’ Trends",
        image: "https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828611/AYPTFL/mimi_xbuqtn.webp",
        link: "https://www.behance.net/gallery/145952867/Mimis-Threads-n-Trends"
    },
];

const scrollLeftBtnDisabled = ref(true);
const scrollRightBtnDisabled = ref(false);
const projectsContainer = ref();

const scrollProjectsHorizontally = (mode: string) => {
    const scrollAmount = mode === 'left' ? -400 : 400;
    projectsContainer.value.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });

    const { scrollLeft, scrollWidth, clientWidth } = projectsContainer.value;
    scrollLeftBtnDisabled.value = scrollLeft === 0;
    scrollRightBtnDisabled.value = scrollLeft === scrollWidth - clientWidth;
};

const goToContact = () => {
    navigateTo("/contact");
};
</script>

<template>
    <main style="padding: 0;">
        <section class="home__hero">
            <div class="home__hero--body">
                <BaseHeader page="home" />

                <div class="side__attribution reveal">
                    <span>Ayomide</span>
                    <br>
                    <span>Adenowo.</span>
                </div>

                <div class="design__motto reveal">
                    <span>Designs</span>
                    <br>
                    <span>with</span>
                    <span class="design__motto--italics">purpose.</span>
                </div>
            </div>
        </section>

        <section class="home__services reveal">
            <span class="home__services--header reveal">My Services<span class="dot">.</span></span>

            <div class="home__services--cards reveal">
                <div v-for="(service, index) in services" :key="index" class="home__services--card">
                    <img :src="service.image" alt="product-design">
                    <span class="__card--title">{{ service.title }}</span>
                    <span class="__card--desc">{{ service.description }}</span>
                </div>
            </div>

            <BaseButton style="margin: 0 auto; margin-top: 6.4rem;" text="Contact me" @click="goToContact" />
        </section>

        <section class="ideate__section reveal">
            <div class="ideate__section--body reveal">
                <div class="ideate__section--body--text">
                    <span>Ideate.</span>
                    <br>
                    <span>Design.</span>
                    <br>
                    <span>Innovate.</span>
                </div>
            </div>
        </section>

        <section id="featured__projects" class="featured__projects--container reveal">
            <div class="featured__projects">
                <div class="featured__projects--header">
                    <div>
                        <span>Featured Projects<span class="dot">.</span></span>
                    </div>

                    <div class="ctas">
                        <button :disabled="scrollLeftBtnDisabled" @click="scrollProjectsHorizontally('left')">
                            <IconArrow variant="left" />
                        </button>
                        <button :disabled="scrollRightBtnDisabled" @click="scrollProjectsHorizontally('right')">
                            <IconArrow variant="right" />
                        </button>
                    </div>
                </div>

                <div ref="projectsContainer" class="featured__projects--cards reveal">
                    <div v-for="(project, index) in projects" :key="index" class="featured__projects--card">
                        <img id="project_img" class="tall" :src="project.image" :alt="project.title"> <br>
                        <span>{{ project.title }}</span>

                        <a class="view__project" :href="project.link" aria-label="Behance" target="_blank"
                            rel="noopener noreferrer">View →</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="short__quote reveal">
            <p class="__quote reveal">Less, but better.</p>
            <br>
            <p class="__citee reveal">-Dieter Rams</p>
        </section>

        <section id="contact__me" class="awesome__things reveal">
            <div class="awesome__things--body">
                <span class="big__text reveal"><span class="awesome">Awesome</span> things await.</span>
                <br>
                <span class="regular__text reveal">Feel free to contact me.</span> <br>
                <BaseButton style="margin: 0 auto; margin-top: 3.2rem;" text="Let's Talk" @click="goToContact" />
            </div>
        </section>
    </main>
    <BaseFooter />
</template>

<style lang="scss" scoped>
main {
    .home__hero {
        background: $col-navyBlue;

        &--body {
            height: 100vh;
            max-width: 1500px;
            margin: 0 auto;
            padding: 0 3rem;
            position: relative;
            overflow-y: hidden;

            @media (max-width: 700px) {
                padding: 0 2rem;
                max-width: none;
                margin: unset;
            }

            .side__attribution {
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                color: $col-white;
                font-size: 2rem;
                font-weight: 600;
                line-height: 2.4rem;
            }

            .design__motto {
                position: absolute;
                bottom: 0;
                right: 3rem;
                text-align: right;

                @media (max-width: 700px) {
                    bottom: 9.2rem;
                    right: 2rem;
                }

                span {
                    font-weight: 700;
                    @include fluid-type(350px, 1500px, 44px, 200px);
                    color: $col-white;
                }

                &--italics {
                    padding-left: 2.5rem;
                    font-style: italic;

                    @media (max-width: 700px) {
                        padding-left: 1rem;
                    }
                }
            }
        }
    }

    .home__services {
        max-width: 1500px;
        margin: 0 auto;
        background: $col-white;
        height: 100vh;
        padding: 0 4.8rem;
        @include setFlex(flex, flex-start, center, column);

        @media (min-width: 701px) and (max-width: 900px) {
            height: auto;
            padding: 6.8rem 4.8rem;
        }

        @media (max-width: 700px) {
            height: auto;
            padding: 4.8rem 2rem;
        }

        &--header {
            font-weight: 600;
            font-size: 6.4rem;
            line-height: 7.7rem;
            color: $col-black;

            @media (max-width: 700px) {
                font-size: 4.8rem;
                line-height: 5.8rem;
            }

            .dot {
                color: $col-navyBlue;
            }
        }

        &--cards {
            margin-top: 7rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 6rem;
            grid-auto-rows: 1fr;

            @media (min-width: 701px) and (max-width: 900px) {
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
            }

            @media (max-width: 700px) {
                grid-template-columns: repeat(1, 1fr);
                gap: 3rem;
            }

            .home__services--card {
                border: 3px solid $col-black;
                padding: 4rem 2rem;
                @include setFlex(flex, flex-start, unset, column);

                img {
                    width: 5.4rem;
                    height: 5.4rem;
                    margin-bottom: 3.7rem;

                    @media (max-width: 700px) {
                        width: 3.9rem;
                        height: 3.9rem;
                    }
                }

                .__card--title {
                    margin-bottom: 1rem;
                    font-weight: 600;
                    font-size: 2.4rem;
                    line-height: 2.9rem;
                    color: $col-black;
                }

                .__card--desc {
                    font-weight: 400;
                    font-size: 1.6rem;
                    line-height: 1.9rem;
                    color: $col-black;

                    @media (max-width: 700px) {
                        font-size: 1.2rem;
                        line-height: 1.4rem;
                    }
                }
            }
        }
    }

    .ideate__section {
        background: url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828610/AYPTFL/gradient-bg_pql5wi.webp');
        background-size: cover;
        background-repeat: no-repeat;

        &--body {
            max-width: 1500px;
            margin: 0 auto;
            height: 100vh;
            padding: 0 4.8rem;
            position: relative;

            @media (max-width: 700px) {
                max-width: none;
                padding: 3rem 2rem;
                height: 50vh;
            }

            &--text {
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);

                span {
                    font-weight: 600;
                    font-size: 14.2rem;
                    line-height: 18.3rem;
                    color: $col-white;

                    @media (max-width: 700px) {
                        display: block;
                        font-size: 6.8rem;
                        line-height: 4rem;
                        padding: 1.5rem 0;
                    }
                }
            }
        }
    }
}

.featured__projects--container {
    background: $col-white;
    padding: 14.4rem 4.8rem;

    @media (max-width: 700px) {
        padding: 4.8rem 2rem;
    }

    .featured__projects {
        max-width: 1500px;
        margin: 0 auto;
        border-top: 2px solid $col-black;
        border-bottom: 2px solid $col-black;

        @media (max-width: 700px) {
            max-width: unset;
            margin: unset;
            border-top: unset;
            border-bottom: unset;
        }

        &--header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 14.4rem;
            padding-bottom: 5.2rem;

            @media (max-width: 700px) {
                padding-top: 4.8rem;
                padding-bottom: 3rem;
            }

            span {
                font-weight: 600;
                font-size: 6.4rem;
                line-height: 7.7rem;
                color: $col-black;

                @media (max-width: 700px) {
                    font-size: 4.8rem;
                    line-height: 5.8rem;
                }

                .dot {
                    color: $col-navyBlue;
                }
            }

            .ctas {
                display: flex;
                align-items: center;
                gap: 1.5rem;

                @media (max-width: 700px) {
                    display: none;
                }

                button {
                    border: 0;
                    background: transparent;
                    cursor: pointer;

                    &:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }
                }
            }
        }

        &--cards {
            display: flex;
            flex-wrap: nowrap;
            gap: 1.5rem;
            padding-bottom: 14.4rem;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            overflow-y: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;

            &::-webkit-scrollbar {
                display: none;
            }

            @media (max-width: 700px) {
                flex-direction: column;
                flex-wrap: unset;
                gap: 3rem;
                padding-bottom: 4.8rem;
                overflow-y: unset;
            }

            .featured__projects--card {
                position: relative;
                width: 38.9rem;

                @media (max-width: 700px) {
                    width: 100%;
                }

                &:nth-child(odd) {
                    height: 48.3rem;

                    @media (max-width: 700px) {
                        height: unset;
                    }
                }

                &:nth-child(even) {
                    height: 30rem;

                    @media (max-width: 700px) {
                        height: unset;
                    }
                }

                img {
                    object-fit: cover;
                }

                .view__project {
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    padding: 5.6rem 2.2rem;
                    font-weight: 600;
                    font-size: 3.2rem;
                    line-height: 100%;
                    background: $col-navyBlue;
                    color: $col-white;
                    text-decoration: none;
                    border-radius: 50%;
                    opacity: 0;
                }

                &:hover {
                    cursor: pointer;

                    .view__project {
                        transition: .5s ease;
                        opacity: 1;
                    }
                }

                span {
                    padding-top: 1.5rem;
                    font-weight: 600;
                    font-size: 3.2rem;
                    line-height: 3.8rem;
                    color: $col-black;

                    @media (max-width: 700px) {
                        font-size: 2.4rem;
                        line-height: 2.9rem;
                    }
                }
            }

            .short-card {
                height: 30rem;
            }
        }
    }
}

.short__quote {
    background: url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828613/AYPTFL/short-bg_tyicyz.webp');
    background-size: cover;
    padding: 7rem 0;
    position: relative;

    @media (max-width: 700px) {
        padding: 3.2rem 0;
    }

    .__quote {
        font-weight: 600;
        font-size: 4.8rem;
        line-height: 5.8rem;
        color: $col-white;
        text-align: center;

        @media (max-width: 700px) {
            font-size: 3.2rem;
            line-height: 3.8rem;
        }
    }

    .__citee {
        font-style: italic;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.9rem;
        color: $col-white;
        padding-top: 0.9rem;
        text-align: right;
        position: absolute;
        right: 37%;

        @media (max-width: 700px) {
            font-size: 1.8rem;
            line-height: 2.2rem;
            right: 5.5rem;
            bottom: 2rem;
            text-align: right;
        }
    }
}

.awesome__things {
    padding: 14.4rem 4.8rem;
    position: relative;
    background: $col-white;
    @include setFlex(flex, flex-end, unset, column);

    @media (max-width: 700px) {
        padding: 4.8rem 2rem;
        padding-top: 5.5rem;
        padding-bottom: 3.8rem;
        position: unset;
    }

    &--body {
        max-width: 1500px;
        text-align: end;

        @media (max-width: 700px) {
            max-width: unset;
            margin: unset;
            text-align: center;
        }

        .big__text {
            font-style: normal;
            font-weight: 600;
            font-size: 9.6rem;
            line-height: 11.5rem;
            color: $col-black;

            @media (max-width: 700px) {
                font-size: 4.8rem;
                line-height: 5.8rem;
            }

            .awesome {
                font-style: italic;
                color: $col-navyBlue;
            }
        }

        .regular__text {
            display: block;
            padding-top: 1.6rem;
            padding-bottom: 1.6rem;
            font-style: normal;
            font-weight: 500;
            font-size: 3.2rem;
            line-height: 3.8rem;
            color: $col-black;

            @media (max-width: 700px) {
                font-size: 2.4rem;
                line-height: 2.9rem;
            }
        }

        .contact__me {
            @media (max-width: 700px) {
                margin-top: 10px;
            }
        }
    }
}
</style>

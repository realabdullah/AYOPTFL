<script lang="ts" setup>
const interests = [
    {
        title: "Books",
        story: "I enjoy reading fictional books quite a bit, I believe it’s a good way to excercise my imagination quite a bit.I’m still unable to decide whether my favourite genre is mystery or thriller.At the moment I’m reading Dan Brown’s Digital Fortress and also going through George R.R.Martin’s series of Fire and Ice books with the hope of catching up to him before he finishes up the series.",
        images: [
            "https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828608/AYPTFL/digital-fortress_muxodm.webp",
            "https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828609/AYPTFL/GOT_tqal01.webp",
        ],
    },
    {
        title: "Music",
        story: "Music is one of the things I consider to be among the greatest gifts of life. While my taste may change from time to time, these are some of my favourite albums & tracks",
        lists: [
            "Jon Bellion - The Human Condition",
            "AJR - The Click (Deluxe Edition)",
            "The Weeknd - Blinding Lights",
            "Cannons - Fire for you",
        ],
        images: [
            "https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828611/AYPTFL/human-condition_dxwhr6.webp",
            "https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828613/AYPTFL/the-click_mskvcv.webp",
            "https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828605/AYPTFL/blinding-light_dexgji.webp",
            "https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828605/AYPTFL/artworks_eloqte.webp",
        ]
    },
    {
        title: "Gaming",
        story: "Gaming got me into design and it’s fair to say I play quite a few games ranging from multiplayer fps like Call of Duty and Apex Legends to RPGs such as Skyrim. At the moment I’m currently enjoying the fascinating world of No Man’s Sky and the  occasional run of Hades.",
        images: [
            "https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828612/AYPTFL/no-mans-sky_edqjgp.webp",
            "https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828610/AYPTFL/hades_alg7dc.webp",
        ]
    }
];
const isInterestOpen = ref(false);
const openedInterest = ref(-1);
const isSpotifyModalOpen = ref(false);

const openInterest = (index: number) => {
    if (openedInterest.value === index) {
        openedInterest.value = -1;
        isInterestOpen.value = false;
    } else {
        openedInterest.value = index;
        isInterestOpen.value = true;
    }
};
</script>

<template>
    <main class="about__container reveal">
        <BaseHeader page="about" />
        <section class="about">
            <h4 class="about__header reveal">Creative Designer<span>.</span></h4>
            <p class="about__paragraph reveal">I’m a designer with a penchant for learning new things and expanding my
                horizons.
                I’ve worked at various roles from my teenage years ranging from social media management to CMS
                management &
                Product Design.
                <span>I see every project as an avenue to grow and learn new things while also bringing my best to the
                    table
                    and giving it my all.</span>
            </p>
        </section>

        <section class="interests reveal">
            <h4 class="interests__header reveal">Personal Interests<span>.</span></h4>

            <div class="interests__section">
                <div v-for="(interest, index) in interests" :key="index" class="interest__section reveal">
                    <div class="interest__section-summary" @click="openInterest(index)">
                        <h3 class="interest__section-summary-title">{{ interest.title }}<span>.</span></h3>
                        <IconOpenClose :variant="isInterestOpen && openedInterest === index ? 'close' : 'open'" />
                    </div>
                    <div v-show="openedInterest === index" class="interest__section-details">
                        <div class="interest__detail">
                            <p class="interest__story">{{ interest.story }}</p>
                            <ul v-if="interest.lists?.length > 0">
                                <li v-for="(list, index) in interest.lists" :key="index">
                                    {{ list }}
                                </li>
                            </ul>
                            <button v-if="interest.title === 'Music'" class="openSpotify" @click="isSpotifyModalOpen = true">My Spotify Playlist</button>
                        </div>
                        <div class="interest__images">
                            <img v-for="(image, index) in interest.images" :key="index" :src="image" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="certificates reveal">
            <h4 class="certificates__header reveal">Certificates<span>.</span></h4>

            <div class="certificates__table reveal">
                <div class="certificate table__header reveal">
                    <span>CERTIFICATE</span>
                    <span>PLATFORM</span>
                    <span>YEAR</span>
                </div>
                <div class="certificate reveal">
                    <span>UI/UX Design</span>
                    <span>The Zuri Team</span>
                    <span>2021</span>
                </div>
                <div class="certificate reveal">
                    <span>Cybersecurity Essentials</span>
                    <span>CISCO Networking Academy</span>
                    <span>2020</span>
                </div>
                <div class="certificate reveal">
                    <span>IT Essentials</span>
                    <span>CISCO Networking Academy</span>
                    <span>2019</span>
                </div>
                <div class="certificate reveal">
                    <span>Introduction to Cybersecurity</span>
                    <span>CISCO Networking Academy</span>
                    <span>2018</span>
                </div>
                <div class="certificate reveal">
                    <span>Get Connected</span>
                    <span>CISCO Networking Academy</span>
                    <span>2018</span>
                </div>
                <div class="certificate reveal">
                    <span>Introduction to Graphic Design</span>
                    <span>New Wolex Computer Institute</span>
                    <span>2013</span>
                </div>
            </div>
        </section>
    </main>

    <div v-show="isSpotifyModalOpen" class="spotify__modal">
        <iframe style="border: radius 1.2rem;"
            src="https://open.spotify.com/embed/playlist/5OzvYB5Z7ZlLDuxbPjikAL?utm_source=generator&theme=0" width="100%"
            height="100%" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>

    <div v-show="isSpotifyModalOpen" class="modal__overlay" @click="isSpotifyModalOpen = false">
    </div>

    <BaseFooter />
</template>

<style lang="scss" scoped>
.about__container {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 3rem;

    @media (max-width: 700px) {
        padding: 0 2rem;
    }

    .about {
        padding-top: 9.6rem;

        @media (max-width: 700px) {
            padding-top: 3.5rem;
        }

        &__header {
            font-weight: 600;
            font-size: 9.6rem;
            line-height: 11.5rem;
            color: $col-black;
            padding-bottom: 5.8rem;

            @media (max-width: 700px) {
                padding-bottom: 0.8rem;
                font-size: 2.4rem;
                line-height: 2.9rem;
            }

            span {
                color: $col-navyBlue;
            }
        }

        &__paragraph {
            font-weight: 500;
            font-size: 2.4rem;
            line-height: 140%;
            color: $col-black;

            @media (max-width: 700px) {
                font-size: 1.2rem;
            }

            span {
                display: block;
                padding-top: 5rem;

                @media (max-width: 700px) {
                    padding-top: 3rem;
                }
            }
        }
    }

    .interests {
        padding-top: 26rem;

        @media (max-width: 700px) {
            padding-top: 7.2rem;
        }

        &__header {
            font-weight: 600;
            font-size: 9.6rem;
            line-height: 11.5rem;
            color: $col-black;
            padding-bottom: 9.6rem;

            @media (max-width: 700px) {
                padding-bottom: 2.4rem;
                font-size: 2.4rem;
                line-height: 2.9rem;
            }

            span {
                color: $col-navyBlue;
            }
        }

        &__section {
            .interest__section {
                border-top: 2px solid $col-black;
                padding: 4rem 0;

                @media (max-width: 700px) {
                    padding: 1.5rem 0;
                }

                &-summary {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    &:hover {
                        cursor: pointer;
                    }

                    @media (max-width: 700px) {
                        padding: 1.5rem 0;
                    }

                    &-title {
                        font-weight: 600;
                        font-size: 9.6rem;
                        line-height: 130%;
                        color: $col-black;

                        @media (max-width: 700px) {
                            font-size: 2.4rem;
                        }

                        span {
                            color: $col-navyBlue;
                        }
                    }

                    svg {
                        @media (max-width: 700px) {
                            width: 1.5rem;
                            height: 1.5rem;
                        }
                    }
                }

                &-details {
                    margin-top: 3rem;
                    display: flex;
                    align-items: flex-start;
                    gap: 13.5rem;

                    @media (max-width: 700px) {
                        flex-direction: column;
                        gap: 3rem;
                    }

                    .interest__detail {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1.5rem;

                        ul,
                        a {
                            display: block;

                            li {
                                @extend .interest__story;
                            }
                        }

                        .openSpotify {
                            font-weight: 600;
                            font-size: 2.4rem;
                            line-height: 2.9rem;
                            border: 0;
                            background: transparent;
                            text-decoration: underline;
                            cursor: pointer;
                        }
                    }

                    .interest__story {
                        font-weight: 400;
                        font-size: 2.4rem;
                        line-height: 2.9rem;
                        color: $col-black;
                    }

                    .interest__image {
                        display: flex;
                        align-items: stretch;
                        gap: 3.3rem;

                        @media (max-width: 700px) {
                            justify-content: space-around;
                        }

                        img {
                            width: 20rem;
                            height: 30rem;

                            @media (max-width: 700px) {
                                width: 12.7rem;
                                height: 19rem;
                            }
                        }
                    }

                    .interest__images {
                        display: grid;
                        grid-template-columns: repeat(2, 17rem);
                        grid-template-rows: repeat(2, 17rem);
                        grid-column-gap: 2.4rem;
                        grid-row-gap: 2.4rem;

                        @media (max-width: 700px) {
                            grid-template-columns: repeat(2, 1fr);
                            grid-template-rows: repeat(2, 1fr);
                            grid-column-gap: 2rem;
                            grid-row-gap: 2rem;
                        }

                        img {
                            width: 16rem;
                            height: 16rem;
                        }
                    }
                }

                &:last-child {
                    border-bottom: 2px solid $col-black;
                }
            }
        }
    }

    .certificates {
        padding: 26rem 0;

        @media (max-width: 700px) {
            padding: 7.2rem 0;
        }

        &__header {
            font-weight: 600;
            font-size: 9.6rem;
            line-height: 11.5rem;
            color: $col-black;
            padding-bottom: 7.2rem;

            @media (max-width: 700px) {
                padding-bottom: 2.4rem;
                font-size: 2.4rem;
                line-height: 2.9rem;
            }

            span {
                color: $col-navyBlue;
            }
        }

        &__table {
            width: 100%;

            .certificate {
                border-bottom: 2px solid $col-black;
                padding: 3.2rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;

                @media (max-width: 700px) {
                    padding: 1.2rem 0;
                }

                span {
                    font-weight: 600;
                    font-size: 2.4rem;
                    line-height: 2.9rem;
                    color: $col-black;
                    text-align: left;

                    &:first-child {
                        width: 18.25rem;
                        padding-right: 7rem;

                        @media (min-width: 1020px) {
                            width: 55rem;
                        }

                        @media (max-width: 700px) {
                            width: 15.5rem;
                            padding-right: 1rem;
                        }
                    }

                    &:nth-child(2) {
                        width: calc(100% - 34rem);

                        @media (min-width: 1020px) {
                            width: calc(100% - 24rem);
                        }

                        @media (min-width: 701px) and (max-width: 850px) {
                            width: calc(100% - 10rem);
                        }

                        @media (max-width: 700px) {
                            width: calc(100% - 0rem);
                        }
                    }

                    &:last-child {
                        width: calc(100% - 68rem);

                        @media (max-width: 700px) {
                            width: calc(100% - 15rem);
                        }

                        @media (min-width: 701px) and (max-width: 850px) {
                            width: calc(100% - 30rem);
                        }
                    }

                    @media (max-width: 700px) {
                        font-size: 1rem;
                        line-height: 1.2rem;
                    }
                }
            }

            .table__header {
                span {
                    font-weight: 700;
                }
            }
        }
    }
}

.spotify__modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) !important;
        width: 80%;
        height: 70vh;
        z-index: 2;

        @media (max-width: 701px) {
            width: 95%;
        }
    }

    .modal__overlay {
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #adb1bbd6;
    }
</style>

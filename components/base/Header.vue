<script lang="ts" setup>
const props = defineProps<{
    page: string;
}>();

const color = computed(() => {
    if (isMenuOpen.value) return '#FFFFFF';

    if (props.page === 'home') {
        return '#FFFFFF';
    }

    return '#000000';
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const mobileMenuStyle = computed(() => {
    if (isMenuOpen.value) {
        return {
            position: 'fixed',
            zIndex: 2,
            right: '2rem',
            left: '2rem',
        };
    }

    return {
       position: 'relative',
    };
});
</script>

<template>
    <div class="header">
        <!-- DESKTOP -->
        <nav class="header-nav">
            <nuxt-link to="/" class="header-nav__logo">
                <IconLogo variant="normal" />
            </nuxt-link>

            <ul class="header-nav__links">
                <li><nuxt-link to="/">HOME</nuxt-link></li>
                <li><nuxt-link to="/">PORTFOLIO</nuxt-link></li>
                <li><nuxt-link to="/about">ABOUT</nuxt-link></li>
                <li><nuxt-link to="/contact">CONTACT</nuxt-link></li>
            </ul>

            <ul class="header-nav__socials">
                <li>
                    <a href="https://www.behance.net/ayoadenowo" target="_blank" rel="noopener noreferrer">
                        <IconBehance class="icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ayomideadenowo/"
                        target="_blank" rel="noopener noreferrer">
                        <IconLinkedIn class="icon" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/AyomideAdenowo1" target="_blank" rel="noopener noreferrer">
                        <IconTwitter class="icon" />
                    </a>
                </li>
            </ul>
        </nav>

        <!-- MOBILE -->
        <div class="mobile-header" :style="mobileMenuStyle">
            <nuxt-link to="/" class="mobile-header__logo">
                <IconLogo variant="normal" />
            </nuxt-link>

            <button @click="toggleMenu">
                <IconHamburger :variant="isMenuOpen ? 'close' : 'open'" />
            </button>
        </div>
    </div>

    <div v-show="isMenuOpen" class="mobile">
        <div class="mobile-nav">
            <ul>
                <li><nuxt-link to="/">HOME</nuxt-link></li>
                <li><nuxt-link to="/">PORTFOLIO</nuxt-link></li>
                <li><nuxt-link to="/about">ABOUT</nuxt-link></li>
                <li><nuxt-link to="/contact">CONTACT</nuxt-link></li>
                <li>
                    <a href="https://drive.google.com/file/d/19dBxyNyTQamjQqQfv4rRi8ri7iRVbUl3/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer">
                        <button>Resumé</button>
                    </a>
                </li>
            </ul>

            <div class="socials">
                <a href="https://www.behance.net/ayoadenowo" target="_blank" rel="noopener noreferrer">
                    <IconBehance />
                </a>

                <a href="https://www.linkedin.com/in/ayomideadenowo/"
                    target="_blank" rel="noopener noreferrer">
                    <IconLinkedIn />
                </a>

                <a href="https://twitter.com/AyomideAdenowo1" target="_blank" rel="noopener noreferrer">
                    <IconTwitter />
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    background-color: transparent;

    &-nav {
        padding: 2.5rem 0;
        border-bottom: 1px solid v-bind(color);
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 800px) {
            display: none;
        }

        &__logo {
            color: v-bind(color);
        }

        &__links {
            display: flex;
            align-items: center;
            gap: 4.8rem;

            @media (max-width: 800px) {
                display: none;
            }

            li {
                a {
                    color: v-bind(color);
                    font-weight: 600;
                    font-size: 1.4rem;
                    line-height: 1.7rem;

                    &:hover {
                        padding-bottom: 0.4rem;
                        border-bottom: 1px solid v-bind(color);
                    }
                }
            }
        }

        &__socials {
            display: flex;
            align-items: center;
            gap: 4.8rem;

            @media (max-width: 800px) {
                display: none;
            }

            li {
                a {
                    color: v-bind(color);
                    font-weight: 600;
                    font-size: 1.4rem;
                    line-height: 1.7rem;

                    .icon {
                        transition: transform 0.3s ease;

                        &:hover {
                            transform: scale(1.2);
                        }
                    }
                }
            }
        }
    }

    .mobile-header {
        display: none;

        @media (max-width: 800px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 2.5rem 0;
        }

        &__logo {
            color: v-bind(color);
        }

        button {
            background: transparent;
            border: none;
            cursor: pointer;
            color: v-bind(color);
        }
    }
}

.mobile {
    display: block;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    background: $col-navyBlue;
    transition: 0.5s;
    overflow-y: auto;

    &-nav {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);

        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 2.4rem;
            padding: 0 2rem;

            li {
                a {
                    color: $col-white;
                    font-weight: 600;
                    font-size: 4rem;
                    line-height: 4.8rem;
                }
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

        .socials {
            display: flex;
            align-items: center;
            gap: 4.8rem;
            padding: 0 2rem;
            margin-top: 6rem;

            a {
                color: $col-white;
            }
        }
    }
}
</style>

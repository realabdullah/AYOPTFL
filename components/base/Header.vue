<script lang="ts" setup>

</script>

<template>
    <div class="header">
        <nav class="header-nav">
            <nuxt-link to="/" class="header-nav__logo">
                <IconLogo variant="normal" />
            </nuxt-link>

            <ul class="header-nav__links">
                <li><nuxt-link to="/">HOME</nuxt-link></li>
                <li><nuxt-link to="/">PORTFOLIO</nuxt-link></li>
                <li><nuxt-link to="/">ABOUT</nuxt-link></li>
                <li><nuxt-link to="/">CONTACT</nuxt-link></li>
            </ul>

            <ul class="header-nav__socials">
                <li>
                    <nuxt-link to="/">
                        <IconBehance />
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">
                        <IconLinkedIn />
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">
                        <IconTwitter />
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    background-color: transparent;

    &-nav {
        padding: 2.5rem 0;
        border-bottom: 1px solid $col-white;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__logo {
            color: $col-white;
        }

        &__links {
            display: flex;
            align-items: center;
            gap: 4.8rem;

            li {
                a {
                    color: $col-fadedWhite;
                    font-weight: 600;
                    font-size: 1.4rem;
                    line-height: 1.7rem;

                    &:hover {
                        color: $col-white;
                        padding-bottom: 0.4rem;
                        border-bottom: 1px solid $col-white;
                    }
                }
            }
        }

        &__socials {
            display: flex;
            align-items: center;
            gap: 4.8rem;

            li {
                a {
                    color: $col-white;
                    font-weight: 600;
                    font-size: 1.4rem;
                    line-height: 1.7rem;
                }
            }
        }
    }
}
</style>

<script lang="ts" setup>
const services = [
    {
        icon: "product",
        title: "Product Design",
        description: "UI/UX Designs for all your website, applications & other interfaces.",
    },
    {
        icon: "graphic",
        title: "Graphic Design",
        description: "Different designs fall into this category, ranging from logos to banners, business cards.",
    },
    {
        icon: "brand",
        title: "Brand Design",
        description: "I can help your brand tell its story to reach its target audience.",
    },
]
</script>

<template>
    <div class="services">
        <h3>My Services<span>.</span></h3>

        <ul>
            <li v-for="(service, index) in services" :key="index">
                <IconDesign :variant="service.icon" />
                <h5>{{ service.title }}</h5>
                <p>{{ service.description }}</p>
            </li>
        </ul>

        <BaseButton text="Contact me" class="btn" />
    </div>
</template>

<style lang="scss" scoped>
.services {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 4.8rem;
    background-color: $col-white;
    height: 100vh;
    @include setFlex(flex, flex-start, center, column);

    @media (max-width: 700px) {
        padding: 0 2rem;
    }

    h3 {
        font-weight: 600;
        font-size: 6.4rem;
        line-height: 7.7rem;
        color: $col-black;
        margin-bottom: 6rem;

        span {
            color: $col-navyBlue;
        }
    }

    ul {
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

        li {
            border: 3px solid $col-black;
            padding: 4rem 2rem;
            @include setFlex(flex, flex-start, unset, column);

            h5 {
                margin-top: 30px;
                font-weight: 600;
                font-size: 2.4rem;
                line-height: 2.9rem;
                color: $col-black;
            }

            p {
                margin-top: 8px;
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 1.9rem;
                color: $col-black;
            }
        }
    }

    .btn {
        margin: 6rem auto;
        margin-bottom: 0;
    }
}
</style>

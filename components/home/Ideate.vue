<script lang="ts" setup>

</script>

<template>
    <section class="ideate">
        <div class="ideate-body">
            <div class="ideate-body__text">
                <span>Ideate.</span>
                <br>
                <span>Design.</span>
                <br>
                <span>Innovate.</span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.ideate {
    background: url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828610/AYPTFL/gradient-bg_pql5wi.webp');
    background-size: cover;
    background-repeat: no-repeat;

    &-body {
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

        &__text {
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
</style>


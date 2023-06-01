<script lang="ts" setup>

</script>

<template>
    <section>
        <BaseHeader />
        <div class="hero-section">
            <div class="hero-section__side-att">
                <span>Ayomide</span>
                <br>
                <span>Adenowo.</span>
            </div>

            <div class="hero-section__motto">
                <span>Designs</span>
                <br>
                <span>with</span>
                <span class="hero-section__motto-italics">purpose.</span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    height: 100vh;
    background-color: $col-navyBlue;
    position: relative;
    padding: 0 4.8rem;

    @media (max-width: 700px) {
        padding: 0 2rem;
    }

    .hero-section {

        &__side-att {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-weight: 600;
            font-size: 2rem;
            line-height: 2.4rem;
            color: $col-white;
        }

        &__motto {
            position: absolute;
            bottom: 0;
            right: 3rem;
            text-align: right;

            span {
                font-weight: 700;
                @include fluid-type(35rem, 150rem, 4.4rem, 20rem);
                color: $col-white;
            }

            &-italics {
                font-style: italic;
                padding-left: 2.5rem;
            }
        }
    }
}
</style>

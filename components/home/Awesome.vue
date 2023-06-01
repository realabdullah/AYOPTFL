<script lang="ts" setup>

</script>

<template>
    <div class="awesome-section">
        <div class="awesome-section__body">
            <p class="big-text">
                <span class="awesome">Awesome</span>
                things await<span class="dot">.</span>
            </p>
            <span class="regular-text">Feel free to contact me.</span>
            <BaseButton text="Let's Talk" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.awesome-section {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 14.4rem 4.8rem;

    @media (max-width: 700px) {
        padding: 5.6rem 2rem;
    }

    &__body {
        text-align: right;

        .big-text {
            font-weight: 600;
            font-size: 9.6rem;
            line-height: 11.5rem;
            color: $col-black;

            .awesome {
                font-style: italic;
                color: $col-navyBlue;
            }

            .dot {
                color: $col-navyBlue;
            }
        }

        .regular-text {
            display: block;
            font-weight: 500;
            font-size: 3.2rem;
            line-height: 3.8rem;
            margin-top: 1.6rem;
            margin-bottom: 3.2rem;
        }
    }
}
</style>
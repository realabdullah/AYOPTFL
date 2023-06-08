<script lang="ts" setup>

</script>

<template>
    <div class="quote">
        <div class="quote-text">
            <p>Less, but better.</p>
            <span>-Dieter Rams</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.quote {
    background: url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828613/AYPTFL/short-bg_tyicyz.webp');
    background-size: cover;
    // padding: 7rem 0;
    height: 270px;
    position: relative;

    @media (max-width: 700px) {
        padding: 3.2rem 0;
    }

    &-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        p {
            font-weight: 600;
            font-size: 4.8rem;
            line-height: 5.8rem;
            color: $col-white;
        }

        span {
            font-style: italic;
            font-weight: 500;
            font-size: 2.4rem;
            line-height: 2.9rem;
            color: $col-white;
            position: absolute;
            right: -5rem;
        }
    }
}
</style>

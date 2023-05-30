<script lang="ts" setup>

</script>

<template>
    <section class="projects">
        <div class="projects-header">
            <h3>Featured Projects<span>.</span></h3>
            <IconArrow variant="right" />
        </div>

        <ul class="projects-cards">
            <li class="projects-cards__card">
                <img src="https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828605/AYPTFL/big_vdkknk.webp" alt="big" />
                <p>Big Architecture</p>
            </li>
            <li class="projects-cards__card">
                <img src="https://res.cloudinary.com/dxvhsze0l/image/upload/v1669828611/AYPTFL/osan_neme1h.webp" alt="osan" />
                <p>Osan</p>
            </li>
            <li class="projects-cards__card">
                <img src="https://res.cloudinary.com/dxvhsze0l/image/upload/v1685465325/zgsbtqpc3tpnzianbfa8.png" alt="data lens" />
                <p>Data Lens</p>
            </li>
            <li class="projects-cards__card">
                <img src="https://res.cloudinary.com/dxvhsze0l/image/upload/v1685465323/gbfd3kynquvdhvknlphl.png" alt="mimi" />
                <p>Forene</p>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.projects {
    padding: 14.4rem 4.8rem;

    &-header {
        @include setFlex(flex, center, space-between, unset);
        margin-bottom: 5.2rem;

        h3 {
            font-weight: 700;
            font-size: 6.4rem;
            line-height: 7.7rem;
            color: $col-black;

            span {
                color: $col-navyBlue;
            }
        }
    }

    &-cards {
        display: flex;
        align-items: flex-start;
        gap: 1.6rem;

        &__card {
            @include setFlex(flex, flex-start, unset, column);
            gap: 1.5rem;
            width: 100%;
            max-width: 390px;
            height: 480px;

            &:nth-child(even) {
                height: 300px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            p {
                font-weight: 600;
                font-size: 3.2rem;
                line-height: 3.8rem;
                color: $col-black;
            }
        }
    }
}
</style>

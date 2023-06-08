<script lang="ts" setup>
defineProps<{
    text: string
}>()
</script>

<template>
    <button>{{ text }}</button>
</template>

<style lang="scss" scoped>
button {
    border: 0;
    padding: 1.6rem 4.8rem;
    position: relative;
    background: $col-black;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: $col-white;
    cursor: pointer;

    &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0.6rem;
        left: 0.6rem;
        right: -0.6rem;
        bottom: -0.6rem;
        border: 2px solid $col-black;
        width: -webkit-fill-available;
        height: inherit;
        opacity: 0;
    }

    &:hover::after {
        transition: opacity 0.9s;
        opacity: 1;
    }
}
</style>
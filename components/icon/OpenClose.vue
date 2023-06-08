<script lang="ts" setup>
defineProps<{
    variant: 'open' | 'close';
}>();
</script>

<template>
    <svg v-if="variant === 'open'" width="48" height="48" viewBox="0 0 48 48" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5 38.0002V25.5002H10V22.5002H22.5V10.0002H25.5V22.5002H38V25.5002H25.5V38.0002H22.5Z" fill="black" />
    </svg>

    <svg v-else width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 25.5V22.5H38V25.5H10Z" fill="black" />
    </svg>
</template>

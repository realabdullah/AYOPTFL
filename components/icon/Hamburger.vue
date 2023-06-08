<script lang="ts" setup>
defineProps<{
    variant: string
}>();
</script>

<template>
    <svg v-if="variant === 'open'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4H22V6.5H2V4ZM7 10.25H22V12.75H7V10.25ZM13.25 16.5H22V19H13.25V16.5Z" fill="currentColor" />
    </svg>

    <svg v-else-if="variant === 'close'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.15385 19L4 17.8462L10.3462 11.5L4 5.15385L5.15385 4L11.5 10.3462L17.8462 4L19 5.15385L12.6538 11.5L19 17.8462L17.8462 19L11.5 12.6538L5.15385 19Z"
            fill="currentColor" />
    </svg>
</template>

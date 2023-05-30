<script lang="ts" setup>
defineProps<{
    variant: string;
}>();
</script>

<template>
    <svg v-if="variant === 'product'" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7H28.2834V28.2834H7V7Z" stroke="black" stroke-width="4" />
        <path d="M35.0166 7H56.3001V28.2834H35.0166V7Z" stroke="black" stroke-width="4" />
        <path d="M7 35.0165H28.2834V56.3H7V35.0165Z" stroke="black" stroke-width="4" />
        <mask id="path-4-inside-1_324_11" fill="white">
            <path
                d="M58.3001 45.6583C58.3001 52.6399 52.6402 58.3 45.6583 58.3C38.6762 58.3 33.0166 52.6401 33.0166 45.6583C33.0166 38.6761 38.6765 33.0165 45.6583 33.0165C52.6399 33.0165 58.3001 38.6764 58.3001 45.6583Z" />
        </mask>
        <path
            d="M54.3001 45.6583C54.3001 50.4308 50.431 54.3 45.6583 54.3V62.3C54.8494 62.3 62.3001 54.849 62.3001 45.6583H54.3001ZM45.6583 54.3C40.8854 54.3 37.0166 50.431 37.0166 45.6583H29.0166C29.0166 54.8492 36.467 62.3 45.6583 62.3V54.3ZM37.0166 45.6583C37.0166 40.8853 40.8855 37.0165 45.6583 37.0165V29.0165C36.4674 29.0165 29.0166 36.467 29.0166 45.6583H37.0166ZM45.6583 37.0165C50.4309 37.0165 54.3001 40.8856 54.3001 45.6583H62.3001C62.3001 36.4672 54.849 29.0165 45.6583 29.0165V37.0165Z"
            fill="black" mask="url(#path-4-inside-1_324_11)" />
    </svg>

    <svg v-else-if="variant === 'graphic'" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M25.3337 42.6666C15.0243 42.6666 6.66699 34.3093 6.66699 24C6.66699 13.6906 15.0243 5.33331 25.3337 5.33331C35.643 5.33331 44.0003 13.6906 44.0003 24"
            stroke="black" stroke-width="4" stroke-linejoin="round" />
        <path d="M58.6667 24H24V58.6667H58.6667V24Z" stroke="black" stroke-width="4" stroke-linejoin="round" />
    </svg>

    <svg v-else width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M54.667 8H9.33366C7.8609 8 6.66699 9.19391 6.66699 10.6667V32C6.66699 33.4728 7.8609 34.6667 9.33366 34.6667H54.667C56.1398 34.6667 57.3337 33.4728 57.3337 32V10.6667C57.3337 9.19391 56.1398 8 54.667 8Z"
            stroke="black" stroke-width="4" stroke-linejoin="round" />
        <path d="M16.0003 34.6667V56M48.0003 44H16.0003M21.3337 56H10.667M53.3337 56H42.667M48.0003 34.6667V56"
            stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

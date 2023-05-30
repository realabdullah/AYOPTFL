// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/scss/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
						@import "@/assets/scss/abstracts/_variables.scss"; 
						@import "@/assets/scss/abstracts/_mixins.scss";
					`,
                },
            },
        },
    },
    devServer: {
        port: 5500,
    },
})

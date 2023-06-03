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

    runtimeConfig: {
        public: {
            serviceId: process.env.SERVICE_ID,
            templateId: process.env.TEMPLATE_ID,
            publicKey: process.env.PUBLIC_KEY,
        }
    },

    modules: []
})

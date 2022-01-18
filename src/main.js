import { createApp } from 'vue';
import App from './App.vue';
import "@/assets/app.scss";

/* Router */
import router from "./router.js";

/* Ant Design Components */
import ant from "./components/ant.js";

createApp(App)
    .use( router )
    .use( ant )
    .mount('#app')

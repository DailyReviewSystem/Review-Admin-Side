import { createApp } from 'vue';
import App from './App.vue';
import "@/assets/app.scss";

/* Router */
import router from "./router.js";

/* Ant Design Components */
import ant from "./components/ant.js";

/* Axios Instance For Api Request */
import api from "./plugins/api.js";

/** Store **/
import store from "./store/index.js";

createApp(App)
    .use( router )
    .use( ant )
    .use( api )
    .use( store )
    .mount('#app')

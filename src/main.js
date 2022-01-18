import { createApp } from 'vue';
import App from './App.vue';
import "@/assets/app.scss";

/* Router */
import router from "./router.js";

/* Ant Design Components */
import Antd from "ant-design-vue";

createApp(App)
    .use( router )
    .use( Antd )
    .mount('#app')

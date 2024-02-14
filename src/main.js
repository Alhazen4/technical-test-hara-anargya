import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import router from './assets/router/index.js';

createApp(App)
    .component("Icon", Icon)
    .use(router)
    .mount("#app");

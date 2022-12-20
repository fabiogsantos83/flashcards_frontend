import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../public/css/custom.min.css";
import "../public/css/styles.css";
import "../../flashcard/node_modules/bootstrap/dist/js/bootstrap";
import Toaster from "@meforma/vue-toaster";

const app = createApp(App);
app.use(router);
app.use(Toaster, { duration: 5000, position: "bottom" }).provide('toast', app.config.globalProperties.$toast);
app.mount("#app");

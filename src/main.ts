import { createApp } from "vue";
import App from "./App.vue";
import { Quasar, Notify } from "quasar";
import "./assets/style/main.css";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";

const app = createApp(App);

app.use(Quasar, {
  plugins: { Notify }, // 可選：若需要使用 Quasar 插件（如 Dialog、Notify）
});

app.mount("#app");

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Button from "./components/Button.vue";
import Input from "./components/Input.vue";
import Spinner from "./components/Spinner.vue";
import Switch from "./components/Switch.vue";
import Checkbox from "./components/Checkbox.vue";
import Radio from "./components/Radio.vue";
import Textarea from "./components/Textarea.vue";
import Avatar from "./components/Avatar.vue";
import Toast, { PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createPinia } from "pinia";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.component("Btn", Button);
app.component("Input", Input);
app.component("Spinner", Spinner);
app.component("Switch", Switch);
app.component("Checkbox", Checkbox);
app.component("Radio", Radio);
app.component("Textarea", Textarea);
app.component("Avatar", Avatar);

const options: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT,
  hideProgressBar: true,
};

app.use(pinia);
app.use(Toast, options);
app.use(router);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeComponents from "../shared/UI";
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/md-dark-deeppurple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

createApp(App)
  .use(router)
  .use(PrimeVue, {ripple: true})
  .use(PrimeComponents)
  .mount("#app");

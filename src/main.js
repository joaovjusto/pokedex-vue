import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import ElementUI from "element-ui";

import "./assets/scss/styles.scss";
import "./assets/css/vendor/hamburguer.css";
import "./assets/css/styles.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const $ = require("jquery");
window.$ = $;
require("jquery-confirm");

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

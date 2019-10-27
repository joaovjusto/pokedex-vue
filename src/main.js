import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import ElementUI from "element-ui";
import VueResource from "vue-resource";

import "./assets/scss/styles.scss";
import "./assets/css/vendor/hamburguer.css";
import "./assets/css/styles.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const $ = require("jquery");
window.$ = $;
require("jquery-confirm");

Vue.use(VueResource);
Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.http.options.root = "https://pokeapi.co/api/v2/pokemon/";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

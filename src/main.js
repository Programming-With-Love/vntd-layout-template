import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Echarts from "echarts";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = true;
Vue.component("v-chart", Echarts);
Vue.use(Antd);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

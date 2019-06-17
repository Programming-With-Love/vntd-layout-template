import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/layout/Layout.vue";
import Ddos from "./views/routes/Ddos.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,  
      children: [
        { path: "", name: "ddos", component: Ddos }
      ]
    }
  ]
});

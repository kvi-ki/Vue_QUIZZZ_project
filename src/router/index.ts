import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../ui/components/Home/Home.vue";
import Form from "../ui/components/Form/Form.vue";
import Card from "../ui/components/Card/Card.vue";
import CardPage from "../ui/components/CardPage/CardPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/card",
    name: "Card",
    component: Card,
  },
  {
    path: "/cardpage",
    name: "Cardpage",
    component: CardPage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

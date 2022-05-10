import Vue from "vue";
import VueRouter from "vue-router";
import CreateAlerter from "@/views/CreateAlerter.vue";
import AlerterList from "@/views/AlerterList.vue";
import AlerterShow from "@/components/AlerterCard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "alerter-list",
    component: AlerterList,
  },
  {
    path: "/alerter/create",
    name: "alerter-create",
    component: CreateAlerter,
  },
  {
    path: "/alerter/:id",
    name: "alerter-show",
    component: AlerterShow,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

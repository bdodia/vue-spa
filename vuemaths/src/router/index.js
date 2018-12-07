import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import JavaQuestions from "@/components/JavaQuestions";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "JavaQuestions",
      component: JavaQuestions
    }
  ]
});

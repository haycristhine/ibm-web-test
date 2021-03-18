import Vue from 'vue';
import Router from 'vue-router';
import { authGuard } from "./auth/authGuard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: () =>
        import(/* webpackChunkName: "repo-page" */ './views/LoginPage')
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (repo-page.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "repo-page" */ './views/EmptyPage'),
      beforeEnter: authGuard
    }
  ]
});

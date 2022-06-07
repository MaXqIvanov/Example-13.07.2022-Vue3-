import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Company from '../views/Company.vue'
import Cookies from 'js-cookie'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Company',
    component: Company,
    meta: { requiresAuth: true, },
  },
  {
    path: '/cars',
    name: 'Cars',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cars.vue'),
    meta: { requiresAuth: true, },
  },
  {
    path: '/pickup',
    name: 'PickUpPoints',
    component: () => import(/* webpackChunkName: "about" */ '../views/PickUpPoints.vue'),
    meta: { requiresAuth: true, },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue'),
    meta: { notRequiresAuth: true, },
  },
  {
    path: '/logOut',
    name: 'LogOut',
    component: () => import('../views/Auth.vue'),
    meta: { requiresAuth: true, },
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Auth.vue'),
    meta: { notRequiresAuth: true, },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = Cookies.get('token');
  const requieAuth = to.matched.some((todo) => todo.meta.requiresAuth);
  const notRequieAuth = to.matched.some((todo) => todo.meta.notRequiresAuth);

  if (notRequieAuth && currentUser) {
    next("/");
  }

  if (requieAuth && !currentUser) {
    next("/auth");
  } else {
    next();
  }
});

export default router

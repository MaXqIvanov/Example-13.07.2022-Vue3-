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
    path: '/company/:id',
    name: 'AboutCompany',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutCompany.vue'),
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
    path: '/pickup/:id',
    name: 'PickUpPointOne',
    component: () => import(/* webpackChunkName: "about" */ '../views/PickUpPointOne.vue'),
    meta: { requiresAuth: true, },
  },
  {
    path: '/prood',
    name: 'Proods',
    component: () => import(/* webpackChunkName: "about" */ '../views/Proods.vue'),
    meta: { requiresAuth: true, },
  },
  {
    path: '/prood/:id',
    name: 'ProodOne',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProodOne.vue'),
    meta: { requiresAuth: true, },
  },
  {
    path: '/nomenclature',
    name: 'Nomenclature',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nomenclature.vue'),
    meta: { requiresAuth: true, },
  },
  {
    path: '/nomenclature/:id',
    name: 'NomenclatureOne',
    component: () => import(/* webpackChunkName: "about" */ '../views/NomenclatureOne.vue'),
    meta: { requiresAuth: true, },
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue'),
    meta: { requiresAuth: true, },
  },
  {
    path: '/profile',
    name: 'ProfileUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileUser.vue'),
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

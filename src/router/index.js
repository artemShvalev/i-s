import Vue from 'vue';
import VueRouter from 'vue-router';
import Header from '../components/Header.vue';
import ItemProducts from '../pages/itemProduct.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Header,
    name: Header,
    children: [
      {
        path: 'itemProducts/:id',
        component: ItemProducts,
        name: ItemProducts,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

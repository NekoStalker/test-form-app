
import Vue from 'vue';
import Router from 'vue-router';
import SportForm from "@/pages/SportForm.vue";


Vue.use(Router);

const routes = [
    {
        path: '/',
        component: SportForm,
    },
  
];

const router = new Router({
    routes,
    mode: 'history', 
    base: process.env.BASE_URL
});

export default router;

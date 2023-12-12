import { createRouter, createWebHistory } from 'vue-router';
import SuccessHelloWorld from "./components/SuccessHelloWorld.vue";
import LoginHelloWorld from "./components/LoginHelloWorld.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/login', component: LoginHelloWorld },
    { path: '/success', component: SuccessHelloWorld }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.replace({ path: '*', redirect: '/' })
export default router;
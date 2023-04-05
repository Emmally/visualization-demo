import {createRouter,createWebHashHistory} from 'vue-router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import routes from './routes'
const router=createRouter({
    history:createWebHashHistory(),
    routes
})

NProgress.configure({
    easing: 'ease',
    speed: 500,
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.3
})

router.beforeEach((to, from, next)=>{
    NProgress.start();
    next();
})

router.afterEach(() => {
    NProgress.done();
})

export default router
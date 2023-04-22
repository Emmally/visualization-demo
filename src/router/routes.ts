const routes=[
    {
        name:'earth',
        path:'/earth',
        component:()=>import('../views/earth.vue')
    },
    {
        name:'cube',
        path:'/cube',
        component:()=>import('../views/cube.vue')
    },
    {
        name:'lottie',
        path:'/lottie',
        component:()=>import('../views/lottie/index.vue')
    },
    {
        name:'chart',
        path:'/chart',
        component:()=>import('../views/chart/index.vue')
    },
    {
        name:'global',
        path:'/global',
        component:()=>import('../views/global.vue')
    },
    {
        name:'community',
        path:'/community',
        component:()=>import('../views/community/index.vue')
    }
]
export default routes
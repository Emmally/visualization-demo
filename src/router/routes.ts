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
    }
]
export default routes
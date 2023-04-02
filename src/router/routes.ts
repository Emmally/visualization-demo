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
    }
]
export default routes
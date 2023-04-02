const routes=[
    {
        name:'earth',
        path:'/earth',
        component:()=>import('../views/earth.vue')
    },
    {
        name:'b',
        path:'/b',
        component:()=>import('../views/B.vue')
    }
]
export default routes
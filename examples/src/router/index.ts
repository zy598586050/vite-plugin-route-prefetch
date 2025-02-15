import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'page1',
            component: () => import('../components/Page1.vue'),
        },
        {
            path: '/page2',
            name: 'page2',
            component: () => import('../components/Page2.vue'),
        },
        {
            path: '/page3',
            name: 'page3',
            component: () => import('../components/Page3.vue'),
        }
    ]
})

export default router

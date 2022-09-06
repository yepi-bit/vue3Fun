import {createRouter, createWebHashHistory} from "vue-router";
import listLength from '../views/listLength.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'listLength',
            component: listLength
        },
        {
            path:'/themeColor',
            component: () => import('../views/themeColor.vue')
        },
        {
            path:'/player',
            component: () => import('../views/player.vue')
        },
        {
            path:'/heros',
            component: () => import('../views/heros.vue')
        },
        {
            path:'/changeValue',
            component: () => import('../views/changeValue.vue')
        }
    ]
})

export default router

import {createRouter, createWebHashHistory} from "vue-router";
import listLength from '../views/listLength.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'listLength',
            component: listLength
        }
    ]
})

export default router

import Vue from 'vue'
import signIn from '@/components/signIn.vue'
import signUp from '@/components/signUp.vue'
import userPage from '@/components/userPage.vue'
import Router from "vue-router"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: signIn
        },
        {
            path: '/signUp',
            component: signUp
        },
        {
            path: '/userPage',
            component: userPage
        }
    ]
})

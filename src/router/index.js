import Vue from 'vue'
import VueRouter from 'vue-router'

//load component
import Home from '@/components/Home'
import Signin from '@/components/Signin'
import Dashboard from '@/components/Dashboard'

//load vue router
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/sign-in',
        name: 'signin',
        component: Signin
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    }
]


export default new VueRouter({
    routes
})
import HomePage from "../pages/HomePage.vue"
import AccountPage from "../pages/AccountPage.vue"
import EditPage from "../pages/EditPage.vue"
import MyPage from "../pages/MyPage.vue"
import SearchPage from "../pages/SearchPage.vue"
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const pages:Array<RouteRecordRaw> = [
    {
        path:"/",
        name:'home',
        component:HomePage
    },{
        path:"/log",
        name:'log',
        component:AccountPage
    },{
        path:"/edit",
        name:'edit',
        component:EditPage
    },{
        path:"/my",
        name:'my',
        component:MyPage
    },{
        path:"/search",
        name:'search',
        component:SearchPage
    },
]

const pageRouter = createRouter({
    history:createWebHistory(),
    routes:pages
})

export default pageRouter
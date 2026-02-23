import {createRouter , createWebHashHistory} from "vue-router";
//配置信息中需要页面的相关配置
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path:"/",
        component:HomeView,
    },
    {
        path:"/about",
        component:() => import("../views/AboutView.vue"),
    },
    {
        path:"/news",
        component:() => import("../views/NewsView.vue"),
    },
    {
        path:"/news/details/:name",
        component:() => import("../views/newsDetials.vue"),
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;//导出路由
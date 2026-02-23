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
        redirect:"about/us",
        component:() => import("../views/AboutView.vue"),
        children:[
            {
                //二级导航的路径不要加斜杠
                path:"us",
                component:() => import("../views/AboutSub/AboutUS.vue"),
            },
            {
                path:"info",
                component:() => import("../views/AboutSub/AboutInfo.vue"),
            },
        ]
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;//导出路由
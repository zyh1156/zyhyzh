import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld"
import Restore from "../core/store"

Vue.use(VueRouter)

function reRouter(to) {
    return () => import("@/components/" + to + ".vue")
}

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: HelloWorld,
        meta: {
            title: "张永铧的个人主页"
        }
    }, {
        path: "/game",
        component:reRouter("game/index"),
        meta:{
            title:"游戏"
        }
    }]
})

router.beforeEach((to, from, next) => {
    let title = to.meta.title ? to.meta.title : "张永铧的个人主页";
    document.title = title + " &raquo; 为什么坚持，想一想当初";
    next();
})
export default router
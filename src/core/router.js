import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld"
import seRouter from "../cube/router"

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
        component: seRouter,
        meta: {
            title: "游戏"
        },
        children: [{
            path: "dota2",
            component: seRouter,
            children: [{
                path: "matches",
                component: seRouter,
                children: [{
                    path: ":match_id",
                    component: reRouter("game/dota2/matches/index")
                }, {
                    path: "",
                    component: reRouter("game/dota2/index")
                }]
            }, {
                path: "heroStats",
                component: reRouter("game/dota2/heroStats")
            }, {
                path: "leagues",
                component: reRouter("game/dota2/leagues")
            }, {
                path: "live",
                component: reRouter("game/dota2/live")
            }, {
                path: "playersByRank",
                component: reRouter("game/dota2/playersByRank")
            }, {
                path: "schema",
                component: reRouter("game/dota2/schema")
            }, {
                path: "",
                component: reRouter("game/dota2/index")
            }]
        }, {
            path: "underlords",
            component: seRouter
        }, {
            path: "",
            component: reRouter("game/index")
        }]
    }, {
        path: "/resume",
        component: seRouter,
        children: [{
            path: "resume",
            component: reRouter("resume/resume"),
            meta: {
                title: "聊聊经历"
            }
        }, {
            path: "welcome",
            component: reRouter("resume/welcome"),
            meta: {
                title: "聊聊技术"
            }
        }, {
            path: "",
            component: reRouter("resume/index"),
            meta: {
                title: "简历"
            }
        }]
    }]
})

router.beforeEach((to, from, next) => {
    let title = to.meta.title ? to.meta.title : "张永铧的个人主页";
    document.title = title + " 》 为什么坚持，想一想当初";
    next();
})
export default router
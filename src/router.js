import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Article-List",
            component: () => import('./views/ArticleList.vue')
        },
        {
            path: "/Article",
            name: "Article",
            props: true,
            component: () => import('./views/Article.vue')
        }
    ]
})
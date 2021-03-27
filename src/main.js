// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Axios from "Axios";

// 1.導入組件
import Goods from "./components/Goods/Goods";
import Seller from "./components/Ratings/Ratings";
import Ratings from "./components/Seller/Seller";
// import router from "./router";

Vue.config.productionTip = false;
// 安裝vue-router插件
Vue.use(VueRouter);
// 如果要在其他組件使用axios 要改寫vue屬性
Vue.prototype.$axios = Axios;

// 2.定義路由
const routes = [
    {
        path: "/",
        // 重定向
        redirect: "/goods"
    },
    {
        path: "/goods",
        component: Goods
    },
    {
        path: "/ratings",
        component: Seller
    },
    {
        path: "/seller",
        component: Ratings
    }
];

// 3.實作化VueRouter
const router = new VueRouter({
    routes,
    linkActiveClass: "active"
});
new Vue({
    el: "#app",
    components: { App },
    template: "<App/>",
    // 創建和掛載實例
    router
});

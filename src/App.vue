<template>
    <div id="app">
        <!-- 頭部 -->
        <Myheader></Myheader>
        <!-- 導航 -->
        <Mynav></Mynav>
        <!-- 主體內容 -->
        <!-- <div class="content">content</div> -->
        <!--路由出口-->
        <router-view></router-view>
    </div>
</template>

<script>
import Myheader from "./components/Header/Header";
import Mynav from "./components/Nav/Nav";
import Axios from "Axios";
export default {
    name: "App",
    components: {
        Myheader,
        Mynav
    },
    data() {
        return {
            // header所需商家信息
            poiInfo: {}
        };
    },
    created() {
        // 發起異步請求，掛載數據
        this.$axios
            .get("/api/goods")
            .then(response => {
                var dataSource = response.data;
                if (dataSource.code === 0) {
                    console.log(dataSource);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>

<style></style>

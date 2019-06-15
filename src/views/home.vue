<template>

    <div class="wrapper">
        <header>
            <span :class="{'active': isCollapse}">demo</span>
            <div>
                <i class="el-icon-document" @click="change"></i>
                <span>1701A</span>
            </div>
        </header>
        <div class="container">
            <aside :class="{'active': isCollapse}">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :collapse-transition="isShow" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1" @click="$router.push({name:'table'})">Table</el-menu-item>
                            <el-menu-item index="1-2" @click="$router.push({name:'form'})">From</el-menu-item>
                            <el-menu-item index="1-3" @click="$router.push({name:'list'})">列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </aside>
            <section>
                <div class="table-title">
                    <h3>{{$route.meta.name}}</h3>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item 
                        v-for="(item,index) in $route.matched" 
                        :key="index">{{item.meta.name}}</el-breadcrumb-item>
                        <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
                    </el-breadcrumb>
                </div>

                <router-view></router-view>
            </section>
        </div>
    </div>

</template>
<script>
export default {
    props: {},
    components: {},
    data() {
        return {
            isShow: false,
            isCollapse: false,
            list:[]
        };
    },
    computed: {},
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        change() {
            console.log(1111);
            this.isCollapse = !this.isCollapse;
        }
    },
    created() {
        this.list = this.$route.matched;
        console.log(this.$route.matched);
        console.log(this.list);
        // console.log(this.$route.matched);
    },
    mounted() {}
};
</script>
<style scoped lang="">
.wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
header {
    height: 60px;
    width: 100%;
    display: flex;
    background: #20a0ff;
    align-items: center;
}
header > span {
    width: 200px;
    height: 100%;
    line-height: 60px;
    text-align: center;
    display: inline-block;
}
header > div {
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
}
.container {
    flex: 1;
    display: flex;
}
aside {
    width: 200px;
    height: 100%;
}
.active {
    width: 60px;
}
.el-menu {
    height: 100%;
    width: 100%;
}
section {
    flex: 1;
    padding: 0 10px;
    box-sizing: border-box;
}
.table-title{
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
import Vue from 'vue'
import Router from 'vue-router'
// import { Table } from 'element-ui';
// import HelloWorld from '@/components/HelloWorld'
const Home = () =>
    import ('@/views/home');
const Table = () =>
    import ('@/views/table');
const Form = () =>
    import ('@/views/form');
const List = () =>
    import ('@/views/list');
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            meta: { name: '导航', },
            component: Home,
            children: [{
                    path: 'table',
                    name: 'table',
                    meta: { name: 'Table' },
                    component: Table
                },
                {
                    path: 'form',
                    name: 'form',
                    meta: { name: 'Form' },
                    component: Form
                },
                {
                    path: 'list',
                    name: 'list',
                    meta: { name: '列表' },
                    component: List
                }
            ]
        },

    ]
})
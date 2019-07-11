import Vue from 'vue'
// 导入vue-router
// 导入node_modules里的不用写具体路径
// 只导入是不行的，要注册 
import VueRouter from 'vue-router'
// 配置vue的插件vue-router
Vue.use(VueRouter);
// 导入各种列表组件
import HeroList from './views/heros/HeroList.vue'
import WeaponList from './views/weapons/WeaponList.vue'
import EquipmentList from './views/equipment/EquipmentList.vue'

// 导入添加英雄的组件
import AddHero from './views/heros/AddHero.vue'

// 导入编辑英雄的组件
import EditHero from './views/heros/EditHero.vue'

// 创建路由对象
const router = new VueRouter({
    // 精确的配置高亮显示的类样式
    // 这个设置是针对router-link的，所以我之前的那种写法就不行了
    // linkExactActiveClass: 'active',
    // 精确的可以理解为完全匹配，不exact的可以理解为路由地址中有那部分就可以。
    linkActiveClass: 'active',
    // 配置路由规则
    routes: [{
        path: '/',
        redirect: '/herolist'
    }, {
        name: 'herolist',
        path: '/herolist',
        component: HeroList,
    }, {
        name: 'weapon',
        path: '/weaponlist',
        component: WeaponList
    }, {
        name: 'equipment',
        path: '/equipmentlist',
        component: EquipmentList,
    }, {
        name: 'add',
        path: '/herolist/add',
        component: AddHero
    }, {
        name: 'edit',
        path: '/herolist/edit/:id',
        component: EditHero,
        props: true,
    }]
})

export default router
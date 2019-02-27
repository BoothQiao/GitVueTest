
// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

//导入Bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
//import './lib/mui/css/icons-extra.css'

// // 导入所有 MUI 
// import MintUI from 'mint-ui'
// // 这里可以省略node_modules这一层目录
// import 'mint-ui/lib/style.css'
// //将MintUI安装到Vue中
// Vue.use(MintUI)

import { Header } from 'mint-ui'
//Vue.component(Toast.name, Toast)
Vue.component(Header.name, Header)
// Vue.use(Toast)
//Vue.use(Button)


// 1.3 导入自己的 router.js 路由模块
import router from './router.js'


// 导入 App 根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router // 1.4 挂载路由对象到 VM 实例上
  })


import {createApp} from 'vue'
import App from '@/App.vue'
//引入清除默认样式
import '@/style/reset.scss'
//引入顶部全局组件
import HospitalTop from '@/components/hospital_top/index.vue';
import HospitalBottom from '@/components/hospital_bottom/index.vue';
//引入路由组件
import router from '@/router'
//引入elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入elementplus中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router)
//注册全局组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
app.mount('#app')

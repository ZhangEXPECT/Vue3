// 不在引入Vue构造函数
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 创建实例对象相当于轻量级vm
// const app = createApp(App)
// app.mount('#app')


createApp(App).use(store).use(router).mount('#app')

import './assets/main.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from '@/router'

import { createPinia } from 'pinia'

//导入持久化插件
import {createPersistedState} from'pinia-persistedstate-plugin'

import locale from 'element-plus/dist/locale/zh-cn.js'


import App from './App.vue'

const app = createApp(App)


app.use(ElementPlus,{locale})
app.use(router)

const pinia = createPinia()
app.use(pinia)

const persist = createPersistedState()
pinia.use(persist)



app.mount('#app')
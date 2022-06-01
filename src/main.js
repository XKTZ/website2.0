import { createApp } from 'vue'
import App from './App.vue'
import {store} from "@/store/store";
import router from './router'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconVue from '@element-plus/icons-vue'

const app = createApp(App);
app.use(router).use(ElementPlus).use(store).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import animated from 'animate.css'
import { createPinia } from 'pinia'
// import { createTheme } from './utils/theme.class'
// createTheme()
import store from './stores/index'

createApp(App).use(store).use(createPinia()).use(router).use(ElementPlus).mount('#app')

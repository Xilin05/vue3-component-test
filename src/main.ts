import { createApp } from 'vue'
// import './style.css'
import './style/custom-global/index.scss'
import App from './App.vue'

import router from './router/index.ts'

const app = createApp(App)
app.use(router).mount('#app')

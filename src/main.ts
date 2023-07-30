import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import mainCommon from '@/main.common'
import App from '@/App.vue'
import '@/assets/styles.less'

const pinia = createPinia()
const app = createApp(App)

mainCommon.init(app)

app.use(pinia)
app.use(router)

app.mount('#app')

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from '@/App.vue'
import '@/assets/styles.less'
import mainCommon from '@/main.common'

import router from './router'

const pinia = createPinia()
const app = createApp(App)

mainCommon.init(app)

app.use(pinia)
app.use(router)

app.mount('#app')

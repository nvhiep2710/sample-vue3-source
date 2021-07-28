import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import comps from '@/components/elements'

import '@/components/elements'
import '@/styles/index.scss'

const app = createApp(App)

// Register a Global Component
for (const key in comps) app.component(key, comps[key])

app
  .use(store)
  .use(router)
  .mount('#app')

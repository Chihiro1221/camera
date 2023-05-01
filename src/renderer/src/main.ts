// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import '@renderer/assets/css/tailwind.scss'
import App from './App.vue'
const app = createApp(App)

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang
})

app.mount('#app')

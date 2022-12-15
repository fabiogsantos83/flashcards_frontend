import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/custom.min.css'
import '../public/css/styles.css'
import '../../flashcard/node_modules/bootstrap/dist/js/bootstrap'

createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// echo "# storyroom_manager" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M master
// git remote add origin https://github.com/CrazyMasters/storyroom_manager.git
// git push -u origin master

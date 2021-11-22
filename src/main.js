import { createApp } from 'vue';
import App from './App.vue';
import 'tailwindcss/tailwind.css';
import 'es6-promise/auto'
import store from './store/index'

createApp(App).use(store).mount('#app')
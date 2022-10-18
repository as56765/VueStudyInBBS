import {createApp} from 'vue'
import App from './App.vue'
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import * as Icons from './assets/icons/solidIcon'
import pageRouter from "./router/PageRouter";
import './assets/base.less';
import {createPinia} from "pinia";
import 'animate.css';

const store = createPinia()

const app = createApp(App)
app.use(pageRouter)
app.use(store)

library.add(Icons)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
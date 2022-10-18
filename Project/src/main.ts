import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App)

app.config.globalProperties.$fitters = {
    format <T>(str:T):string {
        return `这是返回值.${str}`
    }
}

type Filter = {
    format: <T>(str:T) => string
}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $fitters:Filter
    }
}

app.mount('#app')

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.myType = 'app'

const app = new Vue(App)
app.$mount()

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import firebase from "firebase"

Vue.config.productionTip = false

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.12.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.12.0/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

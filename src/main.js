import Vue from 'vue'  //global view object 
import App from './App.vue' //componente
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidade from 'vee-validate';
import msg from './pt_BR';

import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

Vue.use(VeeValidade, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR:{
      messages: msg
    }
  }
});

const router = new VueRouter({ 
  routes,
  mode: 'history'
});

new Vue({  //instancia de uma view = é a cola do componente e da view
  el: '#app', //el: elemento lá do index html
  router,
  render: h => h(App) //função render
})

//isso tem a mesma função do componente de cima
// new Vue({
//   el: '#app',
//   render: function(h){
//     h(App);
//   }
// })

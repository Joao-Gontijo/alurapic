import Vue from 'vue'  //global view object 
import App from './App.vue' //componente

new Vue({  //instancia de uma view = é a cola do componente e da view
  el: '#app', //el: elemento lá do index html
  render: h => h(App) //função render
})


//isso tem a mesma função do componente de cima
// new Vue({
//   el: '#app',
//   render: function(h){
//     h(App);
//   }
// })

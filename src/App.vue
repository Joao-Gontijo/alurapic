<template>
  <div class="corpo">    
    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-itens" v-for="foto in fotos">
        
        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel> 

        
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {
  components:{
    'meu-painel': Painel
  },
  data(){
    return{
      titulo: 'Alurapic',
      fotos: []
    }
  },
  created(){
    let promise = this.$http.get('http://localhost:3000/v1/fotos');
    //usar arrow function automaticamente retorna o valor de res.json, que tbm é uma promise
    promise
      .then(res => res.json()) //devolve a resposta do servidor e transforma em json
      .then(fotos => this.fotos = fotos,  //this.fotos recebe as fotos que vem da api
      err => console.log(err)); //caso dê erro no servidor, imprime no console 
  }
}
</script>

<style>
.corpo{
  font-family: Arial, Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}
.centralizado{
  text-align: center;
}
.lista-fotos{
  list-style: none;
}
.lista-fotos-itens{
  display: inline-block;
}
.imagem-responsiva{
  width: 100%;
}
</style>

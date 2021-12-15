<template>
  <div>    
    <h1 class="centralizado">{{ titulo }}</h1>
    <!-- v-bind da fonte de dados para view // v-on da view para fonte de dados -->
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtrar pelo titulo">

    <ul class="lista-fotos">
      <li class="lista-fotos-itens" v-for="foto in fotosComFiltro">
        
        <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
        </meu-painel> 

        
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
export default {
  components:{
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva
  },
  data(){
    return{
      titulo: 'Alurapic',
      fotos: [],
      filtro: ''
    }
  },
  computed: {
    fotosComFiltro(){
      if(this.filtro){
          //expressão regular que baseado no valor digitado buscado na lista de fotos
          //trazendo do array que contém o que foi digitado (!case sensitive)
          let exp = new RegExp(this.filtro.trim(), 'i');
          return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
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

<style scoped>
  .centralizado{
    text-align: center;
  }
  .lista-fotos{
    list-style: none;
  }
  .lista-fotos-itens{
    display: inline-block;
  }

  .filtro{
    display: inline-block;
    width: 100%;
  }
</style>

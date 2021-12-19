<template>
  <div>    
    <h1 class="centralizado">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado"> {{ mensagem }} </p>
    <!-- v-bind da fonte de dados para view // v-on da view para fonte de dados -->
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtrar pelo titulo">

    <ul class="lista-fotos">
      <li class="lista-fotos-itens" v-for="foto in fotosComFiltro">
        
        <meu-painel :titulo="foto.titulo">
                                    <!-- modificadores .animate e .reverse -->
            <imagem-responsiva v-meu-transform:scale.animate="1.1" :url="foto.url" :titulo="foto.titulo"/>
            <meu-botao 
              tipo="button" rotulo="remover"
              @botaoAtivado="remove(foto)"
              :confirmacao="true"
              estilo="perigo"
            /> 
        </meu-painel> 

        
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue'

//importando transform.js
import transform from '../../directives/Transform';

export default {
  components:{
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },
  directives:{
    'meu-transform': transform
  },
  data(){
    return{
      titulo: 'Alurapic',
      fotos: [],
      filtro: '',
      mensagem: ''
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
  methods: {
    remove(foto){
      this.$http
        .delete(`http://localhost:3000/v1/fotos/${foto._id}`)
        .then(() => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1); //remove a foto do array
          this.mensagem = 'Foto removida com sucesso';       
        }, err => {
          console.log(err);
          this.mensagem = 'Não foi possível remover a foto';
        });
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

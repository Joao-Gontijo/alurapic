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
              <router-link :to="{ name: 'altera', params: { id: foto._id}}">
                  <meu-botao
                    tipo="button"
                    rotulo="ALTERAR"
                  />  
            </router-link>
            
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
import Botao from '../shared/botao/Botao.vue';
import FotoService from '../../domain/foto/FotoService';

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
      
      this.service
        .apaga(foto._id)
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
    
    this.service = new FotoService(this.$resource);

    this.service
      .lista()
      .then(fotos => this.fotos = fotos, err => console.log(err));
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

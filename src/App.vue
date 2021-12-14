<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-itens" v-for="foto in fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
</style>

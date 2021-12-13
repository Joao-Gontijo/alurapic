<template>
  <div id="app">
    <h1>{{titulo}}</h1>
    <img :src="foto.url" :alt="foto.titulo">
  </div>
</template>

<script>
export default {
  data(){
    return{
      titulo: 'Alurapic',
      foto: {
        url: 'https://pm1.narvii.com/6085/f86e982ce4902dbcb104b9664eb3e085ddeb6b5d_hq.jpg',
        titulo: 'pikachoo'
      }
    }
  }
}
</script>

<style>

</style>

<template>
  <div id="app">
    <h1>{{titulo}}</h1>
    <ul>
      <li v-for="foto in fotos">
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
      fotos: [
        {
          url: 'https://pm1.narvii.com/6085/f86e982ce4902dbcb104b9664eb3e085ddeb6b5d_hq.jpg',
          titulo: 'pikachoo'
        }
      ]
    }
  }
}
</script>

<style>

</style>

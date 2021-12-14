<template>
    <div class="painel">
        <h2 class="painel-titulo">{{ titulo }}</h2>
        <!-- slot mantém o que tá dentro da tag no app.vue -->
        <slot class="painel-conteudo">
            
        </slot>
    </div>    
</template>

<script>
export default {
  //quais são as propriedades que esse componente aceita receber
  props: ['titulo', 'url'] 
}
</script>

<style>
.painel{
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}
.painel .painel-titulo{
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}
</style>

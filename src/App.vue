<template>
  <div class="container">
    <div class="header">
       <appFooter></appFooter>
    </div>
    <div class="content-body">asdad</div>
    <div class="footer">
      <appFooter></appFooter>
    </div>
  </div>
</template>

<script>
  //import persona from './components/Persona.vue';
  //import tareas from './components/Tareas.vue';
  //import contador from './components/Contador.vue';

  import appFooter from './components/footer/Footer.vue';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    
    components: { appFooter },

    data() {
      return {};
    }
  }
</script>

<style>
body {
  background-color: #DEDEDE;
}
.content-body{
  max-width: 960px;
  margin:auto;
  background-color: white;
}
</style>

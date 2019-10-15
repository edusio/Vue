<template>
  <div>
    <persona></persona>
    <hr>
    <tareas></tareas>
    <hr>
    <contador></contador>

    <router-view></router-view>
  </div>
</template>

<script>
  import persona from './components/Persona.vue';
  import tareas from './components/Tareas.vue';
  import contador from './components/Contador.vue';
  export default {
    
    components: { persona, tareas, contador },

    data() {
      return {};
    }
  }
</script>

<style>

</style>

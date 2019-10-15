<template>
  <div>
      <h2>{{tareasCompletadas}} tareas completadas</h2>
      <ul>
          <li v-for="tarea in tareas"> {{tarea.nombre}}</li>
      </ul>
  </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex';

export default {

    data() {
        return {
        persona: null,
        }
    },

    computed: {
        ...mapState(['tareas']),
        ...mapGetters(['tareasCompletadas'])
    }
}
</script>

<style scoped>

</style>

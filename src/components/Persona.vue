<template>
  <div>
    <template v-if="persona">
      tiene
      <h1>{{nombre}}</h1>
      <h1>{{persona.email}}</h1>
      <img :src="persona.picture.large">
    </template>
  </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex';

export default {

  mounted() {
    //llamada action para obtener datos de forma async
    this.obtenerPersonasAsync();
  },

  computed: {
    ...mapGetters(['persona', 'nombre'])
  },

  methods: mapActions(["obtenerPersonasAsync"])
}
</script>

<style scoped>

</style>

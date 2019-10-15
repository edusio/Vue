<template>
  <div>
    <h2>Contador {{contador}}</h2>
    <button @click="addContador">Añadir</button>
  </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex';

export default {

    computed: mapState(['contador']),

    methods:mapMutations(['addContador']),
}
</script>

<style scoped>

</style>

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        cantidad: 12,
        tareas: [
            {nombre: "tarea 1", completado: false},
            {nombre: "tarea 2", completado: false},
            {nombre: "tarea 3", completado: false},
            {nombre: "tarea 4", completado: false},
        ],
        contador: 0,
    },

    getters: {
        tareasCompletadas: (state) => state.tareas.filter(tareas => tareas.completado).length,
    },

    actions: {
        
    },

    mutations: {
        addContador: (state) => state.contador++
    }
})
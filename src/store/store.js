import Vue from 'vue';
import Vuex from 'vuex';
import  axios from 'axios';
Vue.use(Vuex);

export const store = new Vuex.Store({
    //estado
    state: {
        persona: [],
        cantidad: 12,
        tareas: [
            {nombre: "tarea 1", completado: false},
            {nombre: "tarea 2", completado: false},
            {nombre: "tarea 3", completado: false},
            {nombre: "tarea 4", completado: false},
        ],
        contador: 0,
    },

    //obtenerd datos estado
    getters: {
        tareasCompletadas: (state) => state.tareas.filter(tareas => tareas.completado).length,
        persona: state => state.persona,
        nombre: state => state.persona.name.first + ' ' + state.persona.name.last
    },

    //modificar datos estado
    mutations: {
        obtenerPersonas: (state, persona) => state.persona = persona,
        addContador: (state) => state.contador++,
    },

     //llamas async
    actions: {
        obtenerPersonasAsync(context) {
            axios.get('https://randomuser.me/api/').then(respuesta => context.commit("obtenerPersonas", respuesta.data.results[0]));
        }
    }
})
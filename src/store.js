import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    carregando: false,
    pokemonData: ""
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.carregando = status;
    },
    SET_POKEMONDATA_STATUS(state, status) {
      state.pokemonData = status;
    }
  },
  getters: {
    carregando: state => state.carregando,
    pokemonData: state => state.pokemonData
  }
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    carregando: false,
    pokemonData: "",
    pokemonAll: "",
    showModal: false
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.carregando = status;
    },
    SET_SHOWMODAL_STATUS(state, status) {
      state.showModal = status;
    },
    SET_POKEMONDATA_STATUS(state, status) {
      state.pokemonData = status;
    },
    SET_POKEMONALL_STATUS(state, status) {
      state.pokemonAll = status;
    }
  },
  getters: {
    carregando: state => state.carregando,
    showModal: state => state.showModal,
    pokemonData: state => state.pokemonData,
    pokemonAll: state => state.pokemonAll
  }
});

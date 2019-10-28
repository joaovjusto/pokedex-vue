<template>
<div class="row" :key="componentKey">
  <div class="col-12">
    <div class="main-title">
      <h3>Consulta Pokémon</h3>
    </div>
    <div class="form-row">
      <CardPokemon v-for="(item, index) in pokemonAll.results" :stats="item" :index="index" :key="index" />
    </div>
    <div class="row">
      <div class="col-12 text-right icons">
        <img src="../assets/icons/left-arrow.svg" @click="previousPage(pokemonAll.previous)" alt="">
        <img src="../assets/icons/right-arrow.svg" @click="nextPage(pokemonAll.next)" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CardPokemon from "@/components/CardPokemon.vue";
import pokemon from "../services/pokemon";

export default {
  name: "Dashboard",
  mixins: [pokemon],
  components: {
    CardPokemon
  },
  data() {
    return {
      componentKey: 0,
      pokemonAll: '',
    };
  },
  created() {
    this.getAll("?offset=0&limit=24").then(
      this.pokemonAll = this.$store.state.pokemonAll
    );
  },
  mounted() {

  },
  methods: {
    nextPage(url) {
      if (url !== null) {
        let str = url;
        let value = str.indexOf('?') - 15;
        var lastChar = str.substr(str.length - value);

        this.getAll(lastChar).then(
          this.pokemonAll = this.$store.state.pokemonAll
        );
        localStorage.clear();
        this.componentKey += 1;
      }
    },
    previousPage(url) {
      if (url !== "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24") {
        let str = url;
        let value = str.indexOf('?') - 15;
        var lastChar = str.substr(str.length - value);

        this.getAll(lastChar).then(
          this.pokemonAll = this.$store.state.pokemonAll
        );
        localStorage.clear();
        this.componentKey += 1;
      }
    }
  }
};
</script>

<style scoped>
.icons img {
  height: 45px;
  margin-top: 15px;
  cursor: pointer;
}

.icons img:first-child {
  margin-right: 10px;
}

.main-title {
  margin-top: 15px;
}
</style>

<template>
<div class="row">
  <div class="col-12 custom-height">
    <div class="main-title">
      <h3>Seu time </h3>
    </div>
  </div>
  <div class="col-12">
    <div class="form-row">
      <CardPokemon v-for="(item,index) in items" :key="index" />
    </div>
    <div class="main-title">
      <h3>Consulta Pokémon</h3>
    </div>
    <div class="form-row">
      <CardPokemon v-for="(item,index) in items" :key="index" />
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
      pokemonData: '',
      pokemonAll: '',
      items: [1, 2, 3, 4, 5, 6],
    };
  },
  created() {
    this.getPerId("8").then(
      this.pokemonData = this.$store.state.pokemonData
    );
    this.getAll().then(
      this.pokemonAll = this.$store.state.pokemonAll
    );
  },
  mounted() {

  },
  methods: {
    
  }
};
</script>

<style scoped>
.main-title {
  margin-top: 15px;
}
</style>

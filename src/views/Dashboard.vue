<template>
<div class="row">
  <div class="col-12 custom-height">
    <div class="main-title">
      <h3>Seu time </h3>
    </div>
  </div>
  <div class="col-12">
    <div class="form-row">
      <!-- <CardPokemon v-for="(item,index) in items" :key="index" /> -->
      <CardPokemon v-for="(item,index) in items" :key="index" />
    </div>
    <div class="main-title">
      <h3>Consulta Pokémon</h3>
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
      items: [1, 2, 3, 4, 5, 6],
    };
  },
  mounted() {
    this.getPerId("8");
    this.pokemonData = this.$store.state.pokemonData;
  },
};
</script>

<style scoped>
.main-title {
  margin-top: 15px;
}
</style>

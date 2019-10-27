<template>
<div class="col-xl-2">
  <div class="card">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <img width="25%" :id="this.indexPokemon" :ref="this.indexPokemon" :src="this.pokemonData.sprites.front_default" alt="">
      <!-- <div class="text-center" :style="`background-color: rgb(${palette[0]},${palette[1]},${palette[2]})`"> -->
      <div class="text-center">
        <span>
          {{status.name}}
        </span>
      </div>
      <div class="card-hover pointer" @click="openModal(pokemonData)">
        <span>ver mais</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ColorThief from 'color-thief'
import pokemon from "../services/pokemon";

export default {
  name: "CardPokemon",
  mixins: [pokemon],
  props: ['stats', 'index'],
  data() {
    return {
      status: this.stats,
      pokemonData: '',
      palette: [],
      indexPokemon: this.index + 50
    }
  },
  // created() {
  //   this.getPerId("8").then(
  //     this.pokemonData = this.$store.state.pokemonData
  //   );
  // },
  mounted() {
    var str = this.status.url;
    var lastChar = str.substr(str.length - 5); // => "1"
    var res = lastChar.replace(/\D/g, "").toString();

    this.getPerId(res).then(
      this.pokemonData = this.$store.state.pokemonData
    );
    
    // this.$nextTick(() => {
      // const colorThief = new ColorThief();
      // let id = this.indexPokemon;
      // let palette = colorThief.getPalette(this.$refs.id);
      // let refactor = palette[0]
      // refactor.map((cor, index) => {
      //   this.palette.push(refactor[index]);
      // });
    // });
  },
  methods: {
    openModal(item) {
      console.log(item)
    }
  }
};
</script>

<style scoped>
.card-hover {
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  user-select: none;
  color: #fff;
  font-size: 20px;
  border-radius: 15px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  box-shadow: 0px 0px 28px -5px rgba(122,122,122,1);
  transition: all 0.3s linear;
}

.card:hover .card-hover {
  /* display: flex; */
  visibility: visible;
  opacity: 1;
}

.text-center {
  background-color: #423276;
  text-align: center !important;
  position: absolute;
  bottom: 0;
  padding-top: 15px;
  width: 100%;
  left: 0;
  height: 50px;
  border-radius: 60px 60px 15px 15px;
}

.text-center span {
  color: #fff;
  text-transform: capitalize;
}

.card-body {
  text-align: center;
}

.card-body img {
  height: 120px;
  width: auto;
}
</style>

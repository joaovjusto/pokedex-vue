<template>
<div class="col-xl-2">
  <div class="card">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <!-- <h5 class="card-title">Card title</h5> -->
      <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
      <img width="25%" ref="img" src="../assets/img/charizard.png" alt="">
      <div class="text-center" :style="`background-color: rgb(${palette[0]},${palette[1]},${palette[2]})`">
        <span>
          Charizard
        </span>
      </div>
      <div class="card-hover pointer">
        <span>ver mais</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ColorThief from 'color-thief'

export default {
  name: "CardPokemon",
  data() {
    return {
      palette: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      const colorThief = new ColorThief();
      let palette = colorThief.getPalette(this.$refs.img);
      let refactor = palette[0]
      refactor.map((cor, index) => {
        this.palette.push(refactor[index]);
      });
    });
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
  /* background-color: #423276; */
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
  /* background-color: #423276; */
}

.card-body {
  text-align: center;
}

.card-body img {
  height: 120px;
  width: auto;
}
</style>

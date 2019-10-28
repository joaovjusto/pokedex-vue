<template>
<el-dialog :visible.sync="showModal">
  <div class="row" id="background-pokemon">
    <div class="col-12 text-center imagem-modal">
      <img :src="this.$store.getters.pokemonData.sprites.front_default" alt="">
    </div>
  </div>
  <div class="rounded-modal">
    <div class="text-container">
      <h3>{{pokemonData.name}}</h3>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <h6>Peso Médio</h6>
        <span>{{pokemonData.weight + " kg"}}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <h6>Altura Média</h6>
        <span>{{pokemonData.height}}</span>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12 text-center" style="margin-bottom: 0;">
        <h6>Tipos Principais</h6>
      </div>
      <div class="col-12" v-for="(item, index) in pokemonData.types" :key="index">
        <span class="capitalize">{{item.type.name}}</span>
      </div>
    </div>
  </div>
</el-dialog>
</template>

<script>
export default {
  name: "DialogDetail",
  data() {
    return {
      showModal: false,
      pokemonData: '',
    }
  },
  watch: {
    showModal: function (newValue) {
      if (!newValue) {
        this.closeModal();
      }
    },
  },
  mounted() {
    this.showModal = this.$store.getters.showModal;
    this.$store.watch(
      (state, getters) => getters.pokemonData,
      (newValue, oldValue) => {
        this.pokemonData = newValue
      },
    );
    this.$store.watch(
      (state, getters) => getters.showModal,
      (newValue, oldValue) => {
        if (newValue) {
          this.showModal = !this.showModal;
        }
      },
    );
  },
  methods: {
    closeModal() {
      this.$store.commit("SET_SHOWMODAL_STATUS", false);
    }
  }
};
</script>

<style>
@media only screen and (max-width: 770px) { 
  .el-dialog {
    width: 100% !important;
  }
}
.capitalize {
  text-transform: capitalize;
}

h6 {
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 0 !important;
}

.rounded-modal .row .col-12 {
  margin-bottom: 10px;
}

#background-pokemon {
  background: linear-gradient(180deg, rgba(97, 104, 244, 1) 0%, rgba(96, 64, 166, 1) 100%);
  margin: 0 -20px;
  border-radius: 50px 50px 0 0;
  min-height: 225px;
}

.rounded-modal {
  padding-top: 60px;
  padding-left: 15px;
  width: 100%;
  top: 180px;
  left: 0;
  position: absolute;
  border-radius: 50px;
  background-color: #fff;
  /* height: 230px; */
}

.rounded-modal .text-container {
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  text-align: center;
}

.rounded-modal .text-container h3 {
  color: rgba(0, 0, 0, 0.87);
  text-transform: capitalize;
}

.imagem-modal img {
  height: 200px;
}

.el-dialog {
  max-width: 500px;
  border-radius: 50px 50px 0 0 !important;
  max-height: 600px;
}

.el-dialog__body {
  padding-top: 0 !important;
}

.el-dialog__header {
  display: none;
}
</style>

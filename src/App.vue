<template>
<div id="app" v-loading.fullscreen.lock="$store.getters.carregando">
  <div class="container-fluid">
    <Header />
    <MenuLateral />
    <div id="page-container">
      <router-view class="fade-in" />
    </div>
  </div>
  <DialogPokemon/>
</div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import MenuLateral from "@/components/MenuLateral.vue";
import DialogPokemon from "@/components/DialogDetail.vue";

export default {
  name: "app",
  components: {
    DialogPokemon,
    Header,
    MenuLateral
  }
};
</script>

<style lang="scss">
#app {
  margin-bottom: 20px;
}

.fade-in {
  -webkit-animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>

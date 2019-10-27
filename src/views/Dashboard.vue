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
  </div>
</div>
</template>

<script>
import CardPokemon from "@/components/CardPokemon.vue";

export default {
  name: "principal",
  components: {
    CardPokemon
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
      quantidade: 1,
      labelItem: "item",
      // itens: content,
      show: false,
      listaFiltrada: [],
      options: [{
          value: "name",
          label: "Ordem Alfabética"
        },
        {
          value: "score",
          label: "Mais Populares"
        },
        {
          value: "price",
          label: "Menor Preço"
        }
      ],
      filtro: "name",
      emptyCart: true
    };
  },
  mounted() {
    // this.loadingTimer();

    var i;
    // for (i = 0; i < this.itens.length; i++) {
    //   this.itens[i].price = this.monetary(this.itens[i].price);
    // }
  },
  watch: {
    quantidade: function (newValue) {
      var local = newValue;
      if (local == 1) {
        this.labelItem = "item";
      } else if (local >= 2) {
        // this.labelItem = "itens";
      }
    },
    listaFiltrada: function (newValue) {
      var local = newValue;
      this.quantidade = local.length;
      if (local.length == 0) {
        this.emptyCart = true;
      }
    }
  },
  methods: {
    removerCarrinho(item) {
      var i;
      for (i = 0; i < this.listaFiltrada.length; i++) {
        if (this.listaFiltrada[i]._id == item._id) {
          this.listaFiltrada.splice(i, 1);
          break;
        }
      }
    },
    adicionarCarrinho(item) {
      var itemTemp = Object.assign({}, item);
      itemTemp._id = item.id * Math.random();
      this.listaFiltrada.push(itemTemp);
      this.emptyCart = false;
    },
    loadingTimer() {
      var self = this;
      this.$store.commit("SET_LOADING_STATUS", true);

      setTimeout(function () {
        self.$store.commit("SET_LOADING_STATUS", false);
        self.show = true;
      }, 2000);
    },
    formatNum(valor) {
      valor = valor.toFixed(2);
      valor += "";
      return valor.replace(".", ",");
    },
    monetary(num) {
      var value = Number(num);

      num = num + "";
      var res = num.split(".");
      if (res.length == 1 || res[1].length < 3) {
        value = value.toFixed(2);
      }

      return parseFloat(value);
    }
  },
  computed: {
    regraNegocio: function () {
      var obj = {
        price: 0,
        subtotal: 0,
        frete: 0
      };

      var i;
      for (i = 0; i < this.listaFiltrada.length; i++) {
        obj.subtotal += this.listaFiltrada[i].price;
      }
      obj.frete = 10 * this.quantidade;
      if (obj.subtotal > 250) {
        obj.frete = 0;
      }
      obj.total = obj.subtotal + obj.frete;

      return obj;
    },
    carrinhoVazio: function () {
      if (this.emptyCart) {
        return true;
      } else {
        return false;
      }
    },
    sortedArray: function () {
      if (this.filtro == "name") {
        function compare(a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }

        // return this.itens.sort(compare);
      } else if (this.filtro == "price") {
        function compare(a, b) {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        }

        // return this.itens.sort(compare);
      } else if (this.filtro == "score") {
        function compare(a, b) {
          if (a.score < b.score) return -1;
          if (a.score > b.score) return 1;
          return 0;
        }

        // return this.itens.sort(compare);
      }
    }
  }
};
</script>

<style scoped>
.main-title {
  margin-top: 15px;
}
</style>

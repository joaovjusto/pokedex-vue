<template>
  <div class="container">
    <div class="row">
      <div class="col-6 custom-height">
        <div class="title">
          <h3>Games</h3>
        </div>
      </div>
      <div class="col-3 custom-height">
        <div class="filter">
          <el-select v-model="filtro" placeholder="Filtro">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="col-3 custom-height">
        <div class="cart-box">
          <div class="card-title">
            <h3>Carrinho</h3>
            <span v-if="!emptyCart">{{"(" + this.quantidade + " " + labelItem + ")"}}</span>
          </div>
          <div class="cart-empty" v-if="carrinhoVazio">
            <div class="img-cart">
              <img class="img-cart" src="../assets/cart-icon.svg" alt />
            </div>
            <p>Até o momento o seu carrinho está vazio</p>
          </div>
          <div v-else>
            <div class="card" style="width: 18rem;">
              <ul class="list-group list-group-flush">
                <li class="list-group-item flex" v-for="item in listaFiltrada" :key="item._id">
                  <div>
                    <img :src="require(`../assets/${item.image}`)" alt />
                  </div>
                  <div>
                    <span class="cart-title">{{item.name}}</span>
                    <span class="cart-price">{{"R$ " + formatNum(item.price)}}</span>
                    <img
                      class="icon-delete-cart"
                      @click="removerCarrinho(item)"
                      src="../assets/delete.svg"
                      alt
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div class="finalize-shop">
              <div class="row">
                <div class="col-6 final-title">subtotal</div>
                <!-- <div class="col-6 right">R$ 350,00</div> -->
                <div class="col-6 right">{{"R$ " + formatNum(regraNegocio.subtotal)}}</div>
              </div>
              <div class="row">
                <div class="col-6 final-title">frete</div>
                <div class="col-6 right">{{"R$ " + formatNum(regraNegocio.frete)}}</div>
              </div>
              <div class="row">
                <div class="col-4 final-title">total</div>
                <div
                  class="col-8 right"
                  style="font-size: 20px;"
                >{{"R$ " + formatNum(regraNegocio.total)}}</div>
              </div>
              <div class="row">
                <div class="col-12">
                  <el-button type="primary" style="width: 100%">finalizar compra</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9" v-if="show">
        <div class="row">
          <div class="col-4" v-for="item in sortedArray" :key="item.id">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="require(`../assets/${item.image}`)" class="image" />
              <div class="hover-me">
                <div class="text-center" style="padding: 15px;">
                  <span>{{item.name}}</span>
                  <div class="bottom clearfix text-center">
                    <time class="time">{{"R$ " + formatNum(item.price)}}</time>
                  </div>
                </div>
                <div class="text-show">
                  <el-button type="text" @click="adicionarCarrinho(item)">adicionar ao carrinho</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const content = require("../content/products.json");

export default {
  name: "principal",
  data() {
    return {
      quantidade: 1,
      labelItem: "item",
      itens: content,
      show: false,
      listaFiltrada: [],
      options: [
        {
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
    this.loadingTimer();

    var i;
    for (i = 0; i < this.itens.length; i++) {
      this.itens[i].price = this.monetary(this.itens[i].price);
    }
  },
  watch: {
    quantidade: function(newValue) {
      var local = newValue;
      if (local == 1) {
        this.labelItem = "item";
      } else if (local >= 2) {
        this.labelItem = "itens";
      }
    },
    listaFiltrada: function(newValue) {
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

      setTimeout(function() {
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
    regraNegocio: function() {
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
    carrinhoVazio: function() {
      if (this.emptyCart) {
        return true;
      } else {
        return false;
      }
    },
    sortedArray: function() {
      if (this.filtro == "name") {
        function compare(a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }

        return this.itens.sort(compare);
      } else if (this.filtro == "price") {
        function compare(a, b) {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        }

        return this.itens.sort(compare);
      } else if (this.filtro == "score") {
        function compare(a, b) {
          if (a.score < b.score) return -1;
          if (a.score > b.score) return 1;
          return 0;
        }

        return this.itens.sort(compare);
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

img {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.finalize-shop {
  margin-top: 15px;
}
.finalize-shop .final-title {
  color: #7f7575;
  font-size: 14px;
}
.right {
  text-align: right;
  margin-bottom: 10px;
  color: #423b3b;
  font-size: 16px;
  font-weight: 600;
}
.card {
  width: 100% !important;
  border: none;
}
.list-group-item {
  padding: 0;
  margin-bottom: 25px;
  border: none;
}
.list-group-item img {
  background-color: #eeeeee;
  height: 50px;
  padding: 5px;
  border-radius: 5px;
}
.list-group-item .cart-title {
  font-size: 14px;
  color: #7f7575;
  margin-left: 10px;
  line-height: 15px;
  float: left;
  display: block;
  width: 100%;
}
.list-group-item .cart-price {
  font-weight: 600;
  font-size: 14px;
  color: #423b3b;
  margin-left: 10px;
}
.list-group-item img.icon-delete-cart {
  display: none;
  height: 15px;
  position: absolute;
  top: 20px;
  right: 0;
  background: none;
  padding: 0;
}
.hover-me {
  min-height: 100px;
}
.hover-me:hover .text-center {
  display: none;
}
.hover-me:hover .text-show {
  display: block;
}
.text-show {
  display: none;
}
.el-button--text {
  font-size: 16px;
  color: #3487dc;
  text-align: center;
  width: 100%;
  font-weight: 600;
  margin-top: 15px;
}
.el-button--text:focus {
  text-decoration: none;
  outline: 0;
}
/* eslint-disable-next-line*/
.list-group-item:hover img.icon-delete-cart {
  display: block;
  transition-duration: 1s;
  cursor: pointer;
}
.flex {
  display: inline-flex;
}
.el-card.is-always-shadow {
  box-shadow: none !important;
}
.el-card {
  margin-bottom: 20px;
  border: none;
}
.el-card__body span {
  font-family: "Open Sans";
  font-weight: 500;
  text-align: center;
  font-size: 16px;
  color: #746a6a;
  margin-top: 10px;
}
.el-card__body img {
  background-color: #eeeeee;
  padding: 40px;
  border-radius: 5px;
}
.el-card__body .time {
  font-family: "Open Sans";
  font-weight: 600;
  text-align: center;
  font-size: 16px;
  color: #3486e6;
  margin-top: 10px;
}
.custom-height {
  height: 120px;
}
.cart-empty {
  margin-bottom: 60px;
}
.cart-empty p {
  font-family: "Open Sans";
  text-align: center;
  font-size: 14px;
  color: #746a6a;
  margin-top: 20px;
}
.img-cart {
  text-align: center;
  margin-top: 30px;
}
.card-title {
  display: inline-flex;
}
.card-title h3 {
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 20px;
}
.card-title span {
  font-family: "Open Sans";
  font-size: 14px;
  color: #7f7575;
  margin-left: 5px;
}
.cart-box {
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  margin: 42px 70px 42px 0;
  width: 260px;
  /* height: 500px; */
  padding: 20px;
}
.title h3 {
  font-family: "Open Sans";
  font-weight: bold;
  font-size: 45px;
  color: #363636;
  margin: 35px 0 42px 0;
}
.filter {
  margin: 42px 30px;
}
</style>
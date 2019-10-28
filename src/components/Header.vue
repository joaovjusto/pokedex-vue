<template>
<div id="header-style">
  <div class="row" id="header-border">
    <div class="col-md-3 col-xl-3">
      <img src="../assets/img/logo.svg" class="pointer" alt="">
    </div>
    <div class=" col-md-9 col-xl-9 text-right" id="components-header">
      <ul>
        <li class="active">
          Dashboard
        </li>
        <li>
          Habilidades
        </li>
        <li>
          Regiões
        </li>
        <li>
          Principais Jogos
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
#header-style {
  position: fixed;
  background-color: #fff;
  z-index: 1;
  width: calc(100% - 30px);
}

/* Estilo Header */
#header-border {
  border-bottom: 1px solid #c2c2c2;
  height: 100px;
}

#header-border .col-xl-3 {
  display: flex;
}
@media only screen and (max-width: 770px) {
 #components-header {
   display: none;
 }
}
#components-header ul {
  padding-top: 37px;
}

#components-header ul li {
  font-size: 20px;
  color: #959595;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  margin-right: 20px;
  transition: all 0.3s linear;
}

#components-header ul li.active,
#components-header ul li:hover {
  font-size: 21px;
  color: #6168f4;
  border-bottom: 2px solid #6168f4;
}

#components-header ul li:last-child {
  margin-right: 0;
}

/* Fim Estilo Header */
</style>

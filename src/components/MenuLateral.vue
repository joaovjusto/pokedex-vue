<template>
<div class="menu-lateral menu transition-smooth">
  <ul>
    <li>
      <button :class="this.classHamburguer" type="button">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </button>
    </li>
    <li>
      <img src="../assets/icons/energy.svg" alt="">
      <span v-if="hamburguerBool">Lorem Ipsum Dolor</span>
    </li>
    <li>
      <img src="../assets/icons/energy.svg" alt="">
      <span v-if="hamburguerBool">Teste de menu</span>
    </li>
    <li>
      <img src="../assets/icons/energy.svg" alt="">
      <span v-if="hamburguerBool">Teste 2</span>
    </li>
    <li>
      <img src="../assets/icons/shutdown.svg" alt="">
      <span v-if="hamburguerBool">Sair</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      hamburguerBool: false,
      classHamburguer: 'hamburger hamburger--collapse',
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  mounted() {
    $('.transition-smooth').mouseenter(() => {
      $('.transition-smooth').stop().toggleClass('menu-animation');
      $('.transition-smooth').stop().toggleClass('menu-lateral');
      this.classHamburguer = 'hamburger hamburger--collapse is-active';
      this.hamburguerBool = !this.hamburguerBool;
    })
    $('.transition-smooth').mouseleave(() => {
      $('.transition-smooth').stop().toggleClass('menu-animation');
      $('.transition-smooth').stop().toggleClass('menu-lateral');
      this.classHamburguer = 'hamburger hamburger--collapse';
      this.hamburguerBool = !this.hamburguerBool;
    });
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
/* Estilo menu lateral */
.menu-animation {
  width: 200px !important;
}

.menu-animation ul {
  padding-left: 0;
}

.menu-animation ul li:first-child {
  padding-left: 0;
}

.menu-animation ul li {
  display: block !important;
  padding-left: 20px;
  text-align: left !important;
}

.menu {
  position: fixed;
  top: 100px;
  z-index: 1;
  left: 0;
  width: 65px;
  height: calc(100% - 100px);
  background: linear-gradient(0deg, rgba(97, 104, 244, 1) 0%, rgba(96, 64, 166, 1) 100%);
  border-radius: 0 15px 15px 0;
}

.menu span {
  color: rgba(255, 255, 255, 0.57);
  margin-left: 10px;
  transition: all 0.3s linear;
}

.menu-lateral ul,
.menu-animation ul {
  display: contents;
}

.menu-lateral ul li,
.menu-animation ul li {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 50px;
  transition: all 0.3s linear;
}

.menu-lateral ul li img,
.menu-animation ul li img {
  height: 25px;
}

.menu-lateral ul li:first-child,
.menu-animation ul li:first-child {
  display: block;
  height: 30px;
  margin-top: 5px;
}

.menu-lateral ul li:nth-child(2),
.menu-animation ul li:nth-child(2) {
  margin-top: 30px;
}

/* Fim menu lateral */
</style>

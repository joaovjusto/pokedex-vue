export default {
  methods: {
    getPerId(id) {
      this.$store.commit("SET_LOADING_STATUS", true);

      this.$http.get(id).then(
        res => {
          // eslint-disable-next-line no-console
          console.log(res.body);
          this.$store.commit("SET_LOADING_STATUS", false);
          this.$store.commit("SET_POKEMONDATA_STATUS", res.body);
        },
        res => {
          // eslint-disable-next-line no-console
          console.log(res);
          this.$store.commit("SET_LOADING_STATUS", false);
        }
      );
    }
  }
};

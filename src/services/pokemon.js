export default {
  methods: {
    async getPerId(id) {
      this.$store.commit("SET_LOADING_STATUS", true);
      this.$http.get(id).then(
        res => {
          // eslint-disable-next-line no-console
          console.log(res.body);
          this.$store.commit("SET_POKEMONDATA_STATUS", res.body);
          this.$store.commit("SET_LOADING_STATUS", false);
          this.pokemonData = res.body;
          return res.body;
        },
        res => {
          // eslint-disable-next-line no-console
          console.log(res);
          this.$store.commit("SET_LOADING_STATUS", false);
        }
      );
    },
    async getAll() {
      this.$http.get("").then(
        res => {
          // eslint-disable-next-line no-console
          console.log(res.body);
          this.$store.commit("SET_POKEMONALL_STATUS", res.body);
          this.$store.commit("SET_LOADING_STATUS", false);
          this.pokemonAll = res.body;
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

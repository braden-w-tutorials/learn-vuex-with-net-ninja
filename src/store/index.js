import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 20 }
    ]
  },
  getters: {
    saleProducts: state => {
      const saleProducts = state.products.map(product => {
        return { name: `** ${product.name} **`, price: product.price / 2 };
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, amount) => {
      state.products.forEach(product => {
        product.price -= amount;
      });
    }
  },
  actions: {
    reducePrice: (context, amount) => {
      setTimeout(function() {
        context.commit("reducePrice", amount);
      }, 2000);
    }
  },
  modules: {}
});

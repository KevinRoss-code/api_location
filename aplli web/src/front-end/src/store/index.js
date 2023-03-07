import axios from "axios";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    litiges: [],
    userId: 0,
  },
  getters: {
    litiges: (state) => {
      return state.litiges;
    },
    userId: (state) => {
      return state.userId;
    },
  },
  mutations: {
    SET_Litiges(state, litiges) {
      state.litiges = litiges;
    },
    SET_User_Id(state, userId) {
      state.userId = userId;
    },
  },
  actions: {
    loadLitiges({ commit }) {
      axios
        .get("http://localhost:3000/api/litiges/historique", {
          headers: {
            "x-access-token": localStorage.getItem("user"),
          },
        })
        .then((res) => res.data)
        .then((litiges) => {
          console.log(litiges);
          commit(" SET_Litiges", litiges);
        });
    },
    userId({ commit }) {
      commit("SET_User_Id");
    },
  },
});

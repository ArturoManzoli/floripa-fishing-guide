import { createStore } from "vuex";
import { State, CatchData } from "@/types";

export default createStore<State>({
  state: {
    currentCatch: {
      species: "",
      weight: "",
      location: "",
      bait: "",
      equipment: "",
      date: "",
      time: "",
      weather: "",
      windDirection: "",
      windSpeed: "",
      tide: "",
      moon: "",
      image: [],
      notes: "",
    },
    catchesDatabase: [],
  },
  mutations: {
    SET_CURRENT_CATCH(state, payload: CatchData) {
      state.currentCatch = payload;
    },
    ADD_CATCH_TO_DATABASE(state, payload: CatchData) {
      state.catchesDatabase.push(payload);
    },
    RESET_CURRENT_CATCH(state) {
      state.currentCatch = {
        species: "",
        weight: "",
        location: "",
        bait: "",
        equipment: "",
        date: "",
        time: "",
        weather: "",
        windDirection: "",
        windSpeed: "",
        tide: "",
        moon: "",
        image: [],
        notes: "",
      };
    },
  },
  actions: {
    setCurrentCatch({ commit }, payload: CatchData) {
      commit("SET_CURRENT_CATCH", payload);
    },
    addCatchToDatabase({ commit }, payload: CatchData) {
      commit("ADD_CATCH_TO_DATABASE", payload);
    },
    resetCurrentCatch({ commit }) {
      commit("RESET_CURRENT_CATCH");
    },
  },
  getters: {
    getCurrentCatch: (state) => state.currentCatch,
    getCatchesDatabase: (state) => state.catchesDatabase,
  },
});

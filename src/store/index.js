import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  foodList: [],
  selectedFoodItem: {},
  status: {
    loading: false,
    success: false,
    error: null
  }
}

export const mutations = {
  SET_ITEMS: (state, payload) => {
    state.itemsList = payload
  },
  SELECT_FOOD_ITEM: (state, payload) => {
    state.selectedFoodItem = payload
  },
  CLEAR_ITEMS: (state) => {
    state.itemsList = []
  },
  LOADING: (state) => {
    state.status = {
      loading: true,
      success: false,
      error: null
    }
  },
  SUCCESS: (state) => {
    state.status = {
      loading: false,
      success: true,
      error: null
    }
  },
  ERROR: (state, payload) => {
    state.status = {
      loading: false,
      success: false,
      error: payload
    }
  }
}


export const actions = {
  getFoodItems({ commit }, payload) {
    // commit LOADING until the promise is fulfilled
    commit('CLEAR_ITEMS')
    commit('LOADING')

    console.log(payload)
  }
}

export const getters = {
  foodList: (state) => state.foodList,
  selectedFoodItem: (state) => state.selectedFoodItem,
  status: (state) => state.status
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

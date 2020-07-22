import Vue from 'vue'
import Vuex from 'vuex'
import { EDAMAM } from '@/apis/edamam';

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
    state.foodList = payload
  },
  SELECT_FOOD_ITEM: (state, payload) => {
    state.selectedFoodItem = payload
  },
  CLEAR_ITEMS: (state) => {
    state.foodList = []
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
    commit('LOADING')
    commit('CLEAR_ITEMS')

    return EDAMAM.get('/parser', { params: payload })
      .then(response => {
        commit('SET_ITEMS', response.data.hints)
        commit('SUCCESS')
      })
      .catch(() => {
        // commit error if the promise was rejected, also I am demonstrating here how to handle the server errors and
        // translate them to application friendly error.
        // for the purpose of this assignment, I am assuming that I am getting the error 400.
        commit('ERROR', {
          status: 400,
          message: 'an error has occured'
        })
      })
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

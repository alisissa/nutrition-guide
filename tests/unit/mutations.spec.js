import { expect } from 'chai'
import { mutations } from '@/store'

describe('mutations', () => {
  it('SET_ITEMS', () => {
    // mock state
    const state = {
      foodList: []
    }
    const foodList = [
      {
        food: {
          foodId: "food_b8pgy4cbnid3sfawqjg92a63pq85",
          "label": "peaches, raw",
          "nutrients": {
            "ENERC_KCAL": 39.0,
            "PROCNT": 0.91,
            "FAT": 0.25,
            "CHOCDF": 9.54,
            "FIBTG": 1.5
          },
          "category": "Generic foods",
          "categoryLabel": "food",
          "image": "https://www.edamam.com/food-img/437/4378245cfab2121c9e6eb9e3c3dc9ac8.jpg"
        },
      },
      {
        food: {
          foodId: "food_b8pgy4cbnid3sfawqjg92a63pq86",
          "label": "peaches, raw",
          "nutrients": {
            "ENERC_KCAL": 39.0,
            "PROCNT": 0.91,
            "FAT": 0.25,
            "CHOCDF": 9.54,
            "FIBTG": 1.5
          },
          "category": "Generic foods",
          "categoryLabel": "food",
          "image": "https://www.edamam.com/food-img/437/4378245cfab2121c9e6eb9e3c3dc9ac8.jpg"
        },
      }
    ]

    mutations.SET_ITEMS(state, foodList)
    expect(state.foodList).to.deep.equal(foodList)
  })

  it('CLEAR_ITEMS', () => {
    // mock state
    const state = {
      foodList: [
        {
          "food": {
            "foodId": "food_b8pgy4cbnid3sfawqjg92a63pq85",
            "label": "peaches, raw",
            "nutrients": {
              "ENERC_KCAL": 39.0,
              "PROCNT": 0.91,
              "FAT": 0.25,
              "CHOCDF": 9.54,
              "FIBTG": 1.5
            },
            "category": "Generic foods",
            "categoryLabel": "food",
            "image": "https://www.edamam.com/food-img/437/4378245cfab2121c9e6eb9e3c3dc9ac8.jpg"
          },
        }
      ]
    }
    mutations.CLEAR_ITEMS(state)
    expect(state.foodList).to.deep.equal([])
  })

  it('LOADING', () => {
    // mock state
    const state = {
      status: {
        loading: false,
        success: false,
        error: null
      }
    }
    mutations.LOADING(state)
    expect(state.status).to.deep.equal(
      {
        loading: true,
        success: false,
        error: null
      })
  })

  it('SUCCESS', () => {
    // mock state
    const state = {
      status: {
        loading: false,
        success: false,
        error: null
      }
    }
    mutations.SUCCESS(state)
    expect(state.status).to.deep.equal(
      {
        loading: false,
        success: true,
        error: null
      })
  })

  it('ERROR', () => {
    // mock state
    const state = {
      status: {
        loading: false,
        success: false,
        error: null
      }
    }
    const errorPayload = {
      status: 400,
      message: 'an error has occured'
    }
    mutations.ERROR(state, errorPayload)
    expect(state.status).to.deep.equal(
      {
        loading: false,
        success: false,
        error: errorPayload
      })
  })
})
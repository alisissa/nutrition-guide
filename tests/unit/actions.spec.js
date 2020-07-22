import { EDAMAM } from '@/apis/edamam';
import axiosMockAdapter from "axios-mock-adapter";
import { testAction } from "./testUtils"
import { actions } from '@/store'

let mock = new axiosMockAdapter(EDAMAM);

describe("actions", () => {
  beforeEach(function () {
    mock.reset()
  })

  it("should commit LOADING, CLEAR_ITEMS, SET_ITEMS and SUCCESS mutations on success", done => {
    setTimeout(done, 500);
    const response = [
      {
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
    ]
    const payload = {
      ingr: 'peach',
      app_id: 'a964ef11',
      app_key: '8f4d505a189b4087ecd8e5abfcedcd20',
    }
    mock.onGet('https://api.edamam.com/api/food-database/v2/parser').replyOnce(200, response)
    const state = null;
    const expectedMutations = [
      {
        type: 'LOADING'
      },
      {
        type: 'CLEAR_ITEMS'
      },
      {
        type: 'SET_ITEMS',
        payload: payload
      },
      {
        type: 'SUCCESS'
      }
    ]
    testAction(actions.getFoodItems, payload, state, expectedMutations, done)
  })

  it("should commit LOADING and ERROR mutations on error", done => {
    setTimeout(done, 500);
    const response = []
    const payload = {
      message: 'an error has occured',
      status: 400
    }
    mock.onGet('https://api.edamam.com/api/food-database/v2/parser').replyOnce(400, response)
    const state = null;
    const expectedMutations = [
      {
        type: 'LOADING'
      },
      {
        type: 'CLEAR_ITEMS'
      },
      {
        type: 'ERROR',
        payload: payload
      }
    ]
    testAction(actions.getFoodItems, payload, state, expectedMutations, done)
  })
})

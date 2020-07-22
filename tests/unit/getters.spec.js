import { expect } from 'chai'
import { getters } from '@/store'

describe('getters', () => {
  it('foodList', () => {
    let foodList = [
      {
        venue: {
          name: 'venue 1',
          location: {
            address: 'an address',
            distance: 200
          }
        }
      }
    ]
    // mock state
    const state = {
      foodList
    }

    expect(getters.foodList(state)).to.deep.equal(foodList)
  })

  it('status', () => {
    const state = {
      status: {
        loading: false,
        success: false,
        error: null
      }
    }

    expect(getters.status(state)).to.deep.equal(
      {
        loading: false,
        success: false,
        error: null
      })
  })
})
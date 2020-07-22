import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home'
import FoodItem from '@/components/FoodItem';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Home', () => {
  let store
  let getters

  const status = {
    loading: false,
    success: true,
    error: null
  }

  it('should render FoodItem 2 times', () => {
    getters = {
      foodList: () => [{
        food: {
          label: 'food 1',
          nutrients: {
            CHOCDF: 1
          }
        }
      },
      {
        food: {
          label: 'food 2',
          nutrients: {
            CHOCDF: 2
          }
        }
      }],
      status: () => status
    }

    store = new Vuex.Store({ getters })
    const wrapper = shallowMount(Home, {
      store,
      localVue
    })
    const foodItemsComponents = wrapper.findAllComponents(FoodItem)
    expect(foodItemsComponents).length(2)
  })

  it('should not render FoodItem, and should show no data', () => {
    getters = {
      foodList: () => [],
      status: () => status
    }
    store = new Vuex.Store({ getters })
    const wrapper = shallowMount(Home, {
      store,
      localVue
    })
    expect(wrapper.findComponent(FoodItem).exists()).to.be.false
    expect(wrapper.find('.no-data')
      .text().trim()).equal('Your search returned no matches')
  })
})

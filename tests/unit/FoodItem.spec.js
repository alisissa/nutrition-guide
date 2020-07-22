import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import FoodItem from '@/components/FoodItem';
import DetailsModal from '@/components/DetailsModal';

describe('FoodItem', () => {
  const wrapper = shallowMount(FoodItem, {
    propsData: {
      item: {
        food: {
          label: 'food 1'
        }
      }
    }
  })

  it('should render food label as per the props data', () => {
    expect(wrapper.find('.food-item_title').text()).equal('food 1')
  })

  it('should render DetailsModal once', () => {
    const DetailsModalComponent = wrapper.findAllComponents(DetailsModal)
    expect(DetailsModalComponent).length(1)
  })
})

import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import DetailsModal from '@/components/DetailsModal';

describe('DetailsModal', () => {
  const wrapper = shallowMount(DetailsModal, {
    propsData: {
      item: {
        food: {
          label: 'food 1',
          nutrients: {
            ENERC_KCAL: 39.56789,
            PROCNT: 0.91,
            CHOCDF: 9.54,
            FIBTG: 1.5
          }
        }
      }
    }
  })

  it('should render food label as per the props data', () => {
    expect(wrapper.find('.modal-header_title').text()).equal('food 1')
  })

  it('should render nutrients data with the proper formatting', () => {
    const modalBody = wrapper.find('.modal-body')
    expect(modalBody.findAll('div').at(1).text()).equal('Carbs: 9.54')
    expect(modalBody.findAll('div').at(2).text()).equal('Fat: N/A')
    expect(modalBody.findAll('div').at(3).text()).equal('Protein: 0.91')
    expect(modalBody.findAll('div').at(4).text()).equal('Fiber: 1.50')
    expect(modalBody.findAll('div').at(5).text()).equal('Kcal: 39.57')
  })

})

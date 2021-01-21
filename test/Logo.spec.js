import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    // console.log('wrapper ::: ', wrapper.html())
    const img = wrapper.find('.mx-auto')
    console.log('img ::: ', img)
    expect(wrapper.vm).toBeTruthy()
  })
})

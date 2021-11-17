import {shallowMount} from '@vue/test-utils'
import Age from '@/views/Age.vue'
import MockDate from 'mockdate'

// fixed the date of now
// ref:https://www.npmjs.com/package/mockdate
MockDate.set('2021/01/01')

describe('Calculate Age', () => {
  it('set birthday to 01/01/1990 ,the age should be 31', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '01/01/1990' })
    expect(wrapper.vm.calcAge).toEqual(31)
  })

  it('set birthday to 01/01/2020 ,the age should be 1', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '01/01/2020' })
    expect(wrapper.vm.calcAge).toEqual(1)
  })

  it('set birthday to 12/01/2020 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '12/01/2020' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 12/31/2021 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '12/31/2021' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 01/01/2022 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '01/01/2022' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 06/01/2021 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '06/01/2021' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 01/01/2023 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '01/01/2023' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })
})

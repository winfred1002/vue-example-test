import { shallowMount } from '@vue/test-utils'
import AgeCalc from '@/views/AgeCalc.vue'
import Mockdate from 'mockdate'

Mockdate.set('11/19/2021')

describe('calcAge base on 11/19/2021', () => {
  it('birthday set 11/19/2000 ,the age should be 21', () => {
    const wrapper = shallowMount(AgeCalc)
    wrapper.setData({ birthday: '11/19/2000' })
    expect(wrapper.vm.age).toBe(21)
  })
  it('birthday set 11/20/2000 ,the age should be 20', () => {
    const wrapper = shallowMount(AgeCalc)
    wrapper.setData({ birthday: '11/20/2000' })
    expect(wrapper.vm.age).toBe(20)
  })
  it('birthday set 12/19/2020 ,the age should be 0', () => {
    const wrapper = shallowMount(AgeCalc)
    wrapper.setData({ birthday: '12/19/2020' })
    expect(wrapper.vm.age).toBe(0)
  })
  it('birthday set 11/18/2020 ,the age should be 1', () => {
    const wrapper = shallowMount(AgeCalc)
    wrapper.setData({ birthday: '11/18/2020' })
    expect(wrapper.vm.age).toBe(1)
  })
  it('birthday set 11/19/2020 ,the age should be 1', () => {
    const wrapper = shallowMount(AgeCalc)
    wrapper.setData({ birthday: '11/19/2020' })
    expect(wrapper.vm.age).toBe(1)
  })
  it('birthday set 11/20/2020 ,the age should be 0', () => {
    const wrapper = shallowMount(AgeCalc)
    wrapper.setData({ birthday: '11/20/2020' })
    expect(wrapper.vm.age).toBe(0)
  })
  it('birthday set 11/18/2021 ,the age should be 0', () => {
    const wrapper = shallowMount(AgeCalc)
    wrapper.setData({ birthday: '11/18/2021' })
    expect(wrapper.vm.age).toBe(0)
  })
  it('birthday set 11/19/2021 ,the age should be 0', () => {
    const wrapper = shallowMount(AgeCalc)
    wrapper.setData({ birthday: '11/19/2021' })
    expect(wrapper.vm.age).toBe(0)
  })
  it('birthday set 11/20/2021 ,the age should be -1', () => {
    const wrapper = shallowMount(AgeCalc)
    wrapper.setData({ birthday: '11/20/2021' })
    expect(wrapper.vm.age).toBe(-1)
  })
  it('birthday set 11/19/2025 ,the age should be -1', () => {
    const wrapper = shallowMount(AgeCalc)
    wrapper.setData({ birthday: '11/19/2025' })
    expect(wrapper.vm.age).toBe(-1)
  })
  it('birthday set 11/20/2025 ,the age should be -1', () => {
    const wrapper = shallowMount(AgeCalc)
    wrapper.setData({ birthday: '11/20/2025' })
    expect(wrapper.vm.age).toBe(-1)
  })
  it('birthday set 02/29/2000,today is 03/01/2001 ,the age should be 1', () => {
    Mockdate.set('03/01/2001')
    const wrapper = shallowMount(AgeCalc)
    wrapper.setData({ birthday: '02/29/2000' })
    expect(wrapper.vm.age).toBe(1)
  })
})

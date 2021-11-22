import { shallowMount } from '@vue/test-utils'
import Age from '@/views/Age.vue'
import MockDate from 'mockdate'

// fixed the date of now
// ref:https://www.npmjs.com/package/mockdate
// set format of MockDate is mm/dd/yyyy
MockDate.set('11/19/2021')
/*                                                    2021/11/19
+-----------------+--------------------+-------------------^--------------+
|  2018/10/18     |   2020/10/18       |    2021/10/18     |  2022/11/19  |
|  2018/11/18     |   2020/11/18       |    2021/11/18     |  2022/12/19  |
|  2018/11/19     |   2020/11/19       |    2021/11/19     |              |
|  2018/11/20     |   2020/11/20       |    2021/11/20     |              |
|  2018/12/19     |   2020/12/19       |    2021/12/19     |              |
+--------------------------------------+-------------------+--------------+ */

describe('Calculate Age', () => {
  it('set birthday to 10/18/2021 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '10/18/2021' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 11/18/2021 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '11/18/2021' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 11/19/2021 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '11/19/2021' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 12/18/2021 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '12/18/2021' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 11/20/2021 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '11/20/2021' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 11/19/2022 ,the age should be 2', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '11/19/2022' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 12/19/2022 ,the age should be 2', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '12/19/2022' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 10/18/2020 ,the age should be 1', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '10/18/2020' })
    expect(wrapper.vm.calcAge).toEqual(1)
  })

  it('set birthday to 11/18/2020 ,the age should be 1', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '11/18/2020' })
    expect(wrapper.vm.calcAge).toEqual(1)
  })

  it('set birthday to 11/19/2020 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '11/19/2020' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 11/20/2020 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '11/20/2020' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 12/19/2020 ,the age should be 0', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '12/19/2020' })
    expect(wrapper.vm.calcAge).toEqual(0)
  })

  it('set birthday to 10/18/2018 ,the age should be 3', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '10/18/2018' })
    expect(wrapper.vm.calcAge).toEqual(3)
  })

  it('set birthday to 11/18/2018 ,the age should be 3', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '11/18/2018' })
    expect(wrapper.vm.calcAge).toEqual(3)
  })

  it('set birthday to 11/19/2018 ,the age should be 2', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '11/19/2018' })
    expect(wrapper.vm.calcAge).toEqual(2)
  })

  it('set birthday to 11/20/2018 ,the age should be 2', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '11/20/2018' })
    expect(wrapper.vm.calcAge).toEqual(2)
  })

  it('set birthday to 12/19/2018 ,the age should be 2', () => {
    const wrapper = shallowMount(Age)
    wrapper.setData({ birthday: '12/19/2018' })
    expect(wrapper.vm.calcAge).toEqual(2)
  })
})

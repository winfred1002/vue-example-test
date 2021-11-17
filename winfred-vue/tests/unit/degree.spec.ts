import { shallowMount } from '@vue/test-utils'
import Degree from '@/views/Degree.vue'

describe('Convert celsius and fahrenheit ', () => {
  it(' Degree F set to 32°F, Degree C is map to 0°C  ', () => {
    const wrapper = shallowMount(Degree)
    wrapper.setData({ userInput: 32 })
    expect(wrapper.vm.showFahrenheitToCelsius).toBe(0)
  })

  it(' Degree F set to -13°F, Degree C is map to -25°C  ', () => {
    const wrapper = shallowMount(Degree)
    wrapper.setData({ userInput: -13 })
    expect(wrapper.vm.showFahrenheitToCelsius).toBe(-25)
  })

  it(' Degree C set to 0°F, Degree F is map to 32°F  ', () => {
    const wrapper = shallowMount(Degree)
    wrapper.setData({ userInput: 0 })
    expect(wrapper.vm.showCelsiusToFahrenheit).toBe(32)
  })

  it(' Degree C set to -10°C, Degree F is map to 14°F  ', () => {
    const wrapper = shallowMount(Degree)
    wrapper.setData({ userInput: -10 })
    expect(wrapper.vm.showCelsiusToFahrenheit).toBe(14)
  })

  it(' Degree C set to 20°C, Degree F is map to 68°F  ', () => {
    const wrapper = shallowMount(Degree)
    wrapper.setData({ userInput: 20 })
    expect(wrapper.vm.showCelsiusToFahrenheit).toBe(68)
  })
})

describe('Checkbox the toggleTemperature ', () => {
  it(' Checked the toggleTemperature action, the isCelsius is true', () => {
    const wrapper = shallowMount(Degree, {
      data () {
        return {
          userInput: 0,
          isCelsius: false
        }
      }
    })
    const checkBoxes = wrapper.find('#toggleTemperature')
    checkBoxes.trigger('click')
    expect(wrapper.vm.isCelsius).toBe(true)
    // clear
    checkBoxes.trigger('change')
  })

  it(' No checked the toggleTemperature action,the isCelsius is false', () => {
    const wrapper = shallowMount(Degree, {
      data () {
        return {
          userInput: 0,
          isCelsius: false
        }
      }
    })
    expect(wrapper.vm.isCelsius).toBe(false)
  })
})

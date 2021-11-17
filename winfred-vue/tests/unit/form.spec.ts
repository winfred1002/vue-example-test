import { shallowMount } from '@vue/test-utils'
import Form from '@/views/Form.vue'

describe('Form Table Test', () => {
  it('name in text field', async () => {
    const wrapper = shallowMount(Form)
    const textInput = wrapper.find('#name')
    await textInput.setValue('King')
    expect(wrapper.vm.name).toBe('King')
  })

  it('Normal Email in mail field', async () => {
    const wrapper = shallowMount(Form)
    const mailInput = wrapper.find('#email')
    await mailInput.setValue('sss@www.com.tw')
    expect(wrapper.vm.email).toBe('sss@www.com.tw')
  })
})

describe('validEmail Format Check', () => {
  it('when input address is null string , the validEmail result is false', async () => {
    const wrapper = shallowMount(Form)
    const testMail = ''
    expect(wrapper.vm.validEmail(testMail)).toBe(false)
  })
  it('when input address is ssss , the validEmail result is false', async () => {
    const wrapper = shallowMount(Form)
    const testMail = 'ssss'
    expect(wrapper.vm.validEmail(testMail)).toBe(false)
  })

  it('when input address is ssss@1223.2 , the validEmail result is false', async () => {
    const wrapper = shallowMount(Form)
    const testMail = 'ssss@1223.2'
    expect(wrapper.vm.validEmail(testMail)).toBe(false)
  })

  it('when input address is ssss@aa.b , the validEmail result is false', async () => {
    const wrapper = shallowMount(Form)
    const testMail = 'ssss@aa.b'
    expect(wrapper.vm.validEmail(testMail)).toBe(false)
  })

  it('when input address is ssss@aa.bb , the validEmail result is true', async () => {
    const wrapper = shallowMount(Form)
    const testMail = 'ssss@aa.bb'
    expect(wrapper.vm.validEmail(testMail)).toBe(true)
  })

  it('when input address is ssss@11.22 , the validEmail result is true', async () => {
    const wrapper = shallowMount(Form)
    const testMail = 'ssss@11.22'
    expect(wrapper.vm.validEmail(testMail)).toBe(false)
  })

  it('when input address is ssss@company.com , the validEmail result is true', async () => {
    const wrapper = shallowMount(Form)
    const testMail = 'ssss@company.com'
    expect(wrapper.vm.validEmail(testMail)).toBe(true)
  })

  it('when input address is s1234567@company.com , the validEmail result is true', async () => {
    const wrapper = shallowMount(Form)
    const testMail = 's1234567@company.com'
    expect(wrapper.vm.validEmail(testMail)).toBe(true)
  })
})

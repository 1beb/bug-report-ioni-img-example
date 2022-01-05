import { mount } from '@vue/test-utils'
import Tab1Page from '@/views/Tab1Page.vue'

describe('Tab1Page.vue', () => {
  it('renders tab 1 Tab1Page', () => {
    const wrapper = mount(Tab1Page, { propsData: { name: "hello", img: "https://picsum.photos/200/300" }})
    expect(wrapper.text()).toMatch('Tab 1 page')
    console.log(wrapper.html())
  })
})

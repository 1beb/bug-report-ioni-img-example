import { mount } from '@vue/test-utils'
import ExploreContainer from '@/components/ExploreContainer.vue'

describe('Tab1Page.vue', () => {
  it('renders tab 1 Tab1Page', () => {
    const wrapper = mount(ExploreContainer, { propsData: { name: "hello", img: "https://picsum.photos/200/300" }})
    expect(wrapper.text()).toMatch('hello')
    console.log(wrapper.html())
    console.log(wrapper.props())
  })
})

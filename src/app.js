import Vue from  'vue'
import Button from './button'
import Icon from './svg'
import buttonGroup from './buttonGroup'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',buttonGroup)

new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:false,
    loading3:false,
  }
})


//单元测试
import chai from 'chai'
import  spies from 'chai-spies'
const {expect} = chai
chai.use(spies)

{
  const Constructor = Vue.extend(Button)
  // console.log(Constructor)
  const vm = new Constructor({
    propsData:{
      icon:'settings'
    }
  })
  vm.$mount()
  // console.log(vm)
  // console.log(vm.$el)
  let useElement = vm.$el.querySelector('use')
  // expect(useElement.getAttribute('xlink:href')).to .eq('settings')
  expect(useElement.getAttribute('xlink:href')).to .eq('#i-settings')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})

  vm.$on('click', spy)
  // 希望这个函数被执行
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}
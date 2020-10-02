import Vue from  'vue'
import Button from './button'
import Icon from './Icon'
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
const {expect} = chai
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
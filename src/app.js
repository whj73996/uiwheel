import Vue from  'vue'
import Button from './button'
import Icon from './Icon'
import buttonGroup from './buttonGroup'
import input from './input'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',buttonGroup)
Vue.component('g-input',input)

new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:false,
    loading3:false,
  },
  methods:{
    inputChange(e){
      console.log(e.target.value)
    }
  }
})

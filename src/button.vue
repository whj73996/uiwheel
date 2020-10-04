<template>
  <button class="g-button hhh" :class="{[`icon-${iconPosition}`]:true}" @click="(e)=>{$emit('click');e.disabled=true} ">
    <g-icon v-if="loading" icon="loading" class="loading icon"></g-icon>
    <g-icon v-if="icon && !loading" :icon="icon" class="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from './Icon'

  export default {
    components:{
      'g-icon':Icon
    },
    props:{
      loading:{
        type: Boolean,
        default: false
      },
      icon:{},
      iconPosition:{
        type:String,
        default:'left',
        validator(x){
          return x==='left' || x==='right'
        }
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @keyframes spin {
    0%{
      transform:rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }



  .g-button{

    .loading{
      animation: spin 1.6s infinite linear;
    }

    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border:1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    > .icon{
      order: 1;
      margin-right: .1em;
    }
    > .content{
      order: 2;
    }

    &.icon-right{
      > .icon{
        order: 2;
        margin-left: .1em;
        margin-right: 0;
      }
      .content{
        order: 1;
      }
    }

    &:hover{
      border-color: var(--border-color-hover);
    }
    &:active{
      background-color: var(--button-active-bg);
    }
    &:focus{
      outline: none ;
    }
  }

</style>
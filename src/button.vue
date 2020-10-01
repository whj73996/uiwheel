<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg class="icon" v-if="icon" >
      <use :xlink:href="`#i-${icon}`">

      </use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    props:{
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
  .icon{
    width: 1em;
    height: 1em;
  }
  .g-button{
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
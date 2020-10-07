<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" :disabled="disabled" :readonly="readOnly">
    <template v-if="error">
      <icon icon="error" class="icon-error"></icon>
      <span class="icon-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './Icon'
  export default {
    name: 'Gulu-input',
    props: {
      value:{
        type:String
      },
      disabled:{
        type: Boolean,
        default:false
      },
      readOnly:{
        type:Boolean,
        default: false
      },
      error:{
        type:String,
      }
    },
    components: {
      Icon,
    },

  }
</script>

<style type="text/scss" lang="scss" scoped>
  $height:32px;
  $border-color:#999;
  $border-color-hover:#666;
  $border-radius:4px;
  $font-size:12px;
  $box-shadow-color:rgba(0,0,0,.5);
  $red:#f1453d;
  .wrapper{
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    :not(:last-child){
      margin-right: 0.5em;
    }
    > input{
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-style: inherit;
      &:hover{
        border-color:$border-color-hover ;
      }
      &:focus{
        box-shadow: inset 0 0 2px $box-shadow-color;
        outline: none;
      }
      &[disabled]{
        border: 1px solid #aaa;
        color: #aaa;
      }
    }
    &.error{
      > input{
        border-color: $red;
      }
    }
    & .icon-error{
      fill: $red;
    }
    & .icon-message{
      color: red;
    }
  }
</style>
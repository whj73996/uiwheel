<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Gulu-button-group',
    props: [],
    components: {},
    mounted() {
      for(let k of this.$el.children){
        let name = k.nodeName.toLowerCase()
        if(name!=='button'){
          console.warn(`button-group的子元素必须是button,不建议使用${name}`)
        }
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .g-button-group{
    display: inline-block;
    border-radius: 0;
    vertical-align: middle;
    > .g-button{
      border-radius: 0;

      &:not(:first-child){
        margin-left: -1px;
      }

      &:first-child{
        border-bottom-left-radius: var(--border-radius);
        border-top-left-radius: var(--border-radius);
      }
      &:last-child{
        border-bottom-right-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
      }

      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
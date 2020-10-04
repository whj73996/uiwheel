<template>
    <svg class="icon" v-if="icon" >
      <use :xlink:href="`#i-${icon}`">
      </use>
    </svg>
</template>

<script>
  import './svg.js'
  export default {
    name: 'icon',
    props: ['icon'],
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .icon{
    width: 1em;
    height: 1em;
  }
</style>
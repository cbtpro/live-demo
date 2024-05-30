<template>
  <div class="nav-list">
    <slot name="default"></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'nav-list',
})
</script>

<style lang="less" scoped>
.nav-list {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  column-gap: 12px;
  padding: 0 0 32px;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  .more-button {
    position: absolute;
    top: 0px;
    right: 0px;
  }
}
</style>

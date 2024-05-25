<template>
  <div class="nav-list">
    <slot name="default"></slot>
  </div>
</template>

<style lang="less" scoped>
.nav-list {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  column-gap: 12px;
  padding: 0 0 32px;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

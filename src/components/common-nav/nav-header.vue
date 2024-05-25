<template>
  <div class="nav-header">
    <slot name="prefix"></slot>
    <div class="title">{{ title }}</div>
    <slot name="suffix"></slot>
  </div>
</template>

<script name="nav-header" setup lang="ts">
interface IProps {
  title?: string
}
const props = withDefaults(defineProps<IProps>(), {
  title: '标题',
})
</script>

<style lang="less" scoped>
.nav-header {
  width: 750px;
  height: 92px;
  display: flex;
  align-items: center;
  .title {
    margin-left: 24px;
    font-size: 32px;
    color: #292a2d;
    letter-spacing: 0;
    // line-height: 44px;
    font-weight: 600;
  }
  .other {
  }
}
</style>

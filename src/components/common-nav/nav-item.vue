<template>
  <div class="nav-item">
    <div class="cover">
      <van-icon :name="icon" size="36" />
    </div>
    <div class="text">
      <div class="inner two-line-ellipsis">{{ title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  icon?: string
  title?: string
}
defineOptions({
  name: 'nav-item',
})
const props = withDefaults(defineProps<IProps>(), {
  icon: 'apps-o',
  title: '标题',
})
</script>

<style lang="less" scoped>
.nav-item {
  width: 326px;
  height: 108px;
  background: #f8f9fc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: row;
  .cover {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    width: 72px;
    height: 72px;
    // border: 1.17px solid rgba(239, 242, 246, 1);
    border-radius: 11.67px;
    // background-color: #fff;
  }
  .text {
    margin-left: 14px;
    display: flex;
    align-items: center;
    width: 208px;
    height: 68px;
    .inner {
      font-size: 26px;
      color: #292a2d;
      letter-spacing: 0;
      line-height: 34px;
      font-weight: 500;
    }
  }
}
</style>

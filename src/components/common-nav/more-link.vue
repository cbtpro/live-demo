<template>
  <div class="more-link">
    <div class="inner">
      <div class="text">{{ text }}</div>
      <van-icon name="arrow" class="icon" />
    </div>
  </div>
</template>

<script name="more-link" setup lang="ts">
interface IProps {
  text?: string
}
const props = withDefaults(defineProps<IProps>(), {
  text: '查看更多',
})
</script>

<style lang="less" scoped>
.more-link {
  display: flex;
  align-items: center;
  height: 100%;
  color: #3981f4;
  .inner {
    display: flex;
    align-items: center;
    height: 100%;
    .text {
      // font-family: PingFangSC-Regular;
      font-size: 24px;
      letter-spacing: 0;
      // text-align: right;
      font-weight: 400;
    }
    .icon {
      margin-left: 4px;
      font-size: 16px;
    }
  }
}
</style>

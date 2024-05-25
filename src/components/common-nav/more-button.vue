<template>
  <div class="more-button">
    <div class="text">{{ text }}</div>
  </div>
</template>

<script name="more-button" setup lang="ts">
interface IProps {
  text?: string
}

const props = withDefaults(defineProps<IProps>(), {
  text: '查看更多',
})
</script>

<style lang="less" scoped>
.more-button {
  width: 62px;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -1.06667vw 0 0.8vw -0.4vw rgba(0, 0, 0, 0.1);
  .text {
    width: 22px;
    // font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #3981f4;
    letter-spacing: 0;
    text-align: center;
    line-height: 24px;
    font-weight: 400;
  }
}
</style>

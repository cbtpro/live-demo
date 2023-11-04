<template>
  <div class="demo1">
    <div class="detail-info">
      <div class="row">
        <div class="column">
          <div class="label">字段：</div>
          <div class="value">属性2</div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="label">字段：</div>
          <div class="value">属性1</div>
        </div>
        <div class="column">
          <div class="label">字段：</div>
          <div class="value">属性2</div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="label">字段：</div>
          <div class="value">属性2</div>
        </div>
        <div class="column">
          <div class="label">字段：</div>
          <div class="value">属性2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'demo1',
})
</script>

<style lang="less" scoped>
.demo1 {
  .detail-info {
    padding: 0 16px;
    width: 712px;
    height: 236px;
    border-radius: 12px;
    background: #f8f9fa;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    line-height: 34px;
    font-weight: 400;
    border: 1px solid #f8f9fa;
    .row {
      margin-top: 16px;
      display: flex;
      align-items: center;
      .column {
        width: 346px;
        display: flex;
        align-items: center;
        .label {
          color: #a8b0bc;
        }
        .value {
          color: #63656a;
        }
      }
    }
  }
}
</style>

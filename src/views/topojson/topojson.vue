<template>
  <div class="view-topojson">
    <d3-topo-json />
  </div>
</template>

<script setup lang="ts">
import d3TopoJson from '@/components/d3-topo-json/d3-topo-json.vue'
defineOptions({
  name: 'view-topojson',
})
</script>

<style lang="less" scoped>
.view-topojson {
  color: red;
}
</style>

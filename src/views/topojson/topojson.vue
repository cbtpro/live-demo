<template>
  <div class="view-topojson">
    <d3-topo-json :data="topoJSON" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import d3TopoJson from '@/components/d3-topo-json/d3-topo-json.vue'
import d3TopoJson from '@/components/d3-topo-json/d3-topo-json'

const getJSONUrl = (fileName: string) => {
  const url = `../../assets/${fileName}`
  return new URL(url, import.meta.url).href
}
const topoJSON = ref<Topo.TopoJSON>(null)

onMounted(async () => {
  const url = getJSONUrl('topojson.json')
  const response = await fetch(url)
  const data = await response.json()
  topoJSON.value = data
})
defineOptions({
  name: 'view-topojson',
})
</script>

<style lang="less" scoped>
.view-topojson {
  color: red;
}
</style>

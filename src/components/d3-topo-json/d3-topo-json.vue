<template>
  <div class="d3-topo-json">
    <div ref="topoRef">svg</div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import d3 from 'd3'

defineOptions({
  name: 'd3-topo-json',
})

interface ITopjsonProps {
  data: Topo.TopoJSON
}
const props = withDefaults(defineProps<ITopjsonProps>(), {})

const topoRef = ref<HTMLDivElement>()

const topoEl = computed(() => {
  return topoRef.value
})
onMounted(() => {
  if (topoEl) {
    initSvg()
  }
})

onUnmounted(() => {
  if (topoEl) {
    destorySvg()
  }
})

const initSvg = () => {}

const destorySvg = () => {}
</script>

<style lang="less" scoped>
.d3-topo-json {
  color: red;
}
</style>

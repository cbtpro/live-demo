<template>
  <div :class="$style['d3-topo-json']">
    <div ref="topoRef" id="d3-svg" :class="$style['d3-svg']"></div>
  </div>
</template>

<script setup lang="ts">
import * as d3 from 'd3'
import { computed, onMounted, onUnmounted, ref, toRefs, watch } from 'vue'

defineOptions({
  name: 'd3-topo-json',
})

interface ITopjsonProps {
  data: Topo.TopoJSON
}
const props = withDefaults(defineProps<ITopjsonProps>(), {
  data: null,
})

const topoRef = ref<HTMLDivElement>()

const topoEl = computed(() => {
  return topoRef.value
})
onMounted(() => {
  initSvg()
})

onUnmounted(() => {
  if (topoEl) {
    destorySvg()
  }
})

const { data } = toRefs(props)
watch(data, (value, oldValue) => {
  if (!value) {
    destorySvg()
  } else if (value !== oldValue) {
    initSvg()
  }
})

const d3Container = ref<HTMLDivElement>()
const root = ref<SVGElement>()

const renderRootNode = () => {
  const rootD3Obj = root.value
  if (!rootD3Obj) {
    return
  }
  if (!data.value) {
    return
  }
  const {
    name,
    theme_code,
    children,
    companyNum,
    childrenCompanyNum,
    nodeNum,
    dataPoints,
    order,
  } = data.value
  rootD3Obj.append('g').attr('id', 'root-node')
  rootD3Obj
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 50)
    .attr('fill', '#FFA4808')
  rootD3Obj
    .append('text')
    .attr('y', () => {
      return (3 / 8) * 16 - 10
    })
    .attr('text-anchor', 'middle')
    .attr('fill', '#fff')
    .style('font-weight', 600)
    .text(() => {
      return name
    })
}
const initSvg = () => {
  if (topoEl) {
    d3Container.value = d3.select('#d3-svg')
    root.value = d3Container.value
      .append('svg')
      .attr('width', 800)
      .attr('height', 600)
      .style('background-color', '#e7e7e7')
    console.log(Date.now())
  }
}

const destorySvg = () => {
  if (topoEl) {
    if (d3Container.value) {
      d3Container.value.removeChild()
    }
  }
}
</script>

<style lang="less" module>
.d3-topo-json {
  color: red;
}
.d3-svg {
  width: 800px;
  height: 600px;
}
</style>

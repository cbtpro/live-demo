<template>
  <div class="view-v-html">
    <v-html></v-html>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import VHtml from '@/components/v-html/index.vue'

defineOptions({
  name: 'view-topojson',
})
</script>

<style lang="less" scoped>
.view-v-html {
  color: red;
}
</style>

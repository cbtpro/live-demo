<script setup lang="ts">
defineOptions({
  name: 'color-sequence',
})
const colors = [
  'rgb(128, 243, 31)',
  'rgb(165, 222, 11)',
  'rgb(199, 193, 1)',
  'rgb(227, 158, 3)',
  'rgb(246, 120, 15)',
  'rgb(254, 83, 38)',
  'rgb(251, 50, 68)',
  'rgb(237, 24, 104)',
  'rgb(213, 7, 142)',
  'rgb(182, 1, 179)',
  'rgb(145, 6, 211)',
  'rgb(107, 22, 236)',
  'rgb(71, 47, 250)',
  'rgb(40, 80, 254)',
  'rgb(17, 117, 247)',
  'rgb(3, 155, 229)',
  'rgb(1, 190, 202)',
  'rgb(10, 220, 168)',
  'rgb(29, 242, 131)',
  'rgb(58, 253, 93)',
  'rgb(92, 253, 58)',
  'rgb(130, 242, 30)',
  'rgb(167, 221, 10)',
  'rgb(201, 191, 1)',
  'rgb(228, 156, 3)',
  'rgb(247, 118, 16)',
  'rgb(254, 81, 39)',
  'rgb(251, 48, 70)',
  'rgb(236, 22, 106)',
  'rgb(212, 6, 144)',
  'rgb(180, 1, 181)',
  'rgb(143, 6, 213)',
]
const colors1 = [
  'rgb(128, 243, 31)',
  'rgb(243, 92, 58)',
  'rgb(31, 58, 91)',
  'rgb(92, 253, 126)',
  'rgb(253, 32, 162)',
  'rgb(58, 126, 195)',
  'rgb(59, 224, 222)',
  'rgb(253, 2, 242)',
  'rgb(91, 195, 253)',
  'rgb(32, 165, 254)',
  'rgb(243, 11, 244)',
  'rgb(126, 242, 226)',
  'rgb(12, 94, 199)',
  'rgb(224, 57, 167)',
  'rgb(162, 254, 132)',
  'rgb(2, 34, 96)',
  'rgb(198, 124, 63)',
  'rgb(195, 226, 35)',
  'rgb(2, 2, 14)',
  'rgb(165, 193, 3)',
  'rgb(222, 167, 1)',
  'rgb(11, 10, 9)',
  'rgb(130, 241, 27)',
  'rgb(242, 96, 53)',
  'rgb(30, 55, 85)',
  'rgb(94, 254, 120)',
  'rgb(253, 35, 155)',
  'rgb(57, 122, 189)',
  'rgb(61, 227, 217)',
  'rgb(254, 3, 239)',
  'rgb(89, 191, 252)',
  'rgb(34, 169, 254)',
]
const colors2 = [
  'rgb(128, 128, 128)',
  'rgb(165, 165, 165)',
  'rgb(199, 199, 199)',
  'rgb(227, 227, 227)',
  'rgb(246, 246, 246)',
  'rgb(254, 254, 254)',
  'rgb(251, 251, 251)',
  'rgb(237, 237, 237)',
  'rgb(213, 213, 213)',
  'rgb(182, 182, 182)',
  'rgb(145, 145, 145)',
  'rgb(107, 107, 107)',
  'rgb(71, 71, 71)',
  'rgb(40, 40, 40)',
  'rgb(17, 17, 17)',
  'rgb(3, 3, 3)',
  'rgb(1, 1, 1)',
  'rgb(10, 10, 10)',
  'rgb(29, 29, 29)',
  'rgb(58, 58, 58)',
  'rgb(92, 92, 92)',
  'rgb(130, 130, 130)',
  'rgb(167, 167, 167)',
  'rgb(201, 201, 201)',
  'rgb(228, 228, 228)',
  'rgb(247, 247, 247)',
  'rgb(254, 254, 254)',
  'rgb(251, 251, 251)',
  'rgb(236, 236, 236)',
  'rgb(212, 212, 212)',
  'rgb(180, 180, 180)',
  'rgb(143, 143, 143)',
]
const colors3 = [
  'rgb(192, 245, 249)',
  'rgb(210, 252, 238)',
  'rgb(227, 254, 224)',
  'rgb(241, 251, 207)',
  'rgb(250, 242, 188)',
  'rgb(254, 229, 169)',
  'rgb(253, 213, 153)',
  'rgb(246, 194, 140)',
  'rgb(234, 175, 132)',
  'rgb(218, 158, 129)',
  'rgb(200, 144, 131)',
  'rgb(182, 134, 139)',
  'rgb(164, 129, 152)',
  'rgb(148, 130, 168)',
  'rgb(137, 136, 186)',
  'rgb(130, 147, 205)',
  'rgb(129, 162, 223)',
  'rgb(133, 180, 237)',
  'rgb(143, 199, 248)',
  'rgb(157, 217, 254)',
  'rgb(174, 233, 254)',
  'rgb(193, 245, 248)',
  'rgb(211, 252, 238)',
  'rgb(228, 254, 223)',
  'rgb(242, 251, 206)',
  'rgb(251, 242, 187)',
  'rgb(254, 228, 168)',
  'rgb(253, 212, 152)',
  'rgb(245, 193, 139)',
  'rgb(233, 174, 131)',
  'rgb(217, 157, 129)',
  'rgb(199, 143, 131)',
]
</script>

<template>
  <div class="color-sequence">
    <div class="block">
      <div
        v-for="color in colors"
        :key="color"
        :style="{ color: color }"
        class="color-block"
      >
        █
      </div>
    </div>
    <div class="block">
      <div
        v-for="color in colors1"
        :key="color"
        :style="{ color: color }"
        class="color-block"
      >
        █
      </div>
    </div>
    <div class="block">
      <div
        v-for="color in colors3"
        :key="color"
        :style="{ color: color }"
        class="color-block"
      >
        █
      </div>
    </div>
    <div class="block">
      <div
        v-for="color in colors3"
        :key="color"
        :style="{ color: color }"
        class="color-block"
      >
        █
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.color-sequence {
  .block {
    display: flex;
    .color-block {
      font-size: 28px;
      // width: 64px;
      // height: 64px;
    }
  }
}
</style>

<script setup lang="ts">
defineOptions({
  name: 'v-html',
})
const TYPE = {
  ENTERPRISE: 'enterprise',
  PERSON: 'person',
}

const htmlText = [
  // 匹配到企业id，href和target不用写，这里只是用来表达js阻止了a链接的默认跳转
  '<a data-type="enterprise" data-eid="1111" data-name="xxx公司" href="https://wwww.baidu.com" target="_blank">xxx公司</a>',
  '<a data-type="enterprise" data-eid="333" data-name="bbb公司" href="https://wwww.baidu.com" target="_blank">bbb公司</a>',
  // 匹配到用户id
  '<a data-type="person" data-pid="2222" data-name="王某某" href="https://wwww.baidu.com" target="_blank">王某某</a>',
  // 没有匹配到用户id
  '<a data-type="person" data-pid="" data-name="李某某">李某某</a>',
]
const htmlStr = htmlText.join('')

const personClickHandle = (dataset: DOMStringMap) => {
  const { pid, name } = dataset
  // 根据参数判断是拼装路由，是否跳转、新开
  console.log(pid, name)
}
const enterpriseClickHandle = (dataset: DOMStringMap) => {
  const { eid, name } = dataset
  // 根据参数判断是拼装路由，是否跳转、新开
  console.log(eid, name)
}
const reportClickHandle = (evt: MouseEvent) => {
  evt.preventDefault()
  const { target } = evt
  const { dataset } = target as HTMLElement
  const keys = Object.keys(dataset)
  if (!keys.includes('type')) {
    return
  }
  const type = dataset['type']
  if (type === TYPE.ENTERPRISE) {
    enterpriseClickHandle(dataset)
  } else if (type === TYPE.PERSON) {
    personClickHandle(dataset)
  }
}
</script>

<template>
  <div class="demo">
    <div v-html="htmlStr" @click="reportClickHandle" class="report-html"></div>
  </div>
</template>

<style lang="less" scoped>
.demo {
  :deep(.report-html) {
    a {
      text-decoration: none;
    }

    a[data-eid]:not([data-eid='']):hover,
    a[data-pid]:not([data-pid='']):hover {
      color: #1864dc;
    }

    a[data-type='enterprise'] {
      color: #3981f4;
    }

    a[data-type='person'] {
      color: #3981f4;
    }

    a[data-type='person'] {
      color: #3981f4;
    }

    a[data-pid=''] {
      color: #000;
    }
  }
}
</style>

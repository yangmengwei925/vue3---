<template>
  <div class="list">
    <cons-item
      title="明日日期"
      :content="data.datetime"
    />
    <cons-item
      title="配对星座"
      :content="data.QFriend"
    />
    <cons-item
      title="幸运颜色"
      :content="data.color"
    />
    <cons-item
      title="幸运数字"
      :content="data.number"
    />
  </div>
</template>

<script>

import ConsItem from '@/components/Common/ConsItem';

export default {
  name: 'TomorrowList',
  components: {
    ConsItem
  },
  props: {
    data: Object
  }
}
</script>

<style scoped>
  .list {
    padding: .15rem .1rem;
    box-sizing: border-box;
  }
</style>
<template>
  <div class="list">
    <cons-item
      title="所在年份"
      :content="data.date"
    />
    <cons-item
      title="幸运石头"
      :content="data.luckeyStone"
    />
  </div>
</template>

<script>

import ConsItem from '@/components/Common/ConsItem';

export default {
  name: 'YearList',
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
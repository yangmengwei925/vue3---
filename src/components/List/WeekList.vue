<template>
  <div class="list">
    <cons-item
      title="本周日期"
      :content="data.date"
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

<style lang="scss" scoped>
  .list {
    padding: .15rem .1rem;
    box-sizing: border-box;
  }
</style>
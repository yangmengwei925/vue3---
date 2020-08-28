<template>
  <div class="num-list">
    <num-item
      bgColor="#FFFACD"
      title="健康"
      :itemIndex="data.health"
    />
    <num-item
      bgColor="#F0FFFF"
      title="工作"
      :itemIndex="data.work"
    />
    <num-item
      bgColor="#FFF5EE"
      title="爱情"
      :itemIndex="data.love"
    />
    <num-item
      bgColor="#FFF8DC"
      title="财运"
      :itemIndex="data.money"
    />
  </div>
</template>

<script>

import NumItem from '@/components/Common/NumItem';

export default {
  name: 'NumList',
  props: {
    data: Object
  },
  components: {
    NumItem
  }
}
</script>

<style lang="scss" scoped>
  .num-list {
    display: flex;
    flex-direction: row;
    margin: .15rem 0;
    padding: .1rem;
    box-shadow: .02rem .02rem .05rem #999;
  }
</style>
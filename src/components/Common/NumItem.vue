<template>
  <div class="num-item" :style='`background: ${bgColor}`'>
    <h1>{{ title }}指数</h1>
    <p>{{ itemIndex || 0 }}</p>
  </div>
</template>

<script>
export default {
  name: 'NumItem',
  props: {
    bgColor: String,
    title: String,
    itemIndex: String
  }
}
</script>

<style lang="scss" scoped>
  .num-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .15rem 0;
    color: #666;

    h1 {
      font-size: .16rem;
    }

    p {
      font-size: .2rem;
      margin-top: .1rem;
    }
  }
</style>
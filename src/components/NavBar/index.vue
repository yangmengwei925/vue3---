<template>
  <div class="nav-bar">
    <div class="scroll-wrapper">
      <div class="nav-wrapper" :style="`width: ${12 * .8}rem`">
        <nav-item
          v-for="(item, index) of navData"
          :key="index"
          :item="item"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>

import NavItem from './Item';
import navData from '@/data/nav';

import { reactive } from 'vue';

export default {
  name: 'NavBar',
  components: {
    NavItem
  },
  setup () {
    const state = reactive({
      navData
    });

    return {
      ...state
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-bar {
    position: fixed;
    top: .44rem;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .38rem;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;

    .scroll-wrapper {
      height: .46rem;
      overflow-x: auto;

      .nav-wrapper {
        display: flex;
        flex-direction: row;
        height: .42rem; 
      }
    }
  }
</style>
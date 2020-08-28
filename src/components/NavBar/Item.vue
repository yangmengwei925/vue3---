<template>
  <div 
    :class="['nav-item', {'nav-current': index === navIndex}]"
    @click="navClick(index, item)"
  >
    <span>{{ item }}</span>
  </div>
</template>

<script>

import { computed } from 'vue';
import { useStore } from 'vuex';

import getData from '@/services';

export default {
  name: 'NavItem',
  props: {
    item: String,
    index: Number
  },
  setup () {
    const store = useStore(),
          state = store.state;

    const navClick = (index, item) => {
      store.commit('setNavIndex', index);
      store.commit('setConsName', item);
      getData(store);
    }
    
    return {
      navIndex: computed(() => state.navIndex),
      navClick
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-item {
    width: .8rem;
    height: 100%;
    font-size: .14rem;
    line-height: .38rem;
    text-align: center;
    color: #666;

    &.nav-current {
      color: #DB7093;
      font-weight: bold;
    }
  }
</style>
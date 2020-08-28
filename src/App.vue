<template>
  <div id="app">
    <my-header />
    <nav-bar />
    <error-tip />
    <router-view v-slot="{ Component }" v-if="!errorCode">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <tab />
  </div>
</template>

<script>

import MyHeader from '@/components/Header';
import Tab from '@/components/Tab';
import NavBar from '@/components/NavBar';
import ErrorTip from '@/components/ErrorTip';

import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import getData from '@/services';

export default {
  name: 'App',
  components: {
    MyHeader,
    Tab,
    NavBar,
    ErrorTip
  },
  setup () {
    const store = useStore(),
          state = store.state,
          router = useRouter();
    
    router.push('/');

    store.commit('setField', 'today');
    
    watch(() => {
      return router.currentRoute.value.name;
    }, (value) => {
      store.commit('setField', value);
    });

    return computed(() => state).value;
  }
}

</script>


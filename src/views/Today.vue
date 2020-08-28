<template>
  <div class="container">
    <cons-card 
      :allIndex="todayData.all"
      :name="todayData.name" 
    />
    <num-list :data="todayData" />
    <cons-list :data="todayData" />
    <cons-summary 
      :content="todayData.summary" 
      field="今日"
    />
  </div>
</template>

<script>

import { onMounted, computed, ref, onActivated } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';

import ConsCard from '@/components/Common/Card';
import ConsList from '@/components/List/TodayList';
import NumList from '@/components/List/NumList';
import ConsSummary from '@/components/Common/Summary';

export default {
  name: 'Today',
  components: {
    ConsCard,
    NumList,
    ConsList,
    ConsSummary
  },
  setup () {
    const store = useStore(),
          state = store.state,
          status = ref(state.consName);

    onMounted(() => {
      getData(store);
      status.value = state.consName;
    });

    onActivated(() => {
      if (status.value !== state.consName) {
        getData(store);
        status.value = state.consName;
      }
    });

    return {
      todayData: computed(() => state.today)
    }
  }
}
</script>

<style>

</style>
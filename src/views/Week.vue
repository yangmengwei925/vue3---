<template>
  <div class="container">
    <cons-card 
      :allIndex="weekData.all"
      :name="weekData.name"
    />
    <cons-list :data="weekData" />
    <cons-summary 
      :content="weekData.work"
      field="工作"
    />
    <cons-summary 
      :content="weekData.job"
      field="学业"
    />
    <cons-summary 
      :content="weekData.love"
      field="恋爱"
    />
    <cons-summary 
      :content="weekData.money"
      field="财运"
    />
  </div>
</template>

<script>
import { onMounted, computed, ref, onActivated } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';

import ConsCard from '@/components/Common/Card';
import ConsList from '@/components/List/WeekList';
import ConsSummary from '@/components/Common/Summary';

export default {
  name: 'Week',
  components: {
    ConsCard,
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
      weekData: computed(() => state.week)
    }
  }
}
</script>

<style>

</style>
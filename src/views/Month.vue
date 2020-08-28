<template>
  <div class="container">
    <cons-card 
      :allIndex="Number(monthData.all)"
      :name="monthData.name"
    />
    <cons-summary 
      :content="monthData.health"
      field="健康"
    />
    <cons-summary 
      :content="monthData.work"
      field="工作"
    />
    <cons-summary 
      :content="monthData.love"
      field="爱情"
    />
    <cons-summary 
      :content="monthData.money"
      field="财运"
    />
    <cons-summary 
      :content="monthData.all"
      field="本月"
    />
  </div>
</template>

<script>
import { onMounted, computed, ref, onActivated } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';

import ConsCard from '@/components/Common/Card';
import ConsSummary from '@/components/Common/Summary';

export default {
  name: 'Month',
  components: {
    ConsCard,
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
      monthData: computed(() => state.month)
    }
  }
}
</script>

<style>

</style>
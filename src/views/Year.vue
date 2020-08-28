<template>
  <div class="container">
    <cons-card 
      :name="yearData.name"
    />
    <cons-list :data="yearData" />
    <cons-summary 
      :content="yearData.health && yearData.health[0]"
      field="健康"
    />
    <cons-summary 
      :content="yearData.career && yearData.career[0]"
      field="事业"
    />
    <cons-summary 
      :content="yearData.love && yearData.love[0]"
      field="爱情"
    />
    <cons-summary 
      :content="yearData.finance && yearData.finance[0]"
      field="财运"
    />
    <cons-summary 
      :content="yearData.mima && `${yearData.mima.info}。${yearData.mima.text[0]}`"
      field="本年"
    />
  </div>
</template>

<script>
import { onMounted, computed, ref, onActivated } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';

import ConsCard from '@/components/Common/Card';
import ConsList from '@/components/List/YearList';
import ConsSummary from '@/components/Common/Summary';

export default {
  name: 'Year',
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
      yearData: computed(() => state.year)
    }
  }
}
</script>

<style>

</style>
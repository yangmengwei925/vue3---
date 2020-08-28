<template>
  <div class="container">
    <cons-card 
      :allIndex="tomorrowData.all"
      :name="tomorrowData.name"
    />
    <cons-list :data="tomorrowData" />
    <cons-summary 
      :content="tomorrowData.summary"
      field="明日"
    />
  </div>
</template>

<script>
import { onMounted, computed, ref, onActivated } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';

import ConsCard from '@/components/Common/Card';
import ConsList from '@/components/List/TomorrowList';
import ConsSummary from '@/components/Common/Summary';

export default {
  name: 'Tomorrow',
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
      tomorrowData: computed(() => state.tomorrow)
    }
  }
}
</script>
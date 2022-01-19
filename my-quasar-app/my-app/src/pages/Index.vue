<template>
  <q-page class="row items-center justify-evenly">
    <TestComponent title="Example component" active :meta="'Hello world'" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TestComponent from '../components/TestComp.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    TestComponent,
  },
  setup() {
    return {};
  },
});
</script>

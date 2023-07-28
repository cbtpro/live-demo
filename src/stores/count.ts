import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCountStore = defineStore('count', () => {
  const count = ref(0);

  return { count };
});

export default useCountStore;

import { createApp } from 'vue'
import App from './ArrayTest.vue'

createApp(App).mount('#app')

// import { computed, ref, watch } from 'vue';

// const ageMajority = 18;

// const x = ref(2);

// const y = computed(() => x.value + 2);
// const z = computed(() => y.value * 2);

// watch(x, () => {
//   localStorage.setItem('x', x.value);
// })

// x.value = 3;

// setTimeout(() => {
//   x.value = 4;
// }, 10000);

// console.log(x.value); // 2
// console.log(y.value); // 4


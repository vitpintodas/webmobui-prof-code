import { useLocalStorage } from "../composables/localStorage.js";
import { ref, watch} from "vue";

export const {value: tasks} = useLocalStorage('tasks', []);

export const page = ref('home');

// two way binding with hash location
window.addEventListener('hashchange', () => {
  page.value = window.location.hash.slice(1);
});
watch(page, (value) => {
  window.location.hash = value;
});

// destructuring

// const obj = {
//   value: 78,
//   foo: 'bar',
// };

// console.log(obj);
// const {foo: truc, value} = obj;
// console.log(truc, value);


// function test1(a = 1, b = 2) {
//   console.log(a, b);
// }

// function test2({a = 1, b = 2}) {
//   console.log(a, b);
// }

// test1(1);
// test2({b: 3});

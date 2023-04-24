import { ref, unref, watch } from 'vue';

export function useFetchJson(url) {

  const data = ref(null);

  async function fetchJson(url) {
    const response = await fetch(url);
    const json = await response.json();
    // TODO manage errors
    data.value = json;
  }

  fetchJson(unref(url));

  // check if url is a ref
  watch(url, () => {
    fetchJson(unref(url));
  });

  return {data};
}
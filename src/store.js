import { reactive } from 'vue';
export const store = reactive({
  //Film
  apiUrl: 'https://api.themoviedb.org/3',
  movies: [],
  series: [],
  queryString: '',
});

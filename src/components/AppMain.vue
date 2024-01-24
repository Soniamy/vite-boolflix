<script>
import { store } from './../store';
export default {
  data() {
    return {
      store,
      title: '',
      original_title: '',
      original_language: '',
      vote_average: '',
    };
  },
  methods: {},
};
</script>

<template>
  <main>
    <div>
      <h1 class="py-3">Film</h1>
      <div v-for="(movie, index) in store.movies" :key="index">
        <h2 class="py-1">{{ movie.title }}</h2>
        <h3 class="py-1">Titolo Originale: {{ movie.original_title }}</h3>
        <span>Lingua: {{ movie.original_language }}</span>
        <div>
          <h4>Voti:{{ movie.vote_average }}</h4>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables.scss' as *;
main {
  background-color: $bg-primary;
  color: white;
}
</style>

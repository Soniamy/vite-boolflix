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
      <h2 class="py-3">Film</h2>
      <div v-for="(movie, index) in store.movies" :key="index">
        <h2 class="py-1">{{ movie.title }}</h2>
        <h3 class="py-1">Titolo Originale: {{ movie.original_title }}</h3>
        <span>Lingua:</span>
        <img
          :src="`flag/language-${movie.original_language}.svg`"
          class="ms-2"
        />
        <div>
          <h4>Voti:{{ movie.vote_average }}</h4>
        </div>
      </div>
      <h2 class="py-3">Serie Tv</h2>
      <div v-for="(serie, index) in store.series" :key="index">
        <h2 class="py-1">{{ serie.name }}</h2>
        <h3 class="py-1">Titolo Originale: {{ serie.original_title }}</h3>
        <span>Lingua:</span>
        <img
          :src="`flag/language-${serie.original_language}.svg`"
          class="ms-2"
        />

        <div>
          <h4>Voti:{{ serie.vote_average }}</h4>
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
img {
  object-fit: contain;
  height: 20px;
  border-radius: 10px;
}
</style>

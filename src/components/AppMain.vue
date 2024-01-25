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
        <div class="front">
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.original_title"
            :title="movie.original_title"
          />
        </div>
        <h2 class="py-1">{{ movie.title }}</h2>
        <h3 class="py-1">Titolo Originale: {{ movie.original_title }}</h3>
        <span>Lingua:</span>
        <img
          :src="`flag/language-${movie.original_language}.svg`"
          class="ms-2"
        />
        <div class="d-flex">
          <h4>Voti:{{ movie.vote_average }}</h4>
          <div class="ms-3">
            <span><i class="fa-solid fa-star" style="color: #f2ca28"></i></span>
          </div>
        </div>
      </div>
      <h2 class="py-3">Serie Tv</h2>
      <div v-for="(serie, index) in store.series" :key="index">
        <div class="front">
          <img
            :src="`https://image.tmdb.org/t/p/w500${serie.poster_path}`"
            :alt="original_title"
            :title="original_title"
          />
        </div>

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
.front {
  height: 100%;

  img {
    object-fit: contain;
    height: 450px;
    border-radius: 10px;
  }
}
</style>

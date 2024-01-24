<script>
import axios from 'axios';
import { store } from './../store';
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    // Richiamo API per Film//
    getApi() {
      axios
        .get(store.apiUrl + '/search/movie', {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjQzZmM1ZGYwMDVmZDkyZWEyYjZiNmM1MTVmNmI5OSIsInN1YiI6IjY1YjBmMjRjOGMzMTU5MDE1MjMyMDdhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.feYBx1PJsz06AJiUl_dndWYUdF_niAlJHAH4EA6hkp0',
          },
          params: {
            query: store.queryString,
          },
        })
        .then((result) => {
          store.movies = result.data.results;
          console.log(store.movie);
        });
    },
  },
};
</script>

<template>
  <header>
    <div>
      <form class="fm-form d-flex al-item-cent" @submit.prevent role="search">
        <input
          class="form-control me-3"
          type="search"
          placeholder="Cerca un film o una serie Tv"
          aria-label="Search"
          v-model="store.queryString"
          @keyup.enter="getApi"
        />
        <button class="btn me-5 text-bg-light" @click="getApi" type="search">
          Cerca
        </button>
      </form>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
header {
  background-color: rgb(0, 0, 0);
  height: 300px;
  .fm-form {
    .form-control {
      width: 250px;
    }
  }
}
</style>

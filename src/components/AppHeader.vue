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
    getMovie() {
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
          console.log(store.movies);
        });
    },
    // Richiamo API per Serie Tv//
    getSeries() {
      axios
        .get(store.apiUrl + '/search/tv', {
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
          store.series = result.data.results;
          console.log(store.series);
        });
    },
    getAll() {
      this.getMovie();
      this.getSeries();
    },
  },
};
</script>

<template>
  <header>
    <div class="d-flex">
      <div class="container-fluid d-flex al-item-cent">
        <img src="../../public/boolflix-logo.png" alt="Logo" />
      </div>
      <form
        class="fm-form d-flex justify-content-center align-items-center"
        @submit.prevent
        role="search"
      >
        <input
          class="form-control me-3"
          type="search"
          placeholder="Cerca un film o una serie Tv"
          aria-label="Search"
          v-model="store.queryString"
          @keyup.enter="getAll"
        />
        <button
          class="btn me-5 mt-5 text-bg-light"
          @click="getAll"
          type="search"
        >
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
  height: 100px;
  .fm-form {
    .form-control {
      width: 250px;
    }
  }
  .container-fluid {
    img {
      width: 150px;
      margin: 1.5rem 0.5rem;
    }
  }
}
</style>

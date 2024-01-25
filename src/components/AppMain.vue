<script>
import { store } from './../store';
import Card from './Card.vue';
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Card,
  },
};
</script>

<template>
  <main>
    <div class="fmcontainer">
      <div class="container-fluid">
        <h2 class="py-3">Film</h2>
        <hr />
        <div class="row row-cols-4 pt-2">
          <Card
            v-for="(movie, index) in store.movies"
            :key="index"
            :video="movie"
            :type="'movie'"
          />
        </div>
      </div>
      <div class="container-fluid">
        <h2 class="py-3">Serie Tv</h2>
        <hr />
        <div class="row row-cols-4">
          <Card
            v-for="(serie, index) in store.series"
            :key="index"
            :video="serie"
            :type="'serie'"
          />
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

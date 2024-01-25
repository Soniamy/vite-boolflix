<script>
import { store } from './../store';
export default {
  name: 'Card',
  data() {
    return {
      store,
    };
  },
  props: {
    video: Object,
  },
  methods: {
    voteAverage(video) {
      return Math.ceil(video.vote_average / 2);
    },
  },
};
</script>

<template>
  <div class="wrapper mb-4">
    <div class="fm-card">
      <div class="front">
        <img
          :src="`https://image.tmdb.org/t/p/w342${video.poster_path}}`"
          :alt="original_title"
          :title="original_title"
        />
      </div>
      <div class="cont-info p-2 d-flex j-cont-cent">
        <div class="info pt-3 al-item-cent">
          <h1 class="py-1">{{ video.title || video.name }}</h1>
          <h2 class="py-1">Titolo Originale: {{ video.original_title }}</h2>
          <span>Lingua:</span>
          <img
            :src="`flag/language-${video.original_language}.svg`"
            class="ms-2"
          />
          <div class="d-flex justify-content-center mt-2">
            <div class="ms-3">
              <span v-for="index in voteAverage(video)" :key="index"
                ><i class="fa-solid fa-star" style="color: #f2ca28"></i
              ></span>
              <span v-for="index in 5 - voteAverage(video)" :key="index"
                ><i class="fa-regular fa-star"></i>
              </span>
            </div>
          </div>
          <div>
            <h4>
              {{ video.overview }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper,
.fm-card {
  position: relative;
}
.wrapper:hover .fm-card {
  transform: rotateY(180deg);
}
.front,
.cont-info {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}
.front {
  cursor: pointer;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.cont-info {
  transform: rotateY(180deg);
  position: absolute;
  height: 100%;
  background: #fff;
}
.info {
  padding-top: 25%;
}

.fm-card {
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  transform-style: preserve-3d;

  img {
    object-fit: contain;
    height: 450px;
    border-radius: 10px;
  }
  .cont-info {
    background-color: black;

    .info {
      min-height: 250px;
      text-align: center;

      h1 {
        font-size: 1.8rem;
        color: red;
        text-align: center;
      }

      h2 {
        font-size: 1rem;
      }
      h4 {
        font-size: 0.8rem;
      }

      img {
        height: 15px;
      }
    }
  }
}
</style>

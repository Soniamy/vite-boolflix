<script>
import axios from 'axios';
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
    type: String,
  },
  methods: {
    voteAverage(video) {
      return Math.ceil(video.vote_average / 2);
    },
    //Chiamata API per i generi movies
    getGenres() {
      axios
        .get(store.apiUrl + '/' + this.type + '/' + this.video.id, {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjQzZmM1ZGYwMDVmZDkyZWEyYjZiNmM1MTVmNmI5OSIsInN1YiI6IjY1YjBmMjRjOGMzMTU5MDE1MjMyMDdhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.feYBx1PJsz06AJiUl_dndWYUdF_niAlJHAH4EA6hkp0',
          },
        })
        .then((result) => {
          this.video['generi'] = result.data.genres;
        });
    },
  },
};
</script>

<template>
  <div class="wrapper mb-4" @mouseenter="getGenres">
    <div class="fm-card">
      <div class="front">
        <img
          v-if="video.poster_path != null"
          :src="`https://image.tmdb.org/t/p/w342${video.poster_path}}`"
          :alt="original_title"
          :title="original_title"
        />
        <img
          v-else
          src="../../public/no-Image-Placeholder.svg.png"
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
            <div class="more-info">
              <p>
                Generi:
                <span v-for="generi in this.video.generi" :key="generi">
                  {{ generi.name }} ,
                </span>
              </p>
            </div>
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
  padding: 10px;
}

.fm-card {
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  transform-style: preserve-3d;

  img {
    object-fit: contain;
    height: 420px;
    border-radius: 10px;
    background-color: #f2f2f2;
  }
  .cont-info {
    background-color: black;

    .info {
      min-height: 250px;
      text-align: center;

      h1 {
        font-size: 1.3rem;
        color: red;
        text-align: center;
        font-weight: bolder;
      }

      h2 {
        font-size: 1rem;
      }
      h4 {
        font-size: 0.7rem;
      }

      img {
        height: 15px;
      }
    }
  }
}
</style>

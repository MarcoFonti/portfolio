<!-- JS -->
<script>

/* IMPORTO DATI PROGETTI */
import { SlidesData } from '../assets/data/index.js'

export default {
  name: 'ProjectsPage',
  data() {
    return {
      SlidesData,
      currentIndex: 0,
      autoplayActive: true, // Variabile di stato per tenere traccia dell'autoplay
      autoplayTimeout: null, // Timeout per riprendere l'autoplay dopo un periodo di inattività
    };

  },

  methods: {
    /* INDIETRO */
    prevSlide() {
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = this.SlidesData.length - 1
      }
      this.stopAutoSlide();
      this.startAutoSlide();
    },

    /* AVANTI */
    nextSlide() {
      this.currentIndex++
      if (this.currentIndex === this.SlidesData.length) {
        this.currentIndex = 0
      }
      this.stopAutoSlide();
      this.startAutoSlide();
    },

    /* AUTOPLAY */
    startAutoSlide() {
      this.autoplayActive = true; // Imposta lo stato dell'autoplay a attivo
      this.autoplayTimeout = setTimeout(() => {
        this.startAutoPlayAfterTimeout();
      }, 5000); // Timeout di 5 secondi per riprendere l'autoplay dopo un periodo di inattività
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },

    startAutoPlayAfterTimeout() {
      if (!this.autoplayActive) {
        this.autoplayActive = true;
        this.autoSlideInterval = setInterval(() => {
          this.nextSlide();
        }, 3000);
      }
    },

    /* STOP AUTOPALY */
    stopAutoSlide() {
      clearTimeout(this.autoplayTimeout);
      clearInterval(this.autoSlideInterval);
      this.autoplayActive = false; // Imposta lo stato dell'autoplay a non attivo
    },
  },

  /* APPENA CREATO IL DOM */
  mounted() {
    this.startAutoSlide();
  },

  /* SAPPENA RIMOSSO DAL DOM */
  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>

<!-- HTML -->
<template>
  <div class="container-project">
    <h1>I MIEI PROGETTI</h1>
    <div class="carosel">
      <div class="carousel-track-container">
        <div class="carousel-track">
          <div class="carousel-slide" v-for="(slide, index) in SlidesData" :key="index" v-show="index === currentIndex">
            <img :src="slide.image" :alt="slide.title" />
            <div class="text">{{ slide.title }}</div>
          </div>
        </div>
      </div>
      <button class="carousel-button prev-button" @click="prevSlide"><font-awesome-icon :icon="['fas', 'circle-arrow-left']" /></button>
      <button class="carousel-button next-button" @click="nextSlide"><font-awesome-icon :icon="['fas', 'circle-arrow-right']" /></button>
    </div>
  </div>
</template>

<!-- CSS -->
<style scoped>
.container-project {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 50px;
  margin-bottom: 20px;
}

.carosel {
  height: 600px;
  width: 75%;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  border: 2px double white;
}

.carousel-track-container {
  position: relative;
  width: 100%;
}

.carousel-track {
  display: flex;
  ;
}

.carousel-slide {
  min-width: 100%;
  display: flex;
  position: relative;
}


.carousel-slide img {
  width: 100%;
  height: 100%;
  display: block;
}

.text {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 22px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  border-radius: 10px;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding:8px;
  border-radius: 50%;
  cursor: pointer;
}

.prev-button {
  left: 10px;
  font-size: 25px;
}

.next-button {
  right: 10px;
  font-size: 25px;
}
</style>
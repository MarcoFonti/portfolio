<!-- JS -->
<script>

/* IMPORTO DATI SKILLS */
import { SkillData } from '../assets/data/index.js'

export default {
  name: 'SkillsPage',
  data() {
    return {
      SkillData // Dati skills
    }
  },
  methods: {
    /* METODO PER VISUALIZZARE IMMAGINI IN PAGINA */
    getImage(imagePath) {
      return new URL(`../assets/img/${imagePath}`, import.meta.url).href;
    }
  }

};

</script>

<!-- HTML -->
<template>
  <!-- TITOLO -->
  <h1 class="title-skill">My Skills</h1>
  <!-- CONTENITORE SKILLS -->
  <div class="container-skill">
    <div class="card" v-for="(element, index) in SkillData" :key="index">
      <img :src="getImage(element.image)" :alt="element.title" class="skill-image" />
      <h3>{{ element.title }}</h3>
    </div>
  </div>
</template>

<!-- CSS -->
<style scoped lang="scss">

/* TITOLO */
.title-skill {
  text-align: center;
  padding-top: 120px;
  font-size: 80px;
}

/* CONTENITORE SKILLS */
.container-skill {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding-top: 50px;
  padding-left: 160px;
  padding-right: 160px;
  padding-bottom: 50px;
}

/* CARD SKILLS */
.card {
  height: 220px;
  width: calc(25% - 20px);
  background-color: rgba(232, 232, 237, 0.37);
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  /* Transizione per il movimento */

  /* HOVER */
  &:hover {
    transform: scale(1.05);
  }

  /* SKILLS */
  h3 {
    z-index: 1;
    color: white;
    font-size: 1em;
    margin-top: 10px;
  }

  /* PRIMA */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(232, 232, 237, 0.37), rgba(232, 232, 237, 0.37));
    animation: rotBGimg 4s linear infinite;
    transition: all 0.2s linear;

    /* ANIMAZIONE */
    @keyframes rotBGimg {

      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }

    }

  }

  /* DOPO */
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background-color: rgb(12, 12, 13);
    border-radius: 15px;
  }

}

/* IMMAGINI */
.skill-image {
  width: 90px;
  object-fit: cover;
  margin-bottom: 10px;
  z-index: 1;
}
</style>
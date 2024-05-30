<!-- JS -->
<script>

/* IMPORTO DATI ESPERIENZE */
import { ExperienceData } from '../assets/data/index.js'

export default {
  name: 'AboutPage',

  data() {
    return {
      ExperienceData, // Dati esperienze
    }
  }

};

</script>

<!-- HTML -->
<template>
  <div class="container">
    <h1 class="title-experience">ESPERIENZE</h1>
    <!-- CICLO SUI DATI DELLE ESPERIENZE -->
    <div v-for="(experience, index) in ExperienceData" :key="experience.index">
      <div class="containar-spacing">
        <div class="square"></div>
        <div class="container-content">
          <div class="line-or"></div>
          <div class="container-full-stack">
            <h2>{{ experience.title }}</h2>
            <address>{{ experience.name }}</address>
            <div class="line"></div>
            <p v-html="experience.content.text"></p>
            <ul class="list">
              <!-- CICLO PER RECUPERARE IL CONTENUTO DELLE ESPERIENZE -->
              <li v-for="(list, index) in experience.content.experiences" :key="list.index">
                <strong>{{ list.titleExperience }}</strong> {{ list.contentExperience }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="image-my"></div>
  </div>
</template>

<!-- CSS -->
<style scoped lang="scss">
/* CONTENITORE */
.container {
  margin-left: 55px;
  display: flex;
  flex-direction: column;
  padding-right: 330px;
  overflow: auto;
  color: rgb(0, 0, 0);
}

/* TITOLO */
.title-experience {
  margin-bottom: 40px;
  margin-top: 120px;
  color: #ffffff;
  font-size: 45px;
}

/* CONTENITORE SPAZIATURA */
.containar-spacing {
  margin-top: 12px;
  margin-left: 65px;
  position: relative;
}

/* QUADRATO */
.square {
  background-color: rgba(232, 232, 237, 0.37);
  width: 20px;
  height: 20px;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: -10px;
  border: 2px double white;
}

/* CONTENITORE CONTENUTO */
.container-content {
  display: flex;
  gap: 20px;
}

/* LINEA DEL TEMPO */
.line-or {
  width: 1px;
  height: 560px;
  background-color: white;
  margin-top: 20px;
}

/* CONTENITORE ESPERIENZE */
.container-full-stack {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  min-height: 560px;
  background-color: rgba(232, 232, 237, 0.605);
  border-radius: 6px;
  padding: 10px;
}

/* DETTAGLI */
address {
  font-size: 18px;
}

/* LINEA SEPARATRICE */
.line {
  width: 400px;
  height: 1px;
  background-color: white;
  margin-bottom: 4px;
}

/* PARAGRAFO */
p {
  font-size: 20px;
}

/* CONTENITORE LISTA */
.list {
  margin-left: 30px;
  margin-top: 4px;
}

/* LISTA */
ul li:not(:last-child) {
  margin-bottom: 10px;
}

/* ELEMENTI LISTA */
strong,
li {
  font-size: 18px;
}

/* IMMAGINE */
.image-my {
  background-image: url(../assets/img/my-photo.png);
  background-size: cover;
  height: 2050px;
  position: absolute;
  width: 1000px;
  right: 0;
  opacity: 0.4;
}
</style>
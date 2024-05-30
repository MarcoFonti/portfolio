<!-- JS -->
<script>

/* IMPORTAZIONE FOOTER */
import AppFooter from '../components/AppFooter.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      title: 'Jr Full Stack Web Developer',
      paragraph: {
        about: `Sono uno sviluppatore web appassionato che ha iniziato a programmare come hobby nel 2022, completando successivamente un corso intensivo di 700 ore presso Boolean.<br>Durante il corso, ho acquisito competenze avanzate in JavaScript, SCSS, HTML, Vue, PHP e Laravel, creando esperienze utente coinvolgenti e intuitive e sviluppando una solida comprensione delle tecnologie sia front-end che back-end.<br>Il mio obiettivo è migliorarmi costantemente e sviluppare applicazioni web di alta qualità, cercando sempre nuove sfide e opportunità per crescere professionalmente.`,
        certificate: `Il corso presso la Boolean Academy mi ha fornito una formazione completa nello sviluppo full-stack, offrendomi competenze approfondite in HTML, CSS, JavaScript, SQL e PHP.<br>Inoltre, ho acquisito esperienza pratica nell'utilizzo di framework come Laravel e Vue.js.`
      },
    }
  },
  components: { AppFooter },
};

</script>

<!-- HTML -->
<template>
  <div class="back-photo">
    <div id="section-title">
      <div class="container-title">
        <div>
          <div class="line"></div>
          <h1 class="title">{{ title }}</h1>
        </div>
        <div class="honeycomb">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div id="section-info">
      <div class="container-about">
        <h3 class="title-about">CHI SONO</h3>
        <p v-html="paragraph.about"></p>
        <div class="info-about">
          <RouterLink :to="{ name: 'about' }">
            <span class="link-about">ULTERIORI INFORMAZIONI</span>
            <div class="bn53"><font-awesome-icon :icon="['fas', 'circle-right']" /></div>
          </RouterLink>
        </div>
      </div>
      <div class="container-certificate">
        <h3 class="title-certificate">CERTIFICATO</h3>
        <div class="container-content-certificate">
          <p v-html="paragraph.certificate"></p>
          <figure>
            <img class="img-certificate" src="../assets/img/certificato-boolean.png" alt="Certificato Boolean">
          </figure>
        </div>
      </div>
    </div>
  </div>
  <!-- FOOTER -->
  <AppFooter />
</template>

<!-- CSS -->
<style scoped>
.container-title {
  display: flex;
  justify-content: space-between;
  padding-right: 50px;

}

#section-title {
  margin-left: 100px;
  margin-top: 80px;
}

.title {
  font-size: 55px;
  width: 400px;
}

.line {
  width: 200px;
  height: 4px;
  background-color: white;
  margin-bottom: 20px;
}

.container-about,
.container-certificate {
  border: 2px solid rgba(255, 255, 255, 0.18);
  width: 500px;
  border-radius: 6px;
  padding: 10px;
  box-shadow: 0px 0px 15px rgba(232, 232, 237, 0.37);
  margin-bottom: 7px;

  &:hover {
    opacity: 7;
    transform: scale(1.10);
  }

}

#section-info {
  display: flex;
  gap: 35px;
  justify-content: center;
  position: absolute;
  bottom: -15px;
  left: 0;
  right: 0;
  bottom: 5px;
  position: absolute;
  z-index: 1;
}

.title-about,
.title-certificate {
  margin-bottom: 6px;
  margin-top: 10px;
}

.info-about {
  font-size: 20px;
  margin-top: 20px;

  a {
    display: flex;
    align-items: center;
  }
}

.link-about {
  margin-right: 10px;
}

.img-certificate {
  width: 150px;
  height: 200px;
  margin-top: 15px;
  transition: all 0.5s ease;
}

.container-content-certificate {
  display: flex;
  gap: 20px;
  align-items: center;
}

.back-photo {
  position: relative;
  background-image: url(../assets/img/photo-background.jpg);
  background-position: center;
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.7);
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0px auto;
  position: relative;
  height: 700px;
  top: 80px;
}

@-webkit-keyframes honeycomb {

  0%,
  20%,
  80%,
  100% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  30%,
  70% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes honeycomb {

  0%,
  20%,
  80%,
  100% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  30%,
  70% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.honeycomb {
  margin-top: 100px;
  position: relative;
  width: 400px;
}

.honeycomb div {
  -webkit-animation: honeycomb 2.1s infinite backwards;
  animation: honeycomb 2.1s infinite backwards;
  background: rgba(255, 255, 255, 0.274);
  height: 72px;
  /* Aumentato a 72px */
  margin-top: 36px;
  /* Aumentato a 36px */
  position: absolute;
  width: 144px;
  /* Aumentato a 144px */
}

.honeycomb div:after,
.honeycomb div:before {
  content: '';
  border-left: 72px solid transparent;
  /* Aumentato a 72px */
  border-right: 72px solid transparent;
  /* Aumentato a 72px */
  position: absolute;
  left: 0;
  right: 0;
}

.honeycomb div:after {
  top: -36px;
  /* Aumentato a -36px */
  border-bottom: 36px solid rgba(255, 255, 255, 0.274);
  /* Aumentato a 36px */
}

.honeycomb div:before {
  bottom: -36px;
  /* Aumentato a -36px */
  border-top: 36px solid rgba(255, 255, 255, 0.274);
  /* Aumentato a 36px */
}

.honeycomb div:nth-child(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  left: -168px;
  /* Aumentato a -168px */
  top: 0;
}

.honeycomb div:nth-child(2) {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
  left: -84px;
  /* Aumentato a -84px */
  top: 132px;
  /* Aumentato a 132px */
}

.honeycomb div:nth-child(3) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
  left: 84px;
  /* Aumentato a 84px */
  top: 132px;
  /* Aumentato a 132px */
}

.honeycomb div:nth-child(4) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
  left: 168px;
  /* Aumentato a 168px */
  top: 0;
}

.honeycomb div:nth-child(5) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
  left: 84px;
  /* Aumentato a 84px */
  top: -132px;
  /* Aumentato a -132px */
}

.honeycomb div:nth-child(6) {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  left: -84px;
  /* Aumentato a -84px */
  top: -132px;
  /* Aumentato a -132px */
}

.honeycomb div:nth-child(7) {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
  left: 0;
  top: 0;
}

.bn53 {
  width: 100px;
  animation: bn53bounce 4s infinite;
  cursor: pointer;
}

@keyframes bn53bounce {

  5%,
  50% {
    transform: scale(1);
  }

  10% {
    transform: scale(1);
  }

  15% {
    transform: scale(1);
  }

  20% {
    transform: scale(1) rotate(-5deg);
  }

  25% {
    transform: scale(1) rotate(5deg);
  }

  30% {
    transform: scale(1) rotate(-3deg);
  }

  35% {
    transform: scale(1) rotate(2deg);
  }

  40% {
    transform: scale(1) rotate(0);
  }
}
</style>
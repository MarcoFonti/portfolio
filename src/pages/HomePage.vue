<!-- JS -->
<script>

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
};

</script>

<!-- HTML -->
<template>
  <div class="back-photo">
    <div id="section-title">
      <div class="line"></div>
      <h1 class="title">{{ title }}</h1>
    </div>
    <div id="section-info">
      <div class="container-about">
        <h3 class="title-about">CHI SONO</h3>
        <p v-html="paragraph.about"></p>
        <div class="info-about">
          <RouterLink :to="{ name: 'about' }">
            <span class="link-about">ULTERIORI INFORMAZIONI</span>
            <font-awesome-icon :icon="['fas', 'circle-right']" />
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
</template>

<!-- CSS -->
<style scoped>
#section-title {
  margin-left: 100px;
  margin-top: 80px;
}

.title {
  font-size: 60px;
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
  width: 450px;
  min-height: 300px;
  border-radius: 6px;
  padding: 10px;
  box-shadow: 0px 0px 15px rgba(227, 228, 237, 0.37);

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
  bottom: 10px;
}

.title-about,
.title-certificate {
  margin-bottom: 6px;
  margin-top: 10px;
}

.info-about {
  font-size: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
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
  background-image: url(../assets/img/photo-background.jpg);
  background-position: center;
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.7);
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 30px auto;
  position: relative;
  height: 700px;
}
</style>
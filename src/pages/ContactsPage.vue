<!-- JS -->
<script>

/* IMPORTAZIONE FOOTER */
import AppFooter from '../components/AppFooter.vue';

/* IMPORTO DATI ESPERIENZE */
import { ContactData } from '../assets/data/index.js'

export default {
  name: 'ContactsPage',
  data() {
    return {
      ContactData, // Dati Contatti
      name: '',
      email: '',
      subject: '',
      formSubmitted: false
    };
  },
  components: { AppFooter },
  methods: {
    sendEmail() {

      /* SE NON CI SONO I CAMPI RICHIESTI */
      if (!this.name || !this.email || !this.subject || !this.email.includes('@')) {
        let errorMessage = "Per favore, compila tutti i campi.\n";

        if (!this.name) {
          errorMessage += "Il campo nome è obbligatorio.\n";
        }

        if (!this.email) {
          errorMessage += "Il campo email è obbligatorio.\n";
        } else if (!this.email.includes('@')) {
          errorMessage += "L'indirizzo email non è valido. Assicurati di includere il simbolo '@'.\n";
        }

        if (!this.subject) {
          errorMessage += "Il campo oggetto è obbligatorio.\n";
        }

        // Mostra un messaggio di errore con i dettagli
        alert(errorMessage);

        this.formSubmitted = true

        /* IL RPIMO CAMPO VUOTO CHE TROVA IMPOSTO IL FOCUS */
        if (!this.name) {
          this.$refs.nameInput.focus();
        } else if (!this.email) {
          this.$refs.emailInput.focus();
        } else if (!this.subject) {
          this.$refs.subjectInput.focus();
        }

        return;
      }

      /* CREO UN SOGETTO CHE SIA VALIDO PER UN URL */
      const encodedSubject = encodeURIComponent(this.subject);
      const encodedBody = encodeURIComponent(`Cordali Saluti, ${this.name}`);
      const mailtoLink = `mailto:marcofonti05@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
      window.location.href = mailtoLink;


      /* SVUOTO CAMPI DOPO L'INVIO */
      this.name = '';
      this.email = '';
      this.subject = '';
    }
  }
};
</script>


<!-- HTML -->
<template>
  <div class="container-page">
    <div class="container-contact">
      <div v-for="(contact, index) in ContactData" :key="index">
        <font-awesome-icon :icon="contact.icon" />
        {{ contact.value }}
      </div>
    </div>
    <div class="card-form">
      <div class="container">
        <form class="form" @submit.prevent="sendEmail" novalidate>
          <div class="form_front">
            <div class="form_details">CONTATTAMI</div>
            <input type="text" class="input" placeholder="Nome" v-model="name" required
              :class="{ 'invalid': formSubmitted && !name }" ref="nameInput">
            <input type="email" class="input" placeholder="Email" v-model="email" required
              :class="{ 'invalid': formSubmitted && (!email || !email.includes('@')) }" ref="emailInput">
            <input type="text" class="input" placeholder="Oggetto" v-model="subject" required
              :class="{ 'invalid': formSubmitted && !subject }" ref="subjectInput">
            <button class="btn" type="submit">Apri Email</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- FOOTER -->
  <AppFooter />
</template>


<!-- CSS -->
<style scoped lang="scss">
.container-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.container-contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 65%;

  div {
    background: rgba(255, 255, 255, 0.128);
    width: 33%;
    padding: 20px 20px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 19px;
    border: 2px double white;
  }
}

.card-form {
  background: rgba(255, 255, 255, 0.128);
  height: 550px;
  width: 70%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px double white;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transition: all 1s ease;
}

.form .form_front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  backface-visibility: hidden;
  padding: 65px 45px;
  border-radius: 15px;
  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
}

.form_details {
  font-size: 25px;
  font-weight: 600;
  padding-bottom: 10px;
  color: white;
}

.input,
.textarea {
  width: 500px;
  color: #fff;
  outline: none;
  transition: 0.35s;
  padding: 0px 7px;
  background-color: #212121;
  border-radius: 6px;
  border: 2px solid #212121;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 1),
    1px 1px 10px rgba(255, 255, 255, 0.6);
}

.input {
  min-height: 45px;
}

.textarea {
  min-height: 100px;
  resize: vertical;
  padding-top: 7px;
}

.input::placeholder,
.textarea::placeholder {
  color: #999;
}

.input:focus.input::placeholder,
.textarea:focus.textarea::placeholder {
  transition: 0.3s;
  opacity: 0;
}

.input:focus,
.textarea:focus {
  transform: scale(1.05);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 1),
    1px 1px 10px rgba(255, 255, 255, 0.6),
    inset 2px 2px 10px rgba(0, 0, 0, 1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
}

.btn {
  padding: 10px 35px;
  cursor: pointer;
  background-color: #212121;
  border-radius: 6px;
  border: 2px solid #212121;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 1),
    1px 1px 10px rgba(255, 255, 255, 0.6);
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  transition: 0.35s;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 1),
    1px 1px 10px rgba(255, 255, 255, 0.6),
    inset 2px 2px 10px rgba(0, 0, 0, 1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
}

.btn:focus {
  transform: scale(1.05);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 1),
    1px 1px 10px rgba(255, 255, 255, 0.6),
    inset 2px 2px 10px rgba(0, 0, 0, 1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
}

.invalid {
  border: 2px solid red;
}
</style>

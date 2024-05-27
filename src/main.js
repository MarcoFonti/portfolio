import { createApp } from 'vue'
import App from './App.vue'
import { router } from './Router/web.js'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* ICONE SOLIDE */
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'

/* BREANDS ICONE */
import { faSquareFacebook, faSquareInstagram, faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons'

/* ICONE REGOLARI */
// import { } from '@fortawesome/free-regular-svg-icon

library.add(faCircleRight, faLinkedin, faSquareGithub, faSquareInstagram, faSquareFacebook)
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);

app.mount('#app');

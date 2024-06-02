import { createApp } from 'vue'
import App from './App.vue'
import { router } from './Router/web.js'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* ICONE SOLIDE */
import { faCircleRight, fas, faLocationDot, } from '@fortawesome/free-solid-svg-icons'
/* BREANDS ICONE */
import { faSquareFacebook, faSquareInstagram, faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons'
/* ICONE REGOLARI */
/* import { } from '@fortawesome/free-regular-svg-icons' */

library.add(faCircleRight, faLinkedin, faSquareGithub, faSquareInstagram, faSquareFacebook, fas, faLocationDot)
const app = createApp(App);
/* COMPONENTE PER ICONE */
app.component('font-awesome-icon', FontAwesomeIcon)
/* ROTTE */
app.use(router);

app.mount('#app');

/* IMPORTAZIONI */
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import ContactsPage from '../pages/ContactsPage.vue';
import ProjectsPage from '../pages/ProjectsPage.vue';
import SkillsPage from '../pages/SkillsPage.vue';

/* ROTTE */ 
const router = createRouter({
    history: createWebHistory(),
    routes: [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/chi-sono', component: AboutPage, name: 'about' },
    { path: '/contatti', component: ContactsPage, name: 'contact' },
    { path: '/progetti', component: ProjectsPage, name: 'project' },
    { path: '/competenze', component: SkillsPage, name: 'skill' },
    { path: '/:pathMatch(.*)*', redirect: '/' } /* ROTTE SCONOSCIUTE */
    ]
})

/* ESPORTAZIONE */
export { router };
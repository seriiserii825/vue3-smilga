import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/scss/my.scss';


/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {faUserSecret, faMagnifyingGlassPlus, faHouse, faUser, faEnvelope, faCircleXmark, faPenToSquare, faTrashCan} from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret, faMagnifyingGlassPlus, faHouse, faUser, faEnvelope, faCircleXmark, faPenToSquare, faTrashCan);

const app = createApp(App);

app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');

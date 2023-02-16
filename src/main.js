import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';

import TheHeader from './components/layouts/TheHeader.vue';
import TheFooter from './components/layouts/TheFooter.vue';
import BaseContent from './components/UI/BaseContent.vue';

const app = createApp(App)

app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);
app.component('base-content', BaseContent );

const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        { path: '/', redirect: '/homepage' },
        { path: '/homepage', component:  BaseContent },
    ],
    linkActiveClass: 'active',
});


app.use(router)

app.mount('#app')

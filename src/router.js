import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Ganadores from './components/Ganadores.vue';
import Jugadores from './components/Jugadores.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '',             component: HelloWorld },
    { path: '/ganadores',   component: Ganadores },
    { path: '/jugadores',   component: Jugadores },
    /* { path: '/formulario',  component: Formulario },
    { path: '/formulario-vue',  component: FormularioVue },
    { path: '/api',  component: Api }, */
  ], 
});
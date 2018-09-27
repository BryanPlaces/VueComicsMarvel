import Vue from 'vue';
import Router from 'vue-router';
import MarvelApi from '@/components/MarvelApi';
import Buscador from '@/components/Buscador';
import renderComic from '@/components/renderComic';
import renderCharacter from '@/components/renderCharacter';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MarvelApi',
      component: MarvelApi,
    },
    {
      path: '/detailComic/:id',
      component: renderComic,
    },
    /*{
      path: '/search/comics',
      component: MarvelApi,
    },
    {
      path: '/search/character',
      component: MarvelApi,
    },*/
    {
      path: '/detailCharacter/:name',
      component: renderCharacter,
    },
  ],
});

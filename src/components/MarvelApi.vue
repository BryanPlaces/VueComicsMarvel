<template>
  <div class="MarvelApi">
    <buscador v-on:obtenerComicsPorTitulo='comicsPorTitulo' v-on:obtenerPersonajeNombre='busquedaPersonaje'></buscador>
    <lista-de-comics v-on:numberComics='totalComics' :tituloComic="tituloComic" :personajeNombre="personajeNombre" :numero="numero" :pageOnecurrentPage="pageOne.currentPage"></lista-de-comics>
    <pagination v-on:recargar='prueba' :numComics="numComics" :tituloComic="tituloComic"
      :current-page="pageOne.currentPage"
      :total-pages="pageOne.totalPages"
      @page-changed="pageOneChanged"      
      
    ></pagination>
  </div>
</template>

<script>

import Buscador from './Buscador';
import ListaDeComics from './ListaDeComics';
import Pagination from './Pagination';

export default {
  name: 'MarvelApi',
  components: {
    Buscador,
    ListaDeComics,
    Pagination,
  },
  data() {
    return {
      tituloComic: '',
      personajeNombre: '',
      numero: 0,
      numComics: 0,
      //////////////////////////
      valor: '',
      num:1,
      personajeId: '',
      prueba: this.$route.params.personaje,
      joder:{},      
      pageOne: {
        currentPage:1,
        totalPages: 0,
      },

    };
  },  
  methods: {

    pageOneChanged(pageNum) {
      this.pageOne.currentPage = pageNum;
    },


    //numero de pagina
    prueba: function(b) {
      this.numero = b;
    },
    comicsPorTitulo: function(b) {
      this.tituloComic = b;
    },
    busquedaPersonaje: function(b) {
      this.personajeNombre = b;
    },
    totalComics: function(b) {
      this.numComics = b;
      this.pageOne.totalPages = Math.round((this.numComics/12))+1;
    }
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

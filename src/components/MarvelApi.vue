<template>
  <div class="MarvelApi">
    <buscador v-on:obtenerComicsPorTitulo='comicsPorTitulo' v-on:obtenerPersonajeNombre='busquedaPersonaje'></buscador>
    <lista-de-comics :tituloComic="tituloComic" :personajeNombre="personajeNombre" :numero="numero"></lista-de-comics>
    <pagination v-on:recargar='prueba'></pagination>
    <p>Se ha selecciona el nº {{this.numero}}</p>
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
    };
  },  
  methods: {
    prueba: function(b) {
      this.numero = b;
    },
    comicsPorTitulo: function(b) {
      this.tituloComic = b;
    },
    busquedaPersonaje: function(b) {
      this.personajeNombre = b;
    }
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
    <div>
        <ul class="container">
            <li class="comic" v-for="comic in comicsList" :key="comic.id">
                <objeto-comic :comic="comic"></objeto-comic>
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios';
import ObjetoComic from './ObjetoComic';

export default {
    name: 'ListaDeComic',
    props: ['tituloComic', 'personajeNombre', 'numero'],
    components: {
        ObjetoComic,
    },
    data() {
        return {
            comicsList: {
                data: {
                    results:[]
                }
            },
        };
    },
    created() {
        this.comicsPrincipales();
    },
    watch: {
        tituloComic: function() {
            axios.get("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=32be8dade9f3f1c42a40133a2d2bad14&hash=574ff2ad80c8bb9f2148ca5bc2be2d67&titleStartsWith=" + this.tituloComic)
            .then(response => this.comicsList = response.data.data.results);
        },

        personajeNombre: function() {
            axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${this.personajeNombre}&ts=1&apikey=32be8dade9f3f1c42a40133a2d2bad14&hash=574ff2ad80c8bb9f2148ca5bc2be2d67`)
            .then(response => {
                this.comicsList = response.data.data.results;
            })            
        }
    },
    methods: {
        comicsPrincipales() {
            axios.get('https://gateway.marvel.com/v1/public/comics?orderBy=-focDate&ts=1&apikey=32be8dade9f3f1c42a40133a2d2bad14&hash=574ff2ad80c8bb9f2148ca5bc2be2d67')
            .then(response => {
                this.comicsList = response.data.data.results;
            }).catch(err => {
                console.log(err);
            })
        },

    },
}
</script>

<style scoped>
  .comic {    
    list-style-type: none;
  }
  .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
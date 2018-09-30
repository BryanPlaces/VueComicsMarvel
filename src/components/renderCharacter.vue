<template>
  <div class="renderCharacter">  
    <div>
      <img class="imagen" :src="comic.thumbnail.path + '.' + comic.thumbnail.extension">
    </div>
    <div class="comicInfo">
      <h1>{{this.comicName}}</h1>
      <ul>
        <h2>Stories</h2>
        <li v-for="stories in comic.stories.items" :key="stories.id">
          {{stories.name}}
        </li>
      </ul>
      <ul>
        <h2>Series</h2>
        <li v-for="series in comic.series.items" :key="series.id">
          {{series.name}}
        </li>
      </ul>            
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'renderCharacter',
  data() {
    return {
      comic: {},
      comicName: this.$route.params.name,
    };
  },
  methods: {
    getComic() {
      axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${this.comicName}&ts=1&apikey=32be8dade9f3f1c42a40133a2d2bad14&hash=574ff2ad80c8bb9f2148ca5bc2be2d67`)
        .then(response => {
          this.comic = response.data.data.results[0];
        })
        .catch(err => {console.log(err)})
    },
  },
  created() {
    this.getComic();
  }
}
</script>

<style scoped>

h1 {
  font-size: 50px;
}

h2 {
  background-color: #4e4e4e;
  margin-bottom: 0;
  margin-top: 0;
  padding-top: 10px;
  padding-bottom: 10px;
}

.renderCharacter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
}

.imagen {
  margin-top: 50px;
  height: 300px;
  width: 300px;
}

.comicInfo{
  margin-top: 50px;
  margin-right: 50px;
  background-color: #333;
}

ul {
  text-align: left;
  list-style: none; 
  margin: 0;
  padding: 0;
  width: 100%;
}

li {
  background-color: #676767;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>


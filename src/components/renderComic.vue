<template>
    <div class="renderComic">
        <div><img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"></div>
        <div class="comicInfo">
            <h1>{{comic.title}}</h1>
            <ul>
                <h2>Creators</h2>
                <li v-for="creator in comic.creators.items" :key="creator.id">
                    {{creator.name}}
                </li>
            </ul>
            <ul>
                <h2>Characters</h2>
                <li v-for="character in comic.characters.items" :key="character.id">
                    {{character.name}}
                </li>
            </ul>
            <ul>
                <h2>Stories</h2>
                <li v-for="stories in comic.stories.items" :key="stories.id">
                    {{stories.name}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

import axios from 'axios';

export default {
  name: 'renderComic',
  data() {
    return {
      comic: {},
      comicId: this.$route.params.id,
    };
  },
  methods: {
    getComic() {
      axios.get(`https://gateway.marvel.com/v1/public/comics/${this.comicId}?ts=1&apikey=32be8dade9f3f1c42a40133a2d2bad14&hash=574ff2ad80c8bb9f2148ca5bc2be2d67`)
        .then((response) => {
          this.comic = response.data.data.results[0];
        }).catch((err) => {console.log(err)});
    },
  },
  created() {
    this.getComic();
  },
};
</script>
<style scoped>
    .comic {
        display: flex;
        flex-direction: row;
        margin: 0 30px;
    }
    .comicInfo {
        margin: 0 auto;
    }
    .comicImg {
        width: 100%;
        height: 80%;
    }
</style>

<template>
    
    <div>
        <div v-if="this.comic.id && !this.comic.name">
            <router-link :to="'/detail/' + this.comic.id"><img class="comicImg" :src="this.url"/></router-link>
        </div>

        <div v-if="this.comic.name">
            <router-link :to="'/detailP/' + this.comic.name"><img class="comicImg" :src="this.url"/></router-link>
        </div>

    </div>
</template>
<script>


export default {
    name: 'ObjetoComic',
    props: ['comic'],
    data() {
        return{
            url: this.comic.thumbnail.path + "." + this.comic.thumbnail.extension,
        }
    },
}
</script>
<style scoped>
    
    .comicImg {
        display: block;
        height: 400px;
        width: 300px;
        margin: 10px;
        background-size: cover;
    }
</style>
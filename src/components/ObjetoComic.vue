<template>    
	<div>
		<div v-if="this.comic.id && !this.comic.name">
			<router-link :to="'/detailComic/' + this.comic.id">

			<div class="div-imagen">
				<div class="titulo">
					{{this.comic.title}}
				</div>
				<img class="desvanecer" :src="this.url" />
			</div>

			</router-link>
		</div>
		<div v-if="this.comic.name">
			<router-link :to="'/detailCharacter/' + this.comic.name"><img class="comicImg" :src="this.url"/></router-link>
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
    
.desvanecer {
	display: block;
	height: 270px;
	width: 180px;
	margin: 10px;
	background-size: cover;
}

.div-imagen {
  display:inline-block;
  position:relative;
}

.div-imagen > div {
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
  padding:10px;
  margin:0;
}

.desvanecer:hover {
  opacity: 0.07;
  -webkit-transition: opacity 500ms;
  -moz-transition: opacity 500ms;
  -o-transition: opacity 500ms;
  -ms-transition: opacity 500ms;
  transition: opacity 500ms;
}

</style>
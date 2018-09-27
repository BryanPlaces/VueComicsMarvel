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
	props: ['tituloComic', 'personajeNombre', 'numero', 'pageOnecurrentPage'],
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
			totalComics: 0,
		};
	},
	created() {
		this.comicsPrincipales();
	},
	watch: {
		tituloComic: function() {
			axios.get("http://gateway.marvel.com/v1/public/comics?limit=12&ts=1&apikey=32be8dade9f3f1c42a40133a2d2bad14&hash=574ff2ad80c8bb9f2148ca5bc2be2d67&titleStartsWith=" + this.tituloComic)
			.then(response => {
				this.comicsList = response.data.data.results;
				this.totalComics = response.data.data.total;
				this.$emit('numberComics',this.totalComics);							
			});
		},

		personajeNombre: function() {
			axios.get(`https://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${this.personajeNombre}&ts=1&apikey=32be8dade9f3f1c42a40133a2d2bad14&hash=574ff2ad80c8bb9f2148ca5bc2be2d67`)
			.then(response => {
				this.comicsList = response.data.data.results;
				this.totalComics = response.data.data.total;				
			})            
		},
		//pageOnecurrentPage antes era numero
		pageOnecurrentPage:function() {
			let aux = (this.pageOnecurrentPage-1)*12;
			if (this.tituloComic) {

			axios.get(`http://gateway.marvel.com/v1/public/comics?limit=12&offset=${aux}&ts=1&apikey=32be8dade9f3f1c42a40133a2d2bad14&hash=574ff2ad80c8bb9f2148ca5bc2be2d67&titleStartsWith=` + this.tituloComic)
			.then(response => {
				this.comicsList = response.data.data.results;
			});

			}else {
				axios.get(`https://gateway.marvel.com/v1/public/comics?limit=12&offset=${aux}&orderBy=-focDate&ts=1&apikey=32be8dade9f3f1c42a40133a2d2bad14&hash=574ff2ad80c8bb9f2148ca5bc2be2d67`)
				.then(response => {
					this.comicsList = response.data.data.results;
				}).catch(err => {
					console.log(err);
				})
			}

		},
	},
	methods: {
		comicsPrincipales() {
			axios.get('https://gateway.marvel.com/v1/public/comics?limit=12&orderBy=-focDate&ts=1&apikey=32be8dade9f3f1c42a40133a2d2bad14&hash=574ff2ad80c8bb9f2148ca5bc2be2d67')
			.then(response => {
				this.comicsList = response.data.data.results;
				this.totalComics = response.data.data.total;
				this.$emit('numberComics',this.totalComics);
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
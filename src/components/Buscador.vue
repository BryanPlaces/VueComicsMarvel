<template>
    <div class="buscador">
        
        <div class="parte1">
            <span v-if="this.selected === `comics`">
                <input class="buscador2" type="search" v-model="titulocomic" v-on:keyup.enter="$emit('obtenerComicsPorTitulo',titulocomic)" placeholder="Buscar por titulo">
            </span>
            <span v-if="this.selected === `characters`">
                <input class="buscador2" type="search" v-model='nombrePersonaje' v-on:keyup.enter="$emit('obtenerPersonajeNombre', nombrePersonaje)" placeholder="Buscar Personaje">
            </span>
        </div>

        <div class="custom-select">
            <select v-model="selected">
                <option>comics</option>
                <option>characters</option>
            </select>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 'comics',
        }
    }
}
</script>
<style scoped>

.buscador {
    height: 48px;
    width: 100%;
    display: grid;
    grid-template-columns: 82% 18%;

}

.buscador2 {
    height: 48px;
    width: 100%;
}


/***********************************/

select {
    width: 100%;
    height: 100%;
    background-color: #4e4e4e;
    color: #fff;
    
}

/**********************************/

</style>

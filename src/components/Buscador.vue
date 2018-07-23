<template>
    <div class="buscador">

        <span v-if="this.selected === `comics`">
            <input class="buscador" type="search" v-model="titulocomic" v-on:keyup.enter="$emit('obtenerComicsPorTitulo',titulocomic)" placeholder="Buscar por titulo">
        </span>
        <span v-if="this.selected === `characters`">
            <input class="buscador" type="search" v-model='nombrePersonaje' v-on:keyup.enter="$emit('obtenerPersonajeNombre', nombrePersonaje)" placeholder="Buscar Personaje">
        </span>

        <select v-model="selected">
            <option>comics</option>
            <option>characters</option>
        </select>

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
<style scoped></style>

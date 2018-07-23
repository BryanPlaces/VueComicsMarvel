<template>
    <div>
        <h3>pagination</h3>
        <div v-for="(p, index) in paginas" :key="index">
            <a href="#" @click="$emit('recargar',p)">{{p}}</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            paginas: 5,
        }
    }
}
</script>

<style scoped>

</style>



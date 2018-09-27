<template>
  <div>
    <!-- <div v-if="this.tituloComic">
      <div v-for="(p, index) in paginas" :key="index">
        <a href="#" @click="$emit('recargar',p)">{{p}}</a>
      </div>
    </div>
    
    <div v-else>
      <div v-for="(p, index) in paginas" :key="index">
        <a href="#" @click="$emit('recargar',p)">{{p}}</a>
      </div>
    </div> -->




    <div>
      <ul class="pagination">
        <li>
          <a href="#" @click="$emit('page-changed', 1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="(n, index) in paginationRange" :key="index" :class="activePage(n)">
          <a href="#" @click="$emit('page-changed', n)">{{ n }}</a>
        </li>
        <li>
          <a href="#" @click="$emit('page-changed',lastPage)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  props: ['numComics', 'tituloComic'],


    //////////////////////////////////////
      props: {
    // Current Page
    currentPage: {
      type: Number,
      required: true
    },
    // Total page
    totalPages: Number,
    // Items per page
    itemsPerPage: Number,
    // Total items
    totalItems: Number,
    // Visible Pages
    visiblePages: {
      type: Number,
      default: 5,
      coerce: (val) => parseInt(val)
    }
  },
    /////////////////////////////////////


  data() {
    return {
      paginas: 0,
    }
  },

    ///////////////////////////////////////////////////
  computed: {
    lastPage () {
      if (this.totalPages) {
        return this.totalPages
      } else {
        return this.totalItems % this.itemsPerPage === 0
        ? this.totalItems / this.itemsPerPage
        : Math.floor(this.totalItems / this.itemsPerPage) + 1
      }
    },
    paginationRange () {
      let start = this.currentPage - this.visiblePages / 2 <= 0
                  ? 1 : this.currentPage + this.visiblePages / 2 > this.lastPage
                  ? lowerBound(this.lastPage - this.visiblePages + 1, 1)
                  : Math.ceil(this.currentPage - this.visiblePages / 2)
      let range = []
      for (let i = 0; i < this.visiblePages && i < this.lastPage; i++) {
        range.push(start + i)
      }
      return range
    }
  },
    ///////////////////////////////////////////////////    

  watch: {
    numComics: function() {
      this.paginas = Math.round((this.numComics/10))+1;
    }
  },
  methods: {
    ///////////////////////////////////////////////////    
    activePage (pageNum) {
      return this.currentPage === pageNum ? 'active' : ''
    },
    lowerBound (num, limit) {
      return num >= limit ? num : limit
    },
    ///////////////////////////////////////////////////  
  },
}
</script>

<style scoped>

</style>



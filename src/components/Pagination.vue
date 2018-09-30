<template>
  <div class="pag">

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

.pag {
  background-color: #bd1023;
  height: 50px;

  box-shadow: 0 -4px 20px 0 rgba(0,0,0,.75);

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  position: fixed;
  bottom: 0;
  width: 100%;
  z-index:2000;
}

ul.pagination {
  display: flex;
  justify-content: center;
  align-content: center;


  /* background: #bd1023;
  border: 1px solid #7C7C7C;*/
  list-style: none; 
  margin: 0;
  padding: 0;
  width: 100%;
}
ul.pagination li a{
  color: #fff;
  display: block;
  padding: .3em;
  text-decoration: none;
}

ul.pagination li {
  float: left;
  width: 4%;
}

ul.pagination {
  overflow: hidden;
}

/* ul.pagination li a {
  border-left: 1px solid #FFF;
  border-right: 1px solid #7C7C7C;
} */


</style>



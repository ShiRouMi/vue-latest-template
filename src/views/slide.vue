<template>
  <carousel-slide 
      :data="slideData" 
      :totalCount="totalCount" :pageSize="pageSize"
      @changeIndex=changeMapIndex>
  </carousel-slide>
</template>
<script>
import CarouselSlide from '@/components/CarouselSlide'
import { mapState } from 'vuex'
export default {
  data: function() {
    return {
      pageSize: Math.ceil(document.body.clientWidth * (5/6) / 300)
    }
  },
  components: {
    CarouselSlide
  },
  computed: {
    ...mapState({
      slideData: 'slideData',
      totalCount: 'totalCount'
    })
  },
  methods: {
    changeMapIndex(index) {
      this.$store.dispatch('getData', {
        index,
        pageSize: this.pageSize
      })
    },
    handleResize() {
      this.pageSize = Math.ceil(document.body.clientWidth * (5/6) / 300)
    }
  },
  mounted() {
    this.changeMapIndex(0)
    window.addEventListener('resize', this.handleResize)
  }
}
</script>
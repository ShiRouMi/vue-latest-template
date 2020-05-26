<template>
  <div class="slide el-col-20 relative">
   <el-pagination class="more"
      @prev-click="pageClick"
      @next-click="pageClick"
      background
      :page-size="pageSize"
      layout="prev, next"
      :total="totalCount">
    </el-pagination>
    <ul class="carousel" 
        ref="carousel-content" 
        :style="{width: carouselWidth}">
      <li class="box-list-content box-list" v-for="item in data" :key="item.id">
          {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      title: String,
      data: {
        type: Array,
        default: function() {
          return []
        }
      },
      totalCount: {
        type: Number
      },
      pageSize: {
        type: Number
      }
    },
    computed: {
      wrapperWidth() {
        return Math.ceil(this.totalCount / this.pageSize)
      },
      carouselWidth() {
        return 300 * this.pageSize * Math.ceil(this.totalCount / this.pageSize) + 'px'
      }
    },
    methods: {
      pageClick(currentPage) {
        if ((currentPage-1) * this.pageSize >= this.data.length ) {
          this.$emit('changeIndex', (currentPage-1) * this.pageSize)
        }
        this.$refs['carousel-content'].style.marginLeft = -(300 * this.pageSize) * (currentPage - 1) + 'px'
      }
    }
  }
</script>

<style lang="less">
.slide {
  overflow: hidden;
  margin: 0 auto;
  width: 100vw;
  position: relative;
}
li {
  list-style: none;
}
ul {
  margin-left: 0px;
  padding: 0;
  -webkit-transition: margin-left 0.5s ease 0s;
  transition: margin-left 0.5s ease 0s;
}
.carousel {
  overflow: hidden;
}
.carousel-wrapper {
  overflow: hidden;
}
.box-list-content {
  float: left;
  width: 286px;
  margin-right: 14px;
  margin-bottom: 0;
}
.box-list-content.box-list {
  margin-bottom: 14px;
  height: 300px;
  background-color: #fff;
  text-align: center;
  position: relative;
  background: #abc;
}
</style>

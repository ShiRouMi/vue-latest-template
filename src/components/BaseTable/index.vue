<template>
<el-table
  v-bind="$attrs"
  v-on="$listeners">
  
  <template v-for="(column, index) in columns" >
    <el-table-column 
      v-bind="column.attrs || {}"
      :key="index">
    </el-table-column>
  </template>
  
  <el-table-column
    v-if="edit || deleteCol">
    <template slot-scope="scope">
      <el-button
        size="mini"
        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      <el-button
        size="mini"
        type="danger"
        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
    </template>
  </el-table-column>

  <slot />
</el-table>
</template>
<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    },
    edit: {
      type: Boolean,
      default: true
    },
    deleteCol: {
      type: Boolean,
      default: true
    }
  },
  computed: {
  },
  methods: {
    handleEdit() {

    },
    handleDelete() {
      
    }
  }
}
</script>
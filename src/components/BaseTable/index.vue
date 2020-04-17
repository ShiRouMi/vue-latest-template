<template>
  <el-table
        v-bind="$attrs"
        v-on="$listeners"
        :data="data"
        class="base-table">
    <template v-for="(column, index) in columns">

      <el-table-column
        v-if="!column.slot"
        :key="index"
        v-bind="column.attrs || {}">
      </el-table-column> 

      <el-table-column
        :key="index"
        v-bind="column.attrs || {}" 
        v-else>
        <template v-slot="scope">
          <slot :name="column.slot" :scope="scope" />
        </template>
      </el-table-column> 
    </template>

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
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
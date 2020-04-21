<template>
  <el-checkbox-group 
      v-bind="$attrs"
      v-on="$listeners"
      :value="value">
    <el-checkbox
          v-for="item in $attrs.options"
          :key="item.label || item.value"
          :disabled="item.disabled"
          :label="item.label || item.value"></el-checkbox>
  </el-checkbox-group>
</template>
<script>
export default {
  name: 'base-checkbox-group',
  props: {
    value: {
      default: () => []
    }
  }
  
}
</script>
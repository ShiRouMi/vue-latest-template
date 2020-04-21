<template>
  <el-upload
    v-bind="$attrs"
    v-on="$listeners">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>
<script>
export default {
  name: 'base-upload',
  props: {
  },
  mounted() {
    console.log(this.$attrs)
  }
}
</script>
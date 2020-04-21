<template>
  <div id="form">
    <base-form
        class="example-base-form"
        submitContext="提交"
        :form-items="formItems">
    </base-form>
  </div>
</template>
<script>
import BaseForm from '@/components/BaseForm'
import { formItems } from "./formItems";
import { columns } from './columns'
export default {
  components: {
    BaseForm
  },
  data: function() {
    return {
      formItems,
      columns: columns
    }
  },
  methods: {
    findItem(key) {
      return this.formItems.find(
        formItem => formItem.attrs && formItem.attrs.key === key
      )
    },
    getInfo() {
      const res = [{ value: "1", label: "吃饭" }, { value: "2", label: "睡觉" }]
      this.findItem('asyncRadio').attrs.options = res
    }
  },
  mounted() {
    this.getInfo()
  }
}
</script>
<style scoped>
.example-base-form {
  width: 300px;
}
</style>
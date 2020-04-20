<template>
  <div id="example">
    <!-- <base-table :columns="columns"></base-table> -->
    <base-form
        class="example-base-form"
        submitContext="快提交"
        :form-items="formItems">
    </base-form>
  </div>
</template>
<script>
// import BaseTable from '@/components/BaseTable'
import BaseForm from '@/components/BaseForm'
import { formItems } from "./formItems";
import { columns } from './columns'
export default {
  components: {
    // BaseTable,
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
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
  }
}
</script>
<style scoped>
.example-base-form {
  width: 300px;
}
</style>
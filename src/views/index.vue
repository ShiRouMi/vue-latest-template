<template>
  <div id="example">
    <base-table :columns="columns" :data="tableData">
    </base-table>
    
    <hr />
    
    <base-form
        class="example-base-form"
        submitContext="快提交"
        :form-items="formItems">

        <template v-slot:slotCheckBox>
          <el-checkbox v-model="mergeForm.slotCheckBox">插槽复选框1</el-checkbox>
        </template>
    </base-form>
  </div>
</template>
<script>
import { formItems } from "./formItems";
import { columns } from './columns'
export default {
  data: function() {
    return {
      formItems,
      columns: columns,
      mergeForm: {
        slotCheckBox: ""
      },
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
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
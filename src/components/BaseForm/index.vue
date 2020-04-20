<template>
  <el-form
          class="base-form"
          v-bind="$attrs"
          :api="api"
          :model="Model"
          v-on="$listeners"
          :ref="form">

      <template v-for="(item, index) in _formItems">

        <el-form-item
              :key="index + item.attrs.key"
              v-if="item._ifRender"
              :class="item.itemAttrs.className"
              v-bind="item.itemAttrs || {}"
              :prop="item.attrs.key">

            <!--将表单内部的数据通过作用域插槽传给外部-->
              <slot v-if="item.slot" :name="item.slot" :scope="Model" />
              <component
                v-else
                :is="item.tag"
                :class="item.itemAttrs.className"
                v-bind="item.attrs || {}"
                v-on="item.listeners || {}" 
                v-model="Model[item.attrs.key]"
              />

        </el-form-item>
      </template>

      <el-form-item v-if="submit || reset">
        <el-button type="primary" @click="handleSubmit" v-if="submit">{{
          $attrs.submitContext || '搜索'
        }}</el-button>
        <el-button @click="handleReset" v-if="reset">{{
          $attrs.resetContext || '重置'
        }}</el-button>
      </el-form-item>
  </el-form>
</template>
<script>
import { basic } from './basic'

const form = Symbol("form"); //保证每个实例有独一无二的标志位

export default {
  props: {
    formItems: {
      type: Array,
      required: true
    },
    // 接口函数
    api: {
      type: Function
    },
    submit: {
      type: Boolean,
      default: true
    },
    reset: {
      type: Boolean,
      default: true
    },
    //传入mergeForm允许父组件修改内部Model对象
    mergeForm: {
      type: Object,
      default: () => {}
    }
  },
  data: function() {
    return {
      Model: {}, // 表单组件传给后端的数据对象
      originModel: {},
      form
    }
  },
  computed: {
    _formItems() {
      let _formItems = []
      _formItems = this.formItems.map(
        item => this.computeFormItem(item, this.Model)
      )
      return _formItems
    }
    
  },
  watch: {
    formItem: {
      handler() {
        this.formItems.forEach(formItem => {
          if (!formItem.attrs || !formItem.attrs.key) return; //跳过没有key的属性(插槽)
          this.$set(this.Model, formItem.attrs.key, (
            formItem.attrs.value ? formItem.attrs.value : ''
          ))
        })
      },
      deep: true,
      immediate: true
    },
    mergeForm: {
      handler() {
        this.mergeModel();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    computeFormItem(formItem, Model) {
      let item = { ...formItem }

      let tag  = item.tag || 'input'

      let basicItem = basic[tag]

      item.tag = basicItem.component

      item.attrs = Object.assign({}, basicItem.attrs, item.attrs)

      if(item.getAttrs) {
        item.attrs = Object.assign({}, item.attrs, item.getAttrs(Model))
      }

      item._ifRender = item.ifRender ? item.ifRender(Model) : true
      
      return item
    },
    handleSubmit() {
      this.$refs[form].validate(async valid => {
        if (valid) {
          let res = await this.api(this.Model);
          this.$emit("after-submit", res);
        }
      })
    },
    handleReset() {
      this.Model = JSON.parse(JSON.stringify(this.originModel));
    },

    mergeModel() {
      Object.assign(this.Model, this.mergeForm);
    }
  }
}
</script>
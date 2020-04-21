import Vue from 'vue'
import BaseSelect from "@/components/BaseSelect"
import BaseRadioGroup from '@/components/BaseRadioGroup'
import BaseCheckboxGroup from '@/components/BaseCheckboxGroup'
import BaseUpload from '@/components/BaseUpload'
import BaseTable from '@/components/BaseTable'
import BaseForm from '@/components/BaseForm'

Vue.component("base-select", BaseSelect)
Vue.component("base-radio-group", BaseRadioGroup)
Vue.component('base-checkbox-group', BaseCheckboxGroup)
Vue.component("base-upload", BaseUpload)
Vue.component("base-table", BaseTable)
Vue.component("base-form", BaseForm)
/** 
 * elementUI 表单控件有这些
 * radio
 * checkbox
 * input
 * inputNumber
 * select
 * cascader
 * switch
 * slider
 * timepicker
 * datepicker
 * dateTimePicker
 * upload
 * rate
 * colorPicker
 * transfer
*/
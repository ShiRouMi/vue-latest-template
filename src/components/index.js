import Vue from 'vue'
import BaseSelect from "@/components/BaseSelect"
import BaseRadioGroup from '@/components/BaseRadioGroup'
import BaseCheckboxGroup from '@/components/BaseCheckboxGroup'
import BaseUpload from '@/components/BaseUpload'
Vue.component("base-select", BaseSelect)
Vue.component("base-radio-group", BaseRadioGroup)
Vue.component('base-checkbox-group', BaseCheckboxGroup)
Vue.component("base-upload", BaseUpload)
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
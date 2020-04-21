export const basic = {
  input: {
    component: "el-input",
    attrs: {
      placeholder: "请输入...",
      clearable: true,
    },
  },
  checkbox: {
    component: "base-checkbox-group"
  },
  radio: {
    component: "base-radio-group",
  },
  select: {
    component: "base-select",
    attrs: {
      placeholder: "请选择",
      clearable: true,
    },
  },
  date: {
    component: "el-date-picker",
    attrs: {
      placeholder: "选择日期",
      clearable: true,
      type: "date",
      format: "yyyy/MM/dd",
      ["value-format"]: "yyyy/MM/dd",
    },
  },
  'time-select': {
    component: 'el-time-select',
    attrs: {
      placeholder: '选择时间'
    }
  },
  'time-picker': {
    component: 'el-time-picker'
  },
  'input-number': {
    component: 'el-input-number'
  },
  cascader: {
    component: 'el-cascader',
    attrs: {
      placeholder: "请选择",
      clearable: true
    }
  },
  switch: {
    component: 'el-switch'
  },
  slider: {
    component: 'el-slider'
  },
  rate: {
    component: 'el-rate'
  },
  'color-picker': {
    component: 'el-color-picker'
  },
  transfer: {
    component: 'el-transfer'
  },
  upload: {
    component: 'base-upload'
  }
}

export const basic = {
  input: {
    component: "el-input",
    attrs: {
      placeholder: "请输入...",
      clearable: true,
    },
  },
  select: {
    component: "base-select",
    attrs: {
      placeholder: "请选择",
      clearable: true,
    },
  },
  radio: {
    component: "base-radio-group",
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
}

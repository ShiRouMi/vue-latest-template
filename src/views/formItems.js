export const formItems = [
  {
    tag: 'input',
    itemAttrs: {
      label: '姓名',
      className: 'xxx'
    },
    attrs: {
      key: 'name',
      value: 'hello world',
      placeholder: '请输入...'
    },
    getAttrs(Model) {
      return Model.age === 22 ? { disabled: true } : null
    },
    ifRender(Model) {
      return Model.hobby !== 2
    }
  },
  {
    tag: 'input',
    itemAttrs: {
      label: '年龄',
      rules: [{
        required: true, message: '年龄不能为空', trigger: 'click'
      }]
    },
    attrs: {
      key: 'age',
      placeholder: '请输入年龄'
    }
  },
  {
    tag: 'select',
    itemAttrs: {
      label: '兴趣'
    },
    attrs: {
      key: 'hobby',
      value: '2',
      placeholder: '请选择兴趣',
      options: [
        {value: '1', label: '吃饭'},
        {value: '2', label: '睡觉'},
        {value: '3', label: '玩耍'},
      ]
    }
  },
  {
    tag: 'radio',
    itemAttrs: {
      label: '单选框'
    },
    attrs: {
      value: "1",
      key: "radio",
      options: [{ value: "1", label: "男" }, { value: "2", label: "女" }]
    }
  },
  {
    tag: 'radio',
    itemAttrs: {
      label: '调用后端接口--单选框'
    },
    attrs: {
      value: '1',
      key: "asyncRadio",
      options: []
    }
  }
]
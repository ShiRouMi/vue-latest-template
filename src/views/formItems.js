export const formItems = [
  {
    tag: 'radio',
    itemAttrs: {
      label: '单选框'
    },
    attrs: {
      value: "1",
      key: "radio1",
      options: [{ value: "1", label: "备选项1" }, { value: "2", label: "备选项2" }]
    }
  },
  {
    tag: 'checkbox',
    itemAttrs: {
      label: '复选框'
    },
    attrs: {
      value: [true],
      key: "checkboxGroup",
      options: [{ value: true, label: "备选项1" }, { value: false, label: "备选项2" }]
    }
  },
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
  },
  {
    tag: 'input-number',
    itemAttrs: {
      label: '计数器'
    },
    attrs: {
      key: 'inputNumber',
      value: 2,
      min: 1,
      max: 10
    }
  },
  {
    tag: 'cascader',
    itemAttrs: {
      label: '级联选择器'
    },
    attrs: {
      key: 'cascader',
      value: 'zhinan',
      options:  [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
    }
  },
  {
    tag: 'switch',
    itemAttrs: {
      label: '开关'
    },
    attrs: {
      key: 'switch',
      value: true,
      activeColor: "#13ce66",
      inactiveColor: '#ff4949'
    }
  },
  {
    tag: 'slider',
    itemAttrs: {
      label: '滑块'
    },
    attrs: {
      key: 'slider',
      value: 1,
      'show-tooltip': false
    }
  },
  {
    tag: 'time-select',
    itemAttrs: {
      label: '时间筛选器'
    },
    attrs: {
      key: 'timeSelect',
      value: '',
      'picker-options': {
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }
    }
  },
  {
    tag: 'time-picker',
    itemAttrs: {
      label: '时间筛选器'
    },
    attrs: {
      key: 'timePicker',
      value: new Date(2016, 9, 10, 18, 40),
      'picker-options': {
        selectableRange: '18:30:00 - 20:30:00'
      }
    }
  },
  {
    tag: 'date',
    itemAttrs: {
      label: '日期选择器'
    },
    attrs: {
      key: 'date-picker',
      value: '',
    }
  },
  {
    tag: 'color-picker',
    itemAttrs: {
      label: '颜色选择器'
    },
    attrs: {
      key: 'colorPicker',
      value: '#409EFF'
    }
  },
  {
    tag: 'transfer',
    itemAttrs: {
      label: '穿梭框'
    },
    attrs: {
      key: 'transfer',
      value: [1, 4],
      data: (() => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      })()
    }
  },
  {
    slot: "slotCheckBox",
    itemAttrs: {
      label: "插槽复选框"
    }
  }
]
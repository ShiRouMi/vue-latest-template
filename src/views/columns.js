export const columns = [
  {
    attrs: {label: "姓名", prop: "name", width: '80'}
  },
  {
    attrs: {label: "年龄", prop: "age"}
  },
  {
    attrs: {label: "兴趣", prop: "hobby"}
  },
  {
    attrs: {label: "手机", prop: "mobile", width: '150'}
  },
  {
    slot: 'complexItem',
    attrs: {label: "复杂数据表头", prop: "complexItem"}
  }
]
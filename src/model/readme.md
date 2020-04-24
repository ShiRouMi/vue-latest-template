数据定义格式如下：

- type 必填，用来描述该字段的类型，支持String、Number、Date等类型

- path 必填，数据路径，对应服务端数据结构的取值路径

- value 选填，数据默认值，可不填

栗子：
```js
let userModel = new Model({
  id: {
    type: Number,
    path: "uuid",
    value: 0,
  },
  name: {
    type: String,
    path: "buyer.shopinfo.nickname",
    value: "",
  },
  items: {
    type: String,
    path: "items",
  },
  age: {
    type: Number,
    path: "age",
  },
  lastLoginTime: {
    type: Date,
    path: "lastLoginTime",
  },
  price: {
    type: Number,
    unit: "B",
    path: "price",
  },
})

// 后台返回数据的格式
let data = {
  uuid: 123,
  buyer: {
    shopinfo: {
      nickname: "张三",
    }
  },
  price: 1000,
  lastLoginTime: "1563897600000"
}
```
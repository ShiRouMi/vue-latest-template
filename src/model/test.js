import Model from './index'

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

let userState = userModel.parse({
  uuid: 123,
  buyer: {
    shopinfo: {
      nickname: "张三",
    },
  },
  price: 1000,
  lastLoginTime: "1563897600000",
})

let userParams = userModel.traverse({
  id: 234,
  name: "李四",
  age: null,
  lastLoginTime: "2019-07-24",
  price: 24,
})

console.log(JSON.stringify(userParams))
console.log(JSON.stringify(userState))
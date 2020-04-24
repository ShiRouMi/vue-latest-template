import Model from './index'
const userModel = new Model({
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

export default userModel
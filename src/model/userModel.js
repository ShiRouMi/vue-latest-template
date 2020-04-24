import Model from './index'
const userModel = new Model({
  id: {
    type: Number,
    property: "uuid",
    value: 0,
  },
  name: {
    type: String,
    property: "buyer.shopinfo.nickname",
    value: "",
  },
  items: {
    type: String,
    property: "items",
  },
  age: {
    type: Number,
    property: "age",
  },
  lastLoginTime: {
    type: Date,
    property: "lastLoginTime",
  },
  price: {
    type: Number,
    unit: "B",
    property: "price",
  },
})

export default userModel
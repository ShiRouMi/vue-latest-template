<template>
  <div>
    id: {{userState.id}}
    <br/>
    name: {{userState.name}}
    <br/>
    items: {{userState.items}}
    <br/>
    age: {{userState.age}}
    <br/>
    lastLoginTime: {{userState.lastLoginTime}}
    <br/>
    price: {{userState.price}}
  </div>
</template>
<script>
import userModel from '@/model/userModel'

export default {
  data: function() {
    return {
      userState: {},
      userModel
    }
  },
  mounted() {
    let data = {
      uuid: 123,
      buyer: {
        shopinfo: {
          nickname: "张三",
        },
      },
      price: 1000,
      lastLoginTime: "1563897600000",
    }
    let data2 = {
      id: 234,
      name: "李四",
      age: 25,
      lastLoginTime: "2019-07-24",
      price: 24,
    }
    let dd1 = this.userModel.parse(data)
    let dd2 = this.userModel.traverse(data2)
    console.log(dd1)
    console.log(dd2)
    this.userState = dd1
  }
}
</script>
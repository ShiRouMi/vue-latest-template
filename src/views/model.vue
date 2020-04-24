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
    
    let userState = this.userModel.parse(data)
    this.userState = userState
  }
}
</script>
<template>
  <div id="app">
    <div class="color-list">
    <div
        class="color-item"
        v-for="color in colors" v-dragging="{ item: color, list: colors }"
        :key="color.text"
    >{{color.text}}</div>
  </div>
  <br />
  <div>---------------------------</div>
  <div
        class="color-item"
        v-for="color in colors" v-dragging="{ item: color, list: colors }"
        :key="color.text"
    >{{color.text}}</div>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data: function() {
    return {
      colors: [{
          text: "Aqusssaaamarine"
      }, {
          text: "Hotpink"
      }, {
          text: "Gold"
      }, {
          text: "Crimson"
      }, {
          text: "Blueviolet"
      }, {
          text: "Lightblue"
      }, {
          text: "Cornflowerblue"
      }, {
          text: "Skyblue"
      }, {
          text: "Burlywood"
      }]
    }
  }
}
</script>

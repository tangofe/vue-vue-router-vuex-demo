<template>
  <div class="hello">
    <h1><router-link to="/hh/first">{{ msg1 }}</router-link></h1>
    <h1 v-on:click="changeContent1"><router-link to="second">{{ msg2 }}</router-link></h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg1: 'Welcome to Your Vue.js App',
      msg2: 'Welcome to Your React.js App'
    }
  },
  methods: {
    changeContent1: function () {
      console.log('点击了')
      this.$router.push('/hh/second')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

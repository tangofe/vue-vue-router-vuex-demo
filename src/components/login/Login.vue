<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <input type="text" v-bind:placeholder="name" v-model="name">
      </li>
      <li>
        <input type="text" v-model="password">
      </li>
      <li>
        <button v-on:click="login">登录</button>
      </li>
      <li>
        <router-link to="/hh">Go to HH</router-link>
      </li>
      <li>
        <router-link to="/home">Go to HomePage</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: 'hahaha', //用户名
      password: '', //密码
    }
  },
  methods: {
    login: function() {
      if(this.name != '' && this.password != '') {
        this.$router.push('/hh')
      } else {
        console.log('账号或密码不能为空！')
        //layer.msg('账号或密码不能为空！')//我们判断下账号密码是否为空
      }
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
  /* display: inline-block; */
  margin: 25px 10px;
}
a {
  color: #42b983;
}
</style>

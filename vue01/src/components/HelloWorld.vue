<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/de">
        router-link标签跳转测试
      </router-link>
      <br>
      <router-link to='/test'>
        跳转test
      </router-link>
      <br>
      <router-link :to="{name:'test'}">
        通过name访问test
      </router-link>
      <br>
      <router-link :to="{path:'/test'}">
        通过path访问test
      </router-link>
      <br>
      <router-link :to="{name:'test',params:{username:'陈',pass:'chen'}}">
        通过传参访问test
      </router-link>
      <br>
      <router-link :to="{path:'/elementStudy'}">
        访问element
      </router-link>
      <br>
       <router-link :to="{path:'/layout'}">
        访问layout
      </router-link>
      <br>
       <router-link :to="{path:'/form'}">
        访问form表单
      </router-link>
      <br>
       <router-link :to="{path:'/login'}">
        测试增加router文件夹
      </router-link>
      <br>
       <router-link :to="{path:'/upfile'}">
        上传文件
      </router-link>
    </p>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App111',
      username:'陈',
      pass:'chen'
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

<template>
  <div id="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/note">Edit Your Note</router-link>
      </li>
      <li>
        <router-link to="/movie-list">Movie List</router-link>
      </li>
      <li>
        <router-link to="/about">About Note</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue Note'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
#hello {
  margin: 40px auto;
  h1 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;

    & > li {
      display: inline-block;
      margin: 0 10px;
    }

    & > li a {
      color: #42b983;
    }
  }
}
</style>

<template>
	<div id="secondcomponent">
    <h1>I am second page</h1>
    <ul>
      <li v-for="article of articles">
        {{article.title}}
      </li>
    </ul>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: '微信公众号 jinkey-love',
      articles: []
    }
  },
  mounted () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      headers: {

      },
      emulateJSON: true
    }).then(function (response) {
      // 这里是处理正确的回调
      this.articles = response.data.subjects
    }, function (response) {
      // 这里是处理错误的回调
      console.log(response)
    })
  }
}
</script>

<style>
  
</style>
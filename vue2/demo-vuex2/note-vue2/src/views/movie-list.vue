<template>
  <div id='movie-list'>
    <el-card class="clearfix" v-loading.body="loading" element-loading-text="玩命加载中" :data="movies">
      <span style="line-height: 36px;">今日推荐</span>
      <ul>
        <li v-for="(movie, index) of movies">
          {{index < 9 ? '0' + ++index : ++index}}--{{movie.title}}
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      movies: [],
      loading: true
    }
  },
  mounted () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      headers: {},
      emulateJSON: true
    }).then(function (response) {
      this.movies = response.data.subjects
      this.loading = false
    }, function (response) {
      console.log(response)
      this.loading = false
    })
  }
}
</script>

<style scoped lang='less'>
#movie-list {
  ul {
    list-style: none;
    & > li {
      text-align: left;
    }
  }
}
</style>
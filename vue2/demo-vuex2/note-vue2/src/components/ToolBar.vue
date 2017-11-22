<template>
  <div id="toolbar">
    <i class="el-icon-plus" @click="addNote"></i> 
    <!-- <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'addNote'
    ])
  }
}
</script>

<style lang='less'>
#toolbar {
}
</style>
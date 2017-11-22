<template>
  <section id="note-list">
    <ul class="notes">
      <li v-for="(note, index) of notes">
        <label>
          <span @click="updateActiveNote(note)">{{note.title}}</span> 
          <i class="el-icon-close" @click="deleteNote(index)"></i>
        </label>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    notes () {
      return this.$store.state.note.notes
    }
  },
  methods: {
    ...mapActions([
      'updateActiveNote',
      'deleteNote'
    ])
  }
}
</script>

<style lang="less">
#note-list {
  ul.notes {
    list-style: none;
  }
}
</style>
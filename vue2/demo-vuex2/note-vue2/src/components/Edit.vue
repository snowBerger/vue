<template>
  <div id="note-edit">
    <el-input type="textarea" placeholder="请输入内容" :autosize="{minRows: 2}" :value="activeNoteText" @input="editNote"></el-input>
    <!-- <textarea :value="activeNoteText" @input="editNote"></textarea> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    activeNoteText () {
      return this.$store.state.note.activeNote.text
    }
  },
  methods: {
    ...mapActions([
      'editNote'
    ])
  }
}
</script>
<template>
  <div id="note">
    <el-row>
      <el-col :span="4">
        <el-row :gutter="8">
          <tool-bar></tool-bar>      
        </el-row>
        <el-row :gutter="8">
          <note-list></note-list>
        </el-row>
        <span>笔记总数：{{noteTotalCount}}</span>
      </el-col>
      <el-col :span="20">
        <edit></edit>
        <span>当前大小：{{activeNoteSize}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ToolBar from '../components/ToolBar'
import NoteList from '../components/NoteList'
import Edit from '../components/Edit'
import { mapGetters } from 'vuex'

export default {
  name: 'note',
  components: {
    ToolBar,
    NoteList,
    Edit
  },
  computed: {
    ...mapGetters([
      'noteTotalCount',
      'activeNoteSize'
    ])
  }
}
</script>

<style scoped lang='less'>
#note {
}
</style>
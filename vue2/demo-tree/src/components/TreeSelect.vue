<template>
  <div class="tree-select">
    <ul class="tree" v-for="model in treeData">
      <tree :model="model" :root-name="rootName" @updateCheckedList="updateCheckedList"></tree>
    </ul>
    <list class-name="checked-list" :title="listTitle" :data="checkedList" :delClick="delClick"></list>
  </div>
</template>

<script>
import Tree from './Tree'
import List from './List'

export default {
  data () {
    return {
      checkedList: {}
    }
  },
  props: {
    rootName: {
      type: String
    },
    listTitle: {
      type: String
    },
    treeData: {
      type: Array,
      default: () => []
    }
  },
  components: { Tree, List },
  methods: {
    // 更新checkedList
    updateCheckedList (member, check) {
      if (check) this.checkedList[member.user_id] = member
      else delete this.checkedList[member.user_id]
      this.checkedList = Object.assign({}, this.checkedList)
    },
    // 列表删除事件
    delClick (userId) {
      delete this.checkedList[userId]
      this.checkedList = Object.assign({}, this.checkedList)
      this.treeData.forEach(model => {
        this.delMember(model, userId)
      })
    },
    // 更新model选中状态
    delMember (model, userId) {
      let _isFind = false
      model.check = false
      model.member && model.member.forEach(member => {
        if (+member.user_id === +userId) {
          member.check = false
          _isFind = true
        }
      })
      if (!_isFind) {
        model.node && model.node.forEach(node => {
          this.delMember(node, userId)
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .tree-select {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ul.tree {
      width: 50%;
      margin: 20px auto;
      padding-right: 30px;
      overflow: auto;
    }
    .checked-list {
      position: relative;
      width: 50%;
      margin: 20px auto;
      padding-right: 30px;
      overflow: hidden;
    }
  }
</style>

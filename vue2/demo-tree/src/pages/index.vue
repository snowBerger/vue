<template>
  <div class="main">
    <tree-select :tree-data="treeData" v-bind="rootInfo"></tree-select>
  </div>
</template>

<script>
import TreeSelect from '../components/TreeSelect'
import sourceData from './members'

export default {
  data () {
    return {
      rootInfo: {
        rootName: '我的企业',
        listTitle: '直属成员'
      },
      treeData: [sourceData.data]
    }
  },
  components: { TreeSelect },
  mounted () {}
}
</script>

<style lang="less" scoped>
  .main {
    width: 100%;
    height: 100%;
  }
</style>

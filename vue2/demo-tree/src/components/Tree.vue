<template>
  <li class="li-item">
    <div class="item-top">
      <div class="top-l" @click="model.open = !model.open">
        <span class="top-bar iconfont icon-jiantou-copy" :class="model.open ? 'open' : null"></span>
        <span class="top-icon iconfont" :class="+model.id === 0 ? 'icon-caidantubiao-02' : 'icon-wenjianjia'"></span>
        <span class="top-name">{{ +model.id === 0 ? rootName : model.name }}</span>
      </div>
      <span class="top-check iconfont" :class="model.check ? 'icon-checkbox-sel' : 'icon-checkboxempty'" @click="nodeCheck(model, !model.check)"></span>
    </div>
    <ul class="item-content" v-show="model.open">
      <li class="li-member" v-for="member in model.member" @click="memberCheck(member, !member.check)">
        <div class="member-l">
          <img :src="member.avatar" alt="未" v-if="member.avatar"/>
          <span class="img-default" v-if="!member.avatar">未</span>
          <span class="member-name" v-text="member.nickname + '(' + member.real_name + ')'"></span>
        </div>
        <span class="member-check iconfont" :class="member.check ? 'icon-checkbox-sel' : 'icon-checkboxempty'"></span>
      </li>
      <tree v-for="item in model.node" :model="item" :key="item.id" @updateCheckedList="updateCheckedList"></tree>
    </ul>
  </li>
</template>

<script>

export default {
  name: 'tree',
  data () {
    return {}
  },
  props: {
    rootName: {
      type: String
    },
    model: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    isFolder () {
      return this.model.node && this.model.node.length
    }
  },
  mounted () {
    this.initModel()
  },
  methods: {
    // 数据初始化
    initModel () {
      this.$set(this.model, 'open', false)
      this.$set(this.model, 'check', false)
      this.model.member && this.model.member.forEach(member => this.$set(member, 'check', false))
    },
    // 父节点check事件
    nodeCheck (model, _check) {
      model.check = _check
      model.open = _check
      model.member && model.member.forEach(member => {
        member.check = _check
        this.updateCheckedList(member, _check)
      })
      model.node && model.node.forEach(node => { this.nodeCheck(node, _check) })
      this.updateAncestorsCheck(this.$parent)
    },
    // 子节点check事件
    memberCheck (member, _check) {
      member.check = _check
      this.model.check = this.getModelCheckStatus(this.model)
      this.updateAncestorsCheck(this.$parent)
      this.updateCheckedList(member, _check)
    },
    updateCheckedList (member, _check) {
      this.$emit('updateCheckedList', member, _check)
    },
    // 递归更新祖先节点选中状态
    updateAncestorsCheck (parent) {
      if (!parent.model) return
      parent.model.check = this.getModelCheckStatus(parent.model)
      this.updateAncestorsCheck(parent.$parent)
    },
    // 获取指定节点的选中状态
    getModelCheckStatus (model) {
      if (model.member) {
        for (let i = 0, l = model.member.length; i < l; i++) {
          if (!model.member[i].check) return false
        }
      }
      if (model.node) {
        for (let i = 0, l = model.node.length; i < l; i++) {
          if (!model.node[i].check) return false
        }
      }
      return true
    }
  }
}
</script>

<style lang="less" scoped>
  @font-size: 14px;
  @font-color: #333;
  @iconfont-size: 18px;
  @iconfont-color: #999;

  li {
    list-style: none;
    text-align: left;
    margin: 10px 0;
    .iconfont {
      display: inline-block;
    }
  }
  .li-item {
    .top-check,
    .member-check {
      font-size: @iconfont-size;
      line-height: @iconfont-size;
    }
    .icon-checkboxempty {
      color: @iconfont-color;
    }
    .icon-checkbox-sel {
      color: #1AABFB;
    }
    .item-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .top-l {
        display: flex;
        flex-direction: row;
        align-items: center;
        .iconfont {
          font-size: @iconfont-size;
          line-height: @iconfont-size;
        }
        .top-bar {
          color: @iconfont-color;
          transition: all .5s;
        }
        .top-bar.open {
          transform: rotateZ(90deg);
        }
        .top-icon {
          margin-left: 10px;
        }
        .icon-wenjianjia {
          color: #9FE3FA;
        }
        .icon-caidantubiao-02 {
          color: #a2a2a2;
        }
        .top-name {
          margin-left: 15px;
          font-size: @font-size;
          color: @font-color;
        }
      }
    }
    .item-content {
      .li-member {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        .member-l {
          max-width: 90%;
          display: flex;
          flex-direction: row;
          align-items: center;
          & > img,
          .img-default {
            width: 24px;
            height: 24px;
            border-radius: 50%;
          }
          .img-default {
            background: #1971C1;
            font-size: 12px;
            color: #fff;
            line-height: 24px;
            text-align: center;
          }
          .member-name {
            max-width: 75%;
            margin-left: 15px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            color: @font-color;
            font-size: @font-size;
          }
        }
      }
    }
  }
</style>

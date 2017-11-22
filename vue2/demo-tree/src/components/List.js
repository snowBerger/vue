import './List.less'

export default {
  functional: true,
  render (h, context) {
    let listContent = []
    if (context.props.data) {
      for (let key in context.props.data) {
        let _item = context.props.data[key]
        listContent.push(
          <li class="item">
            <div class="item-l">
              { _item.avatar ? <img src={ _item.avatar } alt="未"/> : <span class="img-default">未</span> }
              <span>{ _item.nickname + '(' + _item.real_name + ')' }</span>
            </div>
            <span class="iconfont icon-guanbi2" on-click={ context.props.delClick.bind(null, _item.user_id) }></span>
          </li>
        )
      }
    }
    return (
      <div class={ 'list ' + context.props.className }>
        <div class="title">{ context.props.title + '数 ' + Object.keys(context.props.data).length }</div>
        <ul>
          { listContent }
        </ul>
      </div>
    )
  },
  props: {
    className: {
      type: String
    },
    title: {
      type: String
    },
    data: {
      type: Object,
      default: () => {}
    },
    delClick: {
      type: Function,
      default: () => {}
    }
  }
}

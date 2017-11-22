(function (Vue, global) {

  Vue.component('vue-widget-tab', {
    props: {
      items: Array,
      activeIndex: {
        twoWay:true,
        type: Number,
        default: -1
      }
    },
    template: '<div data-active-index="{{activeIndex}}" class="vue-widget-tab"><div class="item" data-active="{{$index==activeIndex}}" v-for="item in items" @click="item_click($index)">{{item.text}}</div><b class="bar-slide" :style="{left:activeIndex * 33.33 +\'%\'}"></b></div>',
    methods: {
      item_click: function (inIndex) {
        this.items.map(function (item) {
          item.active = false;
        });
        this.items[inIndex].active = true;
        this.activeIndex = inIndex;
      }
    }
  });

}(Vue, window));

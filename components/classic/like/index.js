// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type: Boolean,
      value: false,
      observer:function(){
      }
    },
    count:{
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc:'../../images/like/likeicon@2x.png',
    noSrc:'../../images/like/unlikeicon@2x.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onlike:function(event){
      // 自定义方法
      let like = this.properties.like
      let count = this.properties.count
      count = like?count-1:count+1
      // console.log(count)
      this.setData({
        count:count,
        like:!like
      })
      //激活
      let behavior = this.properties.like?"like":"cancel"
      console.log(behavior)
      this.triggerEvent('like',{
        behavior: behavior
      },{})
    }
  }
})

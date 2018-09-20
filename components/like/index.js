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
    yesSrc:'../images/like/likeicon@2x.png',
    noSrc:'../images/like/unlikeicon@2x.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onlike:function(event){
      console.log(123)
    }
  }
})

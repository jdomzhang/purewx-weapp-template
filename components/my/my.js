const { regeneratorRuntime } = global

// components/my/my.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    async onClickHello () {
      let echo = await sayHello()
      wx.showModal({ title: `${this.apiRoot}`, content: `From Server: ${echo}`, showCancel: false })
    }
  }
})

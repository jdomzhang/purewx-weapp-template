const { regeneratorRuntime } = global
import base from '../../behaviors/base'
import { sayHello } from '../../services/index'

// components/my/my.js
Component({
  behaviors: [base],

  options: {
    addGlobalClass: true,
  },

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

  attached () {
    console.log('this.data.apiRoot', this.data.apiRoot)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async onClickHello () {
      let echo = await sayHello()
      wx.showModal({ title: `${this.data.apiRoot}`, content: `From Server: ${echo}`, showCancel: false })
    }
  }
})

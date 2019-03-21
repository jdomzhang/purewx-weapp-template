let regeneratorRuntime = global.regeneratorRuntime

import base from '../../behaviors/base'
import auth from '../../behaviors/auth'

Component({
  behaviors: [base, auth],

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

  },

  async attached() {
    console.log("userAuth is attached")
    this.log('userAuth is attached')
    await this.checkUserAuth()
  }
})

let regeneratorRuntime = global.regeneratorRuntime

import auth from '../../behaviors/auth'
import base from '../../behaviors/base'
import login from '../../behaviors/login'

import { getVersion } from '../../services/index'

Component({
  behaviors: [auth, base, login],

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

  async attached () {
    this.log('page base attached')
    let user = await this.checkUserLogin()

    // check if user has authorized
    if (global.hasUserAuthorized === undefined) {
      global.hasUserAuthorized = await this.checkUserAuth() === true
    }

    if (global.versionNumber === undefined) {
      try { 
        global.versionNumber = await getVersion()
      } catch (e) {
        // do nothing
        global.versionNumber = '1.0.1'
      }
    }

    this.triggerEvent('userLoaded', user, {bubbles: true})
  }
})

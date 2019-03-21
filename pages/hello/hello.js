const { regeneratorRuntime } = global

import {sayHello} from '../../services/index.js'

// pages/hello/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '阿凡达',
    list: ['甲', '乙', '丙', '丁']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /********************** Custom Methods******************** */
  async onHelloClicked (e) {
    console.log(e)
    var item = e.target.dataset.item || ''
    // let x = Date.now()
    let msg = await sayHello()
    this.setData({name: `${item} - ${msg}`})
  },

  onUserLoaded (e) {
    console.log('user loaded', e)
  }
})
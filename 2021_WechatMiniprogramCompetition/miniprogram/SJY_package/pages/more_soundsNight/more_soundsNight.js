// SJY_package/pages/more_soundsNight/more_soundsNight.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicNight1: '',
    musicNight2: '',
    musicNight3: '',
    musicNight4: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      musicNight1: app.globalData.musicDataNight1,
      musicNight2: app.globalData.musicDataNight2,
      musicNight3: app.globalData.musicDataNight3,
      musicNight4: app.globalData.musicDataNight4
    })
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

  }
})
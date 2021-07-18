// pages/night/night.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    more_data:[
      {info_up:"睡眠冥想", info_down:"专注于你的呼吸. 放松入眠", src:"/images/article_night.png", picPath:"../../images/pic_night1.jpeg", url:"/SJY_package/pages/article_night1/article_night1"},
      {info_up:"改善睡眠", info_down:"睡眠环境. 饮食", src:"/images/article_night.png", picPath:"../../images/pic_night2.png", url:"/SJY_package/pages/article_night2/article_night2"}
    ]
  },
  play() {
    wx.navigateTo({
      url: '/BJM_package/pages/shake/shake',
    })
    console.log("跳转播放页面");
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

  }
})
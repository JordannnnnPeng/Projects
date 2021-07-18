// pages/signv2/signv2.js
Page({
  data: {
    firstTime:'0',
    flag: false,
    dayStyle: [
      {month: 'current', day: new Date().getDate(), color: 'white', background: '#ff7b54'},
      {month: 'current', day: new Date().getDate(), color: 'white', background: '#ff7b54' }
    ],
  },
  signBindTap: function (){
    this.setData({
      flag: true
    });
    wx.showToast({
      title: '签到成功！',
      icon: 'success',
      duration: 1000,
      mask: true
    })
  },
  promptBindTap: function () {
    wx.showToast({
      title: '今日已经打卡',
      icon:'warning',
      duration:1000,
      mask:true
    })
  },
  onShow:function(options){
    
  },
  dayClick: function (event) {
    let clickDay = event.detail.day;
    let changeBgColor = `dayStyle[0].color`;
    let changeBg = `dayStyle[0].background`;
    let changeDay = `dayStyle[1].day`;
    let changeEndBg = `dayStyle[1].background`;
 
    this.setData({
      [changeDay]: clickDay,
      [changeBg]:"rgba(255,255,255,0)",
      [changeBgColor]:"#ffb26b",
      [changeEndBg]: "#ff7b54"
    })
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
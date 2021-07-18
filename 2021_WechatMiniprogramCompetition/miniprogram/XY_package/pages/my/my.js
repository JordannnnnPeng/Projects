// pages/user/user.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    isnolog: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    menuitems: [      { 
      text: '音频收藏', url: '/XY_package/pages/collect/collect', icon: '/XY_package/images/star.png', tips: '查看你收藏的音乐', arrows: '/XY_package/images/arrows.png' },
      {text: '冥想打卡', url: '/XY_package/pages/signv2/signv2', icon: '/XY_package/images/check.png', tips: '坚持打卡，记录你的冥想', arrows: '/XY_package/images/arrows.png' },
      { text: '冥想手册', url: '/XY_package/pages/handbook/handbook', icon: '/XY_package/images/text.png', tips: '如果你是新手，点击此了解冥想', arrows: '/XY_package/images/arrows.png' },
      { text: '意见反馈', url: '/XY_package/pages/feedback/feedback', icon: '/XY_package/images/mail.png', tips: '如果对我们有任何意见，点击向我们提出你的意见', arrows: '/XY_package/images/arrows.png' },
    ],
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/like.svg?sign=7d83824b68f1876b9a50b7d34e70fe61&t=1622035931',
      to: '/XY_package/pages/collect/collect'
    }, {
      id: 1,
        type: 'image',
        url: 'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/day.jpeg?sign=37d5d8ba8d13c90f882b7e28a2532a6e&t=1622035944',
        to: '/XY_package/pages/signv2/signv2'
    }, {
      id: 2,
      type: 'image',
      url: 'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/book.png?sign=30e6a4deae3fe02c2579b5c1784711a6&t=1622035955',
      to: '/XY_package/pages/handbook/handbook'
    }, 
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (e) {
    var that = this;
    if (app.globalData.userInfo) {
      that.setUserInfo(app.globalData.userInfo);
    } else if (that.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setUserInfo(res.userInfo);
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          that.setUserInfo(res.userInfo);
        }
      })
    }
    this.towerSwiper('swiperList');
  },
 
  getUserInfo: function (e) {
    this.setUserInfo(e.detail.userInfo);
    console.log(e.detail.userInfo);
    wx.login({
      success: res => {
        // 获取到用户的 code 之后：res.code
        console.log("用户的code:" + res.code);
        wx.request({
              // 自行补上自己的 APPID 和 SECRET
              url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx5ea0bf98f31826e2&secret=ceeb5c6a3440fecfca57296d8e825c4a&js_code=' + res.code + '&grant_type=authorization_code',
              success: res => {
                  app.globalData.openid = res.data.openid
                  console.log(app.globalData.openid)
              }
          });
      }
    })
  },
 
  setUserInfo: function (userInfo) {
    if (userInfo != null) {
      app.globalData.userInfo = userInfo
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true,
        isnolog: true
      })
    }
  },

  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
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

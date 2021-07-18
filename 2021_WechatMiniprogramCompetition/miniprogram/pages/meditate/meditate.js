// pages/meditate/meditate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  //   more_data:[
  //     {info_up:"了解冥想", info_down:"给大脑一点空间. 提高你的专注力", src:"/images/article.png", url:"/SJY_package/pages/article_medi1/article_medi1", picPath:"../../images/pic1.png"},
  //     {info_up:"如何冥想", info_down:"闭上双眼. 冥想三步", src:"/images/article.png", url:"/SJY_package/pages/article_medi2/article_medi2", picPath:"../../images/pic2.png"},
  //     {info_up:"更多冥想训练", info_down:"饮食正念. Walk Meditation", src:"/images/article.png", url:"/SJY_package/pages/article_medi3/article_medi3", picPath:"../../images/pic4.jpeg"}
  // ]
  },
  toQQ(){
    wx.navigateToMiniProgram({
      appId: 'wxada7aab80ba27074',							
      path: 'pages/home/home',
      extraData: {},
      envVersion: 'release',		
      success(res) {

        // 打开成功
      },
      fail(res){
      //打开失败
    }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000) 
  },
  play() {
    wx.navigateTo({
      url: '/BJM_package/pages/play_meditate/play_meditate',
      success: function (res) {
        var page = getCurrentPages().pop();  
        if (page == undefined || page == null) return;  
        page.onLoad();
        // console.log(page)  
        console.log("ok")
        // console.log("addAttentionService.add: " + code)
      }
    })
    console.log("跳转播放页面");
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
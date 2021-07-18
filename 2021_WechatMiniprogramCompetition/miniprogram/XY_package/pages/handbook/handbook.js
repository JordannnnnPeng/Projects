// pages/handbook/handbook.js
Page({

  /**
   * Page initial data
   */
  data: {
    menuitems_1: [
      { text: '1. 什么是冥想?', url: '/XY_package/pages/answer/q1/q1', icon: '', tips: '', arrows: '' },
      { text: '2. 冥想帮助我们提高专注，调节情绪，改善睡眠的科学依据是什么?', url: '/XY_package/pages/answer/q3/q3', icon: '', tips: '', arrows: '/' },
      { text: '3. 不同类型冥想之间的差别是什么?', url: '/XY_package/pages/answer/q5/q5', icon: '', tips: '', arrows: '' }
    ],
    menuitems_2: [
      { text: '1. 我们应该选择什么时间冥想？', url: '/XY_package/pages/answer/q6/q6', icon: '', tips: '', arrows: '' },
      { text: '2. 每次冥想的时间应该多长？', url: '/XY_package/pages/answer/q7/q7', icon: '', tips: '', arrows: '' },
      { text: '3. 如何更快速的进入冥想状态?', url: '/XY_package/pages/answer/q8/q8', icon: '', tips: '', arrows: '' },
      { text: '4. 练习时应该怎么调整呼吸?', url: '/XY_package/pages/answer/q9/q9', icon: '', tips: '', arrows: '' },
      { text: '5. 冥想过程中有杂念，容易分神怎么办?', url: '/XY_package/pages/answer/q10/q10', icon: '', tips: '', arrows: '' },
      { text: '6. 冥想过程中遇到负面情绪怎么办?', url: '/XY_package/pages/answer/q11/q11', icon: '', tips: '', arrows: '' },
      { text: '7. 练习冥想时睡着了怎么办?', url: '/XY_package/pages/answer/q12/q12', icon: '', tips: '', arrows: '' },
      { text: '8. 怎样才能知道我的冥想练习取得了效果?', url: '/XY_package/pages/answer/q13/q13', icon: '', tips: '', arrows: '' },
    ],
    menuitems_3: [
      { text: '1. 我们应该如何设定自己使用呼吸冥想小程序的目标？', url: '/XY_package/pages/answer/q14/q14', icon: '', tips: '', arrows: '' },
      { text: '2. 如果做不到冥想音频中的要求，我应该怎么办？', url: '/XY_package/pages/answer/15/q15', icon: '', tips: '', arrows: '' },
      { text: '3. 冥想音频中“空白的时间让我感到焦虑、不安、无助，我应该怎么办？', url: '/XY_package/pages/answer/q16/q16', icon: '', tips: '', arrows: '' },
    ],

  },
   
    

    

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  navigate_to_my(){
    wx.switchTab({
      url: '/pages/my/my',
    })
   },
})
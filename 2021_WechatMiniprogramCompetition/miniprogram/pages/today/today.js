// miniprogram/pages/today/today.js
const app = getApp()
const db = wx.cloud.database()
const actlist = db.collection('actlist')
Page({

  /**
   * Page initial data
   */
  data: {
    current_time: "",
    current_time_period: "",
    greetings: "",
    acts: [],
    articles: [],
    cloud: 0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log("function defirst now")
    console.log(app.globalData.openid)
    let that = this

    function dbfirst() {
      return new Promise(resolve => {
        db.collection('activity_list').where({
          _id: app.globalData.openid
        }).get({
          success: function (res) {
            if (res.data.length == 0) {
              console.log("function defirst user_not_exist")
              resolve("user_not_exist")
            }
            app.globalData.act_array = res.data[0].act_list
            console.log(app.globalData.act_array)
            this.acts = app.globalData.act_array
            this.cloud = 1
            console.log("function defirst over")
            resolve("dbfirst")
          }
        })
      })
    }

    function newbee() {
      console.log("function newbee now")

      return new Promise(resolve => {
        app.globalData.act_array = [
          ["冥想 平静 专注", "早晨", "稍稍休息一下", "https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/s1.webp?sign=fb9a077c791f269b67d73d1ef5e59ece&t=1622078659", "navigate_to_play_meditate", 1, "cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/雨声.mp3"],
          ["白噪音 轻松进入学习状态", "下午", "学习", "../../images/study.jpeg", "navigate_to_more_sounds", 1, "cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/雨声.mp3"],
          ["睡眠 自然进入梦乡", "夜晚", "准备睡觉", "../../images/N1.png", "navigate_to_play_sleep", 1, "cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/雨声.mp3"]
        ]
        db.collection('activity_list').add({
          data: {
            _id: app.globalData.openid,
            act_list: [
              ["冥想 平静 专注", "早晨", "稍稍休息一下", "https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/s1.webp?sign=fb9a077c791f269b67d73d1ef5e59ece&t=1622078659", "navigate_to_play_meditate", 1, "cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/雨声.mp3"],
              ["白噪音 轻松进入学习状态", "下午", "学习", "../../images/study.jpeg", "navigate_to_more_sounds", 1, "cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/雨声.mp3"],
              ["睡眠 自然进入梦乡", "夜晚", "准备睡觉", "../../images/N1.png", "navigate_to_play_sleep", 1, "cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/雨声.mp3"]
            ],
            likes: []
          }
        })
        console.log("function newbee over")
        resolve("newbee")
      })
    }
    async function next() {
      const result = await dbfirst()
      console.log(result)
      if (result == "user_not_exist") {
        const result2 = await newbee()
      }
      console.log(app.globalData.act_array)
      that.setData({
        current_time: h + "-" + m,
        current_time_period: current_time_period,
        greetings: greetings,
        acts: app.globalData.act_array,
        articles: app.globalData.article_array
      })
    }
    function getOpenid(){
      wx.cloud.callFunction({
    name:'getOpenid',
    complete:res=>{
    console.log('云函数获取到的openid:',res.result.openid)
    app.globalData.openid= res.result.openid;     
     console.log(app.globalData.openid)
  }
})
}
    getOpenid()
    next()


  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {},

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
    this.setData({
      acts: app.globalData.act_array,
    })
    console.log(app.globalData.openid)

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
  navigate_to_my() {
    wx.redirectTo({
      url: '/XY_package/pages/my/my',
    })
  },
  navigate_to_add() {
    wx.redirectTo({
      url: '/PC_package/pages/add_act/add_act',
    })
  },
  navigate_to_delete() {
    wx.redirectTo({
      url: '/PC_package/pages/delete/delete',
    })
  },
  navigate_to_0() {
    wx.redirectTo({
      url: '/PC_package/pages/article0/article0',
    })
  },
  navigate_to_1() {
    wx.redirectTo({
      url: '/PC_package/pages/article1/article1',
    })
  },
  navigate_to_2() {
    wx.redirectTo({
      url: '/PC_package/pages/article2/article2',
    })
  },
  navigate_to_3() {
    wx.redirectTo({
      url: '/PC_package/pages/article3/article3',
    })
  },
  navigate_to_4() {
    wx.redirectTo({
      url: '/PC_package/pages/article4/article4',
    })
  },
  navigate_to_play_meditate() {
    wx.redirectTo({
      url: '/BJM_package/pages/play_meditate/play_meditate',
    })
  },
  navigate_to_play_sleep() {
    wx.redirectTo({
      url: '/BJM_package/pages/play_sleep/play_sleep',
    })
  },
  navigate_to_more_sounds() {
    wx.redirectTo({
      url: '/SJY_package/pages/more_sounds/more_sounds',
    })
  },
})
/////////////////////////////////////////////////////////////获取时间
var timestamp =
  Date.parse(new Date());
//返回当前时间毫秒数
timestamp = timestamp / 1000;
//获取当前时间
var n = timestamp * 1000;
var date = new Date(n);
//年
var Y = date.getFullYear();
//月
var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
//日
var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//时
var h = date.getHours();
//分
var m = date.getMinutes();
//秒
var s = date.getSeconds();
var current_time_period;
var greetings;
if (5 <= h && h < 10) {
  current_time_period = "morning";
  greetings = "早上好";
} else if (10 <= h && h < 13) {
  current_time_period = "midday";
  greetings = "中午好";
} else if (13 <= h && h < 17) {
  current_time_period = "afternoon";
  greetings = "下午好";
} else if (17 <= h && h < 21) {
  current_time_period = "evening";
  greetings = "晚上好";
} else if ((21 <= h && h < 24) || (0 <= h && h < 5)) {
  current_time_period = "night";
  greetings = "该睡个好觉了"
}
/////////////////////////////////////////////////////////////获取时间
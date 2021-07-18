// miniprogram/pages/add_act/add_act.js
const app = getApp()
const db = wx.cloud.database()
const actlist = db.collection('actlist')
Page({

  /**
   * Page initial data
   */
  data: {
    actArray:["冥想 平静 专注","白噪音 轻松进入学习状态","睡眠 自然进入梦乡"],
    timeArray:["早晨","下午","夜晚"],
    timeIndex: 0,
    add_type:"冥想 平静 专注",
    add_time:"",
    add_note:"",
    musicList:[
      {src:"../../images/下雨.svg", name:"雨声", music:"cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/雨声.mp3", id:1},
      {src:"../../images/海浪.svg", name:"海浪", music:"cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/水声.mp3", id:2},
      {src:"../../images/fire.svg", name:"火焰",music:"cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/火焰.mp3", id:3},
      {src:"../../images/forest.jpeg", name:"森林",music:'cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/鸟叫.mp3', id:4}
    ],
    musicArray:[
      "雨声","海浪","火焰","森林"
    ],
    musicIndex:0,
    add_music_id:0,
    add_music_name:"",
    add_music_music:""
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
  bindtimePickerChange: function (e) {
    if (e.detail.value == 1) {
     this.setData({ reply: true })
    } else {
     this.setData({ reply: false })
    }
    this.setData({
     timeIndex: e.detail.value
    })
   },

// 检查你要跳转的位置是否位于TabBar中，如果是的话，要使用wx.switchTab 来跳转界面
   navigate_to_today(){
    wx.switchTab({
      url: '/pages/today/today',
    })
   },
   
//  delay:function(milSec){
//   return new Promise(resolve => {
 
//     setTimeout(resolve, milSec)
 
//   })
//  },

   bindtimePickerChange: function (e) {
    if (e.detail.value == 1) {
     this.setData({ reply: true })
    } else {
     this.setData({ reply: false })
    }
    this.setData({
     timeIndex: e.detail.value
    })
   },
   bindmusicPickerChange: function (e) {
    if (e.detail.value == 1) {
     this.setData({ reply: true })
    } else {
     this.setData({ reply: false })
    }
    this.setData({
      musicIndex: e.detail.value
    })
   },

   save_note:function(e){
    var value = e.detail.value;
    this.setData({
      note:value
    });
    // 直接赋值给全局变量
    this.data.add_note=value;
    // console.log(this.data.add_note)
   },
   
   save_type:function(e){
   // 将本地变量赋值给全局变量
    this.data.add_type=this.data.actArray[e.detail.currentItemId];
    // console.log(this.data.add_type)
   },
   save_info:function(e){
    
    this.data.add_time=this.data.timeArray[this.data.timeIndex];
    this.data.add_music_name=this.data.musicArray[this.data.musicIndex];

    // console.log(this.data.add_time)
    var act_all_info=[this.data.add_type,this.data.add_time,this.data.add_note]
    
    // console.log(app.globalData.act_array);
    if (this.data.add_type=="冥想 平静 专注"){
      act_all_info.push("https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/s1.webp?sign=fb9a077c791f269b67d73d1ef5e59ece&t=1622078659")
      act_all_info.push("navigate_to_play_meditate")
    }
    else if(this.data.add_type=="白噪音 轻松进入学习状态"){
      act_all_info.push("../../images/H1.png")
      act_all_info.push("navigate_to_more_sounds")
    }
    else if(this.data.add_type=="睡眠 自然进入梦乡"){
    act_all_info.push("../../images/N1.png")
    act_all_info.push("navigate_to_play_sleep")}
    
    if(this.data.add_music_name=="雨声"){
      act_all_info.push(1)
      act_all_info.push("cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/水声.mp3")
    }
    else if(this.data.add_music_name=="海浪"){
      act_all_info.push(2)
      act_all_info.push("cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/雨声.mp3")
    } 
    else if(this.data.add_music_name=="火焰"){
      act_all_info.push(3)
      act_all_info.push("cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/火焰.mp3")
    } 
    else if(this.data.add_music_name=="森林"){
      act_all_info.push(4)
      act_all_info.push('cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/鸟叫.mp3')
    } 
    app.globalData.act_array.push(act_all_info);
    // wx.showToast({
    //   title: '创建成功',
    //   duration:1000
    // })
    db.collection('activity_list').where({_id:app.globalData.openid}).update({
      // data 传入需要局部更新的数据
      data: {
        act_list:app.globalData.act_array
      },
      success: function(res) {
        console.log(res.data)
      }
    })
    wx.switchTab({
      url: '/pages/today/today',
    })
   }
   
})
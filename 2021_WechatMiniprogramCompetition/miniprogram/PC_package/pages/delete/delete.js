// miniprogram/pages/delete/delete.js
const app = getApp()
const db = wx.cloud.database()
const actlist = db.collection('actlist')
import { getSetting, chooseAddress, openSetting, showModal ,showToast} from "../../utils/asyncWx.js";
Page({

  /**
   * Page initial data
   */
  data: {
    acts:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      
      acts:app.globalData.act_array
    })
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
  navigate_to_today(){
    wx.switchTab({
      url: '/pages/today/today',
    })
   },
   async delete(e){
    const res = await showModal({ content: "您是否要删除？" });
      if (res.confirm) {
        // console.log(e.target.id)
        app.globalData.act_array.splice(e.target.id,1);
        db.collection('activity_list').where({_id:app.globalData.openid}).update({
          // data 传入需要局部更新的数据
          data: {
            act_list:app.globalData.act_array
          },
          success: function(res) {
            console.log(res.data)
          }
        })
        wx.redirectTo({
          url: '/PC_package/pages/free/free',
        })
      }
     else {
    }
 }
})
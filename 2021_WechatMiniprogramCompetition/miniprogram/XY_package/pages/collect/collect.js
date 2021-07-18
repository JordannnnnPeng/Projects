// XY_package/pages/collect/collect.js
const app = getApp();
wx.cloud.init();
const db=wx.cloud.database()
Page({
  data: {
    collectMusic:[],
    index:null,
    isCollectedHere:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    app.globalData.musicData1.forEach(function(item, index){
      let idHere=item.id;
      let detailStorage=wx.getStorageSync('isCollected'+idHere)
      console.log(detailStorage)
      if(detailStorage[that.data.index] == true){
        that.setData({
          isCollectedHere: true
        })
      }else{
        that.setData({
          isCollectedHere: false
        })
      }
      console.log("即将进入if")
      console.log(that.data.isCollectedHere)
      if (that.data.isCollectedHere) {
        console.log("进来了")
        var obj={};
        obj.src=item.src;
        obj.name=item.name;
        obj.music=item.music;
        obj.id=item.id;
        let collectMusic = that.data.collectMusic;
        collectMusic.push(obj);
        db.collection('activity_list').where({_id:app.globalData.openid}).update({
          data:{
            likes:that.data.collectMusic
          },
          success:function(res){
            console.log(res.data)
          }
        })
        // that.setData({
        //   collectMusic
        // })
      }
    })
    app.globalData.musicData2.forEach(function(item, index){
      let idHere=item.id;
      let detailStorage=wx.getStorageSync('isCollected'+idHere)
      console.log(detailStorage)
      if(detailStorage[that.data.index] == true){
        that.setData({
          isCollectedHere: true
        })
      }else{
        that.setData({
          isCollectedHere: false
        })
      }
      console.log("即将进入if")
      console.log(that.data.isCollectedHere)
      if (that.data.isCollectedHere) {
        console.log("进来了")
        var obj={};
        obj.src=item.src;
        obj.name=item.name;
        obj.music=item.music;
        obj.id=item.id;
        let collectMusic = that.data.collectMusic;
        collectMusic.push(obj);
        db.collection('activity_list').where({_id:app.globalData.openid}).update({
          data:{
            likes:that.data.collectMusic
          },
          success:function(res){
            console.log(res.data)
          }
        })
        // that.setData({
        //   collectMusic
        // })
      }
    })
    app.globalData.musicData3.forEach(function(item, index){
      let idHere=item.id;
      let detailStorage=wx.getStorageSync('isCollected'+idHere)
      console.log(detailStorage)
      if(detailStorage[that.data.index] == true){
        that.setData({
          isCollectedHere: true
        })
      }else{
        that.setData({
          isCollectedHere: false
        })
      }
      console.log("即将进入if")
      console.log(that.data.isCollectedHere)
      if (that.data.isCollectedHere) {
        console.log("进来了")
        var obj={};
        obj.src=item.src;
        obj.name=item.name;
        obj.music=item.music;
        obj.id=item.id;
        let collectMusic = that.data.collectMusic;
        collectMusic.push(obj);
        db.collection('activity_list').where({_id:app.globalData.openid}).update({
          data:{
            likes:that.data.collectMusic
          },
          success:function(res){
            // console.log(res.data)
          }
        })
       
      }
    })
    function dbfirst(){
      return new Promise(resolve=>{
    db.collection('activity_list').where({
      _id:app.globalData.openid
    }).get({
      success:function(res){
        // console.log(4)
        // console.log(res.data[0].likes)
        app.globalData.collectMusic=res.data[0].likes
        // console.log(app.globalData.collectMusic)
        // console.log(that.collectMusic)
        resolve("dbfirst")
      }
    })
  })}
  async function next(){
    const result=await dbfirst()
    console.log(result)
    //必须有setdata这一步才能显示出来
    that.setData({
      collectMusic:app.globalData.collectMusic 
    })
  }
  next()
    
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
    // wx.showNavigationBarLoading() //在标题栏中显示加载
    // wx.startPullDownRefresh({
    //   success: (res) => {
        
    //   },
    // })
    // //模拟加载
    // setTimeout(function()
    // {
    //   // complete
    //   wx.hideNavigationBarLoading() //完成停止加载
    //   wx.stopPullDownRefresh() //停止下拉刷新
    // },1500);
    this.setData({
      collectMusic:app.globalData.collectMusic
    })
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
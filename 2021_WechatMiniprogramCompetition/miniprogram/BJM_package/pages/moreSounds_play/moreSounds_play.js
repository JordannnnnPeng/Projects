// pages/play_meditate/play_meditate.js
wx.cloud.init()
const dayjs = require('dayjs')
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = false 
if (wx.setInnerAudioOption) {
  wx.setInnerAudioOption({
    obeyMuteSwitch: false,
    autoplay: true
  })
}else {
  myaudio.obeyMuteSwitch = false;
  myaudio.autoplay = true;
}
Page({
  data: {
    id: '',
    musicSrc: '',
    isCollected: false,
    detailObj: {},
    index: null,
    play: false,
    image: {
      play: '../../images/播放_full.png',
      pause: '../../images/pause.png',
      clock: '../../images/time.png'
    },
    audioDuration: '',
    max: 0,
    value: 0,
    currentTime: '',
    flag: false,
    timeArray:["1min","2min","5min"],
    timeIndex: 0
    // audioTime: 0
  },
  handleCollection(){
    let isCollected = !this.data.isCollected
    this.setData({
      isCollected
    })
    wx.showToast({
      title: isCollected ? '收藏成功' : '取消收藏',
      icon:'success'
    })
    let {index} = this.data;
    wx.getStorage({
      key:'isCollected'+this.data.id,
      success:(data)=>{
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[index] = isCollected;
        wx.setStorage({
          key: 'isCollected'+this.data.id,
          data: obj,
          success: () => {
          }
        });
      }
    })
  },
  musicPlay() {
    innerAudioContext.play()
    this.setData({
      play: true
    })
    setInterval(()=>{
      if (this.data.flag == false){
        let a = dayjs(innerAudioContext.duration * 1000).format("mm:ss") //总时长 用dayjs对总时长进行处理
        let b = parseInt(innerAudioContext.duration) //滑块最大值
        let c = dayjs(innerAudioContext.currentTime * 1000).format('mm:ss') //当前时长
        let d = parseInt(innerAudioContext.currentTime) //滑块
        this.setData({
          audioDuration: a,
          max: b,
          currentTime: c,
          value: d
        })
        console.log('定时器', this.data.currentTime)
      }
    }, 1000)
  },
  musicPause(){
    innerAudioContext.pause()
    this.setData({
      play: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  changed1(e){
    console.log('拖动后', e.detail.value)
    let a = e.detail.value
    this.setData({
      flag: false,
    })
    innerAudioContext.seek(a)
  },
  changing(e){
    console.log('滑块数字', e.detail.value)
    let b = e.detail.value
    let a = dayjs(b * 1000).format("mm:ss")
    // console.log(a)
    this.setData({
      currentTime: a,
      flag: true
    })
  },
  onLoad: function (options) {
    console.log(options),
    this.setData({
      id: options.id,
      musicSrc: options.musicSrc
    })
    wx.showLoading({
      title: '音频加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000) 
    innerAudioContext.src = this.data.musicSrc
    innerAudioContext.onPlay(()=>{
    })
    innerAudioContext.onError((res)=>{
      console.log(res)
    })
    innerAudioContext.onPause(()=>{
    })
    
    let detailStorage = wx.getStorageSync('isCollected'+this.data.id)
    if (!detailStorage){
      //初始化一个空的对象
      wx.setStorageSync('isCollected'+this.data.id, {});
    }
    //如果收藏了
    if (detailStorage[this.data.index]){
      this.setData({
        isCollected: true
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
    innerAudioContext.stop()
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

  },
  //=============================================== 
})
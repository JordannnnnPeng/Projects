// pages/shake/shake.js
wx.cloud.init()
const app = getApp()
const shake = require('../../../utils/shake.js')
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = false
const dayjs = require('dayjs')
Page({
  data: {
    images: {
      earthSrc: '../../images/moon.svg',
      playButton: '../../images/night_play.svg',
      clockButton: '../../images/time.svg',
      isCollected: '../../images/notCollect.jpg',
      isNotCollected: '../../images/collect.png',
      play: '../../images/播放_white.png',
      pause: '../../images/pause_white.png'
    },
    audioDuration: '',
    max: 0,
    value: 0,
    currentTime: '',
    flag: false,
    play: false,
    isCollected: false,
    detailObj: {},
    index: null,
    timeArray:["1min","2min","5min","10min","15min"],
    timeIndex: 0
  },

  onShow: function (options){
    shake.openShakeEvent();  //打开摇一摇功能
    this.onAccelerometerChange()  //开启摇一摇
  },

  onUnload:function (options) {
    wx.offAccelerometerChange()  //取消监听加速度数据事件,如果没有，退出页面后摇一摇事件会继续执行
    shake.closeShakeEvent()  //关闭摇一摇功能
  },

  // 开启摇一摇
  onAccelerometerChange() {
    let _this = this
    wx.onAccelerometerChange(function(acceleration) {
      shake.shake(acceleration, function() {
        console.log('shakeshake');
        _this.playSound('https://6465-demo-9g63zp7sd125ba4c-1305830756.tcb.qcloud.la/51yinxiao.com_52177181506041636279083018.mp3?sign=a44178c78ec403aac8cf693877c756f7&t=1621750390');
        shake.shakeOk();
        _this.randomBgMusic();
      });
    })
  },

  playSound: (src) => {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = src
    innerAudioContext.onPlay(() => {
        console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
        console.log(res)
    })
  },

  randomBgMusic: () => {
    var random_1 = Math.floor(Math.random() * 3);
    var random_2 = Math.floor(Math.random() * 4);
    switch (random_1) {
      case 0:
        var x = app.globalData.musicData1;
        break;
      case 1:
        var x = app.globalData.musicData2;
        break;
      case 2:
        var x = app.globalData.musicData3;
        break;
      default:
        break;
    }
    var musicPiece = x[random_2];
    innerAudioContext.src = musicPiece.music;
  },

  handleCollection(){
    let isCollected = !this.data.isCollected
    this.setData({
      isCollected: isCollected
    })
    wx.showToast({
      title: isCollected ? '收藏成功' : '取消收藏',
      icon:'success'
    })
    let {index} = this.data;
    wx.getStorage({
      key:'isCollected'+'Night',
      success:(res)=>{
        console.log(res.data);
        let obj = res.data;
        obj[index] = isCollected;
        console.log(obj);

        wx.setStorage({
          key: 'isCollected'+'Night',
          data: obj,
          success: () => {
          }
        });
      }
    })
  },
  musicPlay() {
    innerAudioContext.play()
    innerAudioContext.onPlay(()=>{
      this.setData({
        play: true
      })
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
      }
    }, 1000)
  },

  musicPause(){
    innerAudioContext.pause()
    innerAudioContext.onPause(()=>{
      this.setData({
        play: false
      })
    })
  },

  changed1(e){
    let _this = this
    console.log('拖动后', e.detail.value)
    let a = e.detail.value
    _this.setData({
      flag: false,
    })
    innerAudioContext.seek(a)
  },

  changing(e){
    console.log('滑块数字', e.detail.value)
    let b = e.detail.value
    let a = dayjs(b * 1000).format("mm:ss")
    this.setData({
      currentTime: a,
      flag: true
    })
  },
 
  onLoad: function (options) {
    let _this = this
    _this.randomBgMusic
    innerAudioContext.src = 'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E5%A6%82%E4%BD%95%E6%94%BE%E4%B8%8B.m4a?sign=e4f07854e2edde3e521fa80def6159df&t=1621837176'
    wx.showLoading({
      title: '音频加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)    
    innerAudioContext.onPlay(()=>{
      console.log("正在播放")
    })
    innerAudioContext.onError((res)=>{
      console.log(res)
    })
    let detailStorage = wx.getStorageSync('isCollectedNight')
    if (!detailStorage){
      wx.setStorageSync('isCollectedNight', {});
    }
    if (detailStorage[_this.data.index]){
      _this.setData({
        isCollected: true
      })
    }
  },
  onUnload: function () {
    innerAudioContext.stop()
  }
})

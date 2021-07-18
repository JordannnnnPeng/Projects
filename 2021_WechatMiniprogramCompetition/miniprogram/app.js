5//app.js
App({
  onLaunch: function () {
 
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'cloud1-4g04r9skf8ea7795',
        traceUser: true 
      })
  
  },
  globalData:{
    // array内部还是数组[type,time,note]
    act_array: [
      ["冥想 平静 专注", "早晨", "稍稍休息一下", "../../images/Balance.png", "navigate_to_play_meditate",1,"cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/雨声.mp3"],
        ["白噪音 轻松进入学习状态", "下午", "学习", "../../images/H1.png", "navigate_to_more_sounds",1,"cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/雨声.mp3"],
        ["睡眠 自然进入梦乡", "夜晚", "准备睡觉", "../../images/N1.png", "navigate_to_play_sleep",1,"cloud://cloud1-4g04r9skf8ea7795.636c-cloud1-4g04r9skf8ea7795-1305424601/雨声.mp3"]
    ],
    article_array:[["七招教你减压更降压","../../images/1.jpeg","丁香医生","../../images/丁香医生.png","navigate_to_0"],
    ["一些缓解压力的方法，调整好心情继续奋斗","../../images/7.jpeg","丁香医生","../../images/丁香医生.png","navigate_to_1"],
    ["没事儿瞎操心有害健康，该怎么自我调整呢？","../../images/5.png","丁香医生","../../images/丁香医生.png","navigate_to_2"],
    ["压力山大怎么办？丁香医生教你几招减压大法","../../images/8.jpeg","丁香医生","../../images/丁香医生.png","navigate_to_3"],
    ["退休后的压力如何缓解","../../images/11.png","丁香医生","../../images/丁香医生.png","navigate_to_4"]
  ],
  openid:'',
  musicData1: [
    {src:"../../images/下雨.svg", name:"雨声", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E9%9B%A8%E5%A3%B0.mp3?sign=686ce8923cebe7230c248d964f21c9b6&t=1621780440", id:1},
    {src:"../../images/海浪.svg", name:"海浪", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E6%B0%B4%E5%A3%B0.mp3?sign=007891ed0a987761d5de1f31141fc903&t=1621780459", id:2},
    {src:"../../images/fire.svg", name:"火焰",music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E7%81%AB%E7%84%B0.mp3?sign=cd5cbe92b2865b7d13edb8570c3421b9&t=1621780477", id:3},
    {src:"../../images/橡胶树.svg", name:"森林",music:'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E9%B8%9F%E5%8F%AB.mp3?sign=6291f21b5eb43212599ff83ef1c6b82e&t=1621780499', id:4}
  ],
  musicData2:[
    {src:"../../images/钢琴家.svg", name:"巴赫",music:'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E5%B7%B4%E8%B5%AB.mp3?sign=a0aa46b688d60809859501f7d32920b1&t=1621780519', id:5},
    {src:"../../images/音乐.svg", name:"贝多芬",music:'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E8%B4%9D%E5%A4%9A%E8%8A%AC.mp3?sign=2a83a85ddcad90ed2a98f0a92b86dae1&t=1621780527', id:6},
    {src:"../../images/听音乐.svg", name:"交响乐",music:'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E4%BA%A4%E5%93%8D%E4%B9%90.mp3?sign=f9417dbfc48022c9b6bb82f382150802&t=1621780546', id:7},
    {src:"../../images/听音乐的女孩.svg", name:"小提琴",music:'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E5%B0%8F%E6%8F%90%E7%90%B4.mp3?sign=87f7136a2d38b06738d303ae0f7af056&t=1621155751	', id:8},
    {src:"../../images/摇晃、听音乐.svg", name:"轻柔吉他",music:'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E5%90%89%E4%BB%96.mp3?sign=202e269ccddd6c25f4ce4af1162172c5&t=1621155799	', id:9}
  ],
  musicData3:[
    {src:"../../images/学习.svg", name:"专注学习", music:'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/1.mp3?sign=31acbee2fa2f01d8c7cfd03c90dc5bb8&t=1621780559', id:10},
    {src:"../../images/用电脑.svg", name:"代码专区", music:'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/2.mp3?sign=c73e57d4cf96fd1def8b16d52b937438&t=1621780568', id:11},
    {src:"../../images/看书女孩.svg", name:"下午茶", music:'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/3.mp3?sign=839002062e4fba0ebf540e837b4ab22a&t=1621780574', id:12},
    {src:"../../images/坐着玩电脑.svg", name:"读书", music:'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/4.mp3?sign=44d1eb3fd980f85413cdd9ea218a21e3&t=1621780584', id:13},
    {src:"../../images/生活场景-看电脑.svg", name:"放松", music:'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/5.mp3?sign=9efc5892ccfa3b95ed2c96e78ba5609e&t=1621780590', id:14}
  ],
  musicDataNight1:[
    {src:"../../images/月亮.svg", name:"平静1", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E8%AE%B0%E5%BF%86%E5%8A%9B/2c41_b77f_013a_353839676d7a52ab8385706d2c00c134.mp3?sign=71a77bc16fa86ad0de2e09a0b1089e6b&t=1622084237", id:15},
    {src:"../../images/星球1.svg", name:"平静2", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E8%AE%B0%E5%BF%86%E5%8A%9B/388f_a714_1067_bebe0fb6b2eb2d98e46e43b82ee241e1.mp3?sign=0c284b47cee73a583f6ae49349c2938e&t=1622084287", id:16},
    {src:"../../images/红星球.svg", name:"平静3", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E8%AE%B0%E5%BF%86%E5%8A%9B/71cc_7b1f_0437_d694f35c30122a5b86452291b318f5ee.mp3?sign=15e597439d9a1e01681fc75fd0d7572c&t=1622084296", id:17},
    {src:"../../images/黄星球.png", name:"平静4", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E8%AE%B0%E5%BF%86%E5%8A%9B/a0a3_0d4d_77d4_a388db37db07044f9f158a2937bfe934.mp3?sign=0b579d59f262f281e11bd0947d5c7b6d&t=1622084303", id:18},
    {src:"../../images/星球.svg", name:"平静5", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E8%AE%B0%E5%BF%86%E5%8A%9B/ec3b_28c6_d0b9_1d922cdc8eead9c216a95cc9f1ed2d50.mp3?sign=095b9f577e8dff5c45d58ab12fdc3f82&t=1622084312", id:19}
  ],
  musicDataNight2:[
    {src:"../../images/小树.svg", name:"静谧林声", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E6%A3%AE%E6%9E%97%E6%B5%B4/0f09_010e_0308_8c5c0f93006dd9673f024b9580b464db.mp3?sign=bda4404b7255a7e12c1dac0741f0b2e8&t=1622084650", id:20},
    {src:"../../images/树.svg", name:"静谧林声1", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E6%A3%AE%E6%9E%97%E6%B5%B4/cf64_a84a_636f_6dba6e0466a6d516263dcb6da2377066.mp3?sign=f37b79de0635ec46204715251de04247&t=1622084669", id:21},
    {src:"../../images/橡胶树.svg", name:"静谧林声2", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E6%A3%AE%E6%9E%97%E6%B5%B4/obj_wo3DlMOGwrbDjj7DisKw_7749857500_e037_b77e_b7d9_27267669bbcb09f7fbd9fa9f294bf0f3.mp3?sign=95c02ae3db6dd63f303e2c4176461c94&t=1622084687", id:22},
    {src:"../../images/柿子树.svg", name:"静谧林声3", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E6%A3%AE%E6%9E%97%E6%B5%B4/obj_wo3DlMOGwrbDjj7DisKw_7749866155_b400_e3fa_43e5_6564972fe0cdd56bce31e9fc8ebba2b1.mp3?sign=66c4d3fbee7020f104c4422065cf4f55&t=1622084696", id:23},
    {src:"../../images/树2.svg", name:"静谧林声4", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E6%A3%AE%E6%9E%97%E6%B5%B4/obj_wo3DlMOGwrbDjj7DisKw_8953993369_f4b0_7e7e_0384_4985e2ff554197d1088a459ab7b8fa95.mp3?sign=a406c0c43059ca7b2ffce8c1be13156d&t=1622084705", id:24},
  ],
  musicDataNight3:[
    {src:"../../images/下雨.svg", name:"雨声1", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E8%88%92%E7%9C%A0/2159_0ef6_0a21_67fc1a3468fd733529ec13c15bea0252.mp3?sign=f88b6cf664ca7489800e524123b18b49&t=1622084746", id:25},
    {src:"../../images/云2.svg", name:"雨声2", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E8%88%92%E7%9C%A0/26be_77f5_272a_22f26658b868eda34f14d1bb0d01426d.mp3?sign=02fbce650355dd7cdffbd2255166eec1&t=1622084754", id:26},
    {src:"../../images/云1.svg", name:"雨声3", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E8%88%92%E7%9C%A0/a62e_6780_d25d_249fadab310530eeab8afc8f3e36466d.mp3?sign=ecd5a02cfda0c9aaa62224eae2ba9b8d&t=1622084761", id:27},
    {src:"../../images/雨水.svg", name:"雨声4", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E8%88%92%E7%9C%A0/d68e_d88b_731b_910f17ecc228da18d4a90a0374c490ee.mp3?sign=2ae153598ba1f13a099690191ea93f71&t=1622084779", id:28},
    {src:"../../images/白云.svg", name:"雨声5", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E8%88%92%E7%9C%A0/drip.mp3?sign=dde14f5d36ed98a56b53542ee3ac568f&t=1622084787", id:29},
    {src:"../../images/乌云下雨.svg", name:"雨声6", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E8%88%92%E7%9C%A0/ocean.mp3?sign=fc015e5b1fb4614a517a64676b555f8b&t=1622084806", id:30}
  ],
  musicDataNight4: [
    {src:"../../images/星球03.svg", name:"元气满满1", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E5%85%83%E6%B0%94%E6%BB%A1%E6%BB%A1/2c25_19e8_b120_09675b5e86071e36d9dbc8eeda3712c4.mp3?sign=e0ee6ff94d86c25d1f45cf8870357601&t=1622084901", id:31},
    {src:"../../images/星球08.svg", name:"元气满满2", music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E5%85%83%E6%B0%94%E6%BB%A1%E6%BB%A1/3a80_4981_2944_8d93f3445a217dc4aa22c3f8ab9a2a07.mp3?sign=9eb7a7df202092583be25eb5b9ceef9b&t=1622084908", id:32},
    {src:"../../images/星球013.svg", name:"元气满满3",music:"https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E5%85%83%E6%B0%94%E6%BB%A1%E6%BB%A1/69c7_9f1b_aa98_6b87b2d1ba243daa96910b639a1d05e1.mp3?sign=825f1cf8aced28420cfb1a6be8b5c58c&t=1622084915", id:33},
    {src:"../../images/星球017.svg", name:"元气满满4",music:'https://636c-cloud1-4g04r9skf8ea7795-1305424601.tcb.qcloud.la/%E5%85%83%E6%B0%94%E6%BB%A1%E6%BB%A1/9d56_cd4b_577b_efe7bfbed36fdcc2e9cc5f3b2ff86d48.mp3?sign=cc0d33d1a4db95b4b0b65e76cde7af10&t=1622084921', id:34}
  ]
  },
  collectMusic:[]
})

//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    // 轮播
    slides: [{
        "CommentId": 175046122,
        "Title": "【直播】中粮天悦壹号开盘 据传房价8W+",
        "ImageUrl": "http://img0.bbs.szhome.com/uploadimages/2016/09/0924090806.jpg",
        "LinkUrl": "http://bbs.szhome.com/40-90010-detail-175046122-0-0-1.html?fromyituapp=1"
    },
    {
        "CommentId": 175044863,
        "Title": "网友看楼市|腾讯总部大厦片区未来的发展",
        "ImageUrl": "http://img0.bbs.szhome.com/uploadimages/2016/09/0924141417.jpg",
        "LinkUrl": "http://bbs.szhome.com/30-10001-detail-175044863-0-0-1.html?fromyituapp=1"
    },
    {
        "CommentId": 175040398,
        "Title": "直播|华润城.润府二期D\\E栋开盘8W起",
        "ImageUrl": "http://img0.bbs.szhome.com/uploadimages/2016/09/0924090412.jpg",
        "LinkUrl": "http://bbs.szhome.com/30-52925-detail-175040398-0-0-1.html?fromyituapp=1"
    },
    {
        "CommentId": 175046950,
        "Title": "【现场直播】吉祥里开盘直播（附销控表）",
        "ImageUrl": "http://img0.bbs.szhome.com/uploadimages/2016/09/0924122528.jpg",
        "LinkUrl": "http://bbs.szhome.com/30-30654-detail-175046950-0-0-1.html?fromyituapp=1"
    }],
    indexTypes:['推荐','好友动态','房产','装修','情感','生活','亲子','生活','亲子'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    // item
    chooises: [{
        "Title": "宝安的房子8万都被抢，是我out了么",
        "LinkUrl": "http://bbs.szhome.com/30-10001-detail-175048108.html?fromyituapp=1",
        "CommentId": 175048108,
        "ProjectId": 10001,
        "ProjectName": "家在宝安",
        "UserId": 0,
        "UserName": "TONY2017",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0924215902.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    },
    {
        "Title": "来深20年两套房市值900万，可以退休了么",
        "LinkUrl": "http://bbs.szhome.com/50-100200-detail-175048422.html?fromyituapp=1",
        "CommentId": 175048422,
        "ProjectId": 100200,
        "ProjectName": "凡人琐事",
        "UserId": 0,
        "UserName": "娃儿爸的老婆",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0925094934.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    },
    {
        "Title": "自住买面积大的老房子，还是面积小的新房",
        "LinkUrl": "http://bbs.szhome.com/500-500020-detail-175048037.html?fromyituapp=1",
        "CommentId": 175048037,
        "ProjectId": 500020,
        "ProjectName": "二手房置业",
        "UserId": 0,
        "UserName": "翠花上盘菜",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0924214705.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    },
    {
        "Title": "大家小心点，昨天在屯门坐B3X被人拿走行李箱",
        "LinkUrl": "http://bbs.szhome.com/360-360040-detail-175047631.html?fromyituapp=1",
        "CommentId": 175047631,
        "ProjectId": 360040,
        "ProjectName": "香港购物",
        "UserId": 0,
        "UserName": "lynn516",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0924212955.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    },
    {
        "Title": "孩子去读大学，空巢期的妈妈日子很难熬！",
        "LinkUrl": "http://bbs.szhome.com/50-100200-detail-175048129-0-0-1.html?fromyituapp=1",
        "CommentId": 175048129,
        "ProjectId": 100200,
        "ProjectName": "凡人琐事",
        "UserId": 0,
        "UserName": "吸烟有害别人健康",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0925162044.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    },
    {
        "Title": "留出三年月供还余100W现金,该不该再买房投资",
        "LinkUrl": "http://bbs.szhome.com/500-500020-detail-175048398.html?fromyituapp=1",
        "CommentId": 175048398,
        "ProjectId": 500020,
        "ProjectName": "二手房置业",
        "UserId": 0,
        "UserName": "青春鱼贝",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0925102518.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    },
    {
        "Title": "老婆舅舅找她借钱，大家怎么看",
        "LinkUrl": "http://bbs.szhome.com/50-100100-detail-175048369.html?fromyituapp=1",
        "CommentId": 175048369,
        "ProjectId": 100100,
        "ProjectName": "情感天空",
        "UserId": 0,
        "UserName": "wangyoubao",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0925104955.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    },
    {
        "Title": "想150万内买套房，长沙好还是深圳周边好",
        "LinkUrl": "http://bbs.szhome.com/500-500020-detail-175048392.html?fromyituapp=1",
        "CommentId": 175048392,
        "ProjectId": 500020,
        "ProjectName": "二手房置业",
        "UserId": 0,
        "UserName": "梦里想瘦",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0925103256.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    },
    {
        "Title": "深圳男子酒吧死亡，妻子怀孕下月将生产",
        "LinkUrl": "http://bbs.szhome.com/50-102500-detail-175048087.html?fromyituapp=1",
        "CommentId": 175048087,
        "ProjectId": 102500,
        "ProjectName": "时政要闻",
        "UserId": 0,
        "UserName": "hexuefan",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0924220532.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    },
    {
        "Title": "该如何拯救我的原生家庭",
        "LinkUrl": "http://bbs.szhome.com/50-100200-detail-175048462.html?fromyituapp=1",
        "CommentId": 175048462,
        "ProjectId": 100200,
        "ProjectName": "凡人琐事",
        "UserId": 0,
        "UserName": "马甲1333",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0925094127.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    },
    {
        "Title": "首付100w左右现在入手，会不会高位站岗",
        "LinkUrl": "http://bbs.szhome.com/500-500020-detail-175047464.html?fromyituapp=1",
        "CommentId": 175047464,
        "ProjectId": 500020,
        "ProjectName": "二手房置业",
        "UserId": 0,
        "UserName": "Vanessa还记得",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0924142017.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    },
    {
        "Title": "选来选去，最后还是买了招商依山郡",
        "LinkUrl": "http://bbs.szhome.com/30-30017-detail-175046684.html?fromyituapp=1",
        "CommentId": 175046684,
        "ProjectId": 30017,
        "ProjectName": "家在龙岗",
        "UserId": 0,
        "UserName": "老段在深圳",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0924000748.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    },
    {
        "Title": "婚前恐惧症，你有过吗？",
        "LinkUrl": "http://bbs.szhome.com/50-100200-detail-175047984.html?fromyituapp=1",
        "CommentId": 175047984,
        "ProjectId": 100200,
        "ProjectName": "凡人琐事",
        "UserId": 0,
        "UserName": "爱旅游的小君",
        "Summary": "",
        "ImageUrlList": ["http://img0.bbs.szhome.com/uploadimages/2016/09/0924215151.jpg"],
        "IsChoice": false,
        "TagName": "",
        "TagRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        },
        "TagNightRGBColor": {
            "R": 0,
            "G": 0,
            "B": 0
        }
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  }
})

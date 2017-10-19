// pages/hot/hot.js
var datafade = require('../index/index.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  ex: 0
  },
  move: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  },
  find: function () {
    wx.redirectTo({
      url: '../find/find',
    })
  },

  thought: function () {
    wx.redirectTo({
      url: '../thought/thought',
    })
  },
  marker: function () {
    wx.redirectTo({
      url: '../market/market',
    })
  },
  notice: function () {
    wx.redirectTo({
      url: '../notice/notice',
    })
  },
  more: function () {
    wx.redirectTo({
      url: '../more/more',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(a);
    // options = JSON.parse(options);
    // options = JSON.parse(options);
    // options = Array(options);
    // console.log(Object.prototype.toString.call(options[0]));
    // options = options[0].match(/\[[.]\]/);
    // for(var i in options){
    // console.log(options);      
    // }
    var data = datafade.getData;
    var randArray = datafade.rand();
    var item = data[randArray[0]];
    var nextItem = data[randArray[1]];
    var nextItem1 = data[10];
    var nextItem2 = data[11];
    this.setData({
      firstContent: {
        itemFrom: item.itemFrom,
        ques: item.ques,
        ans: item.ans,
        agreeNum: item.agreeNum,
        command: item.command,
        then: item.then
      },
    })
    var b = [];
    for (var i = 2; i < 10; i++) {
      (function a() {
        var ans = data[randArray[i]];
        b.push({
          itemFrom: ans.itemFrom,
          ques: ans.ques,
          ans: ans.ans,
          agreeNum: ans.agreeNum,
          command: ans.command,
          then: ans.then
        });
      })(i)
    }
    this.setData({
      story: b
    })
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
  
  },
  onPageScroll: function (e) {
    var ex = this.data.ex;
    var that = this;
    var y = e.scrollTop;
    if (e.scrollTop > ex) {
      that.setData({
        dis: 'dis',
        ex: e.scrollTop
      })
    } else if (e.scrollTop < ex) {
      console.log(that.data.dis);
      that.setData({
        dis: '',
        ex: e.scrollTop
      })
    }
  }
})
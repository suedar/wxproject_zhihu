// pages/find/find.js
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
  hot: function () {
    wx.redirectTo({
      url: '../hot/hot',
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
    function rand(res) {
      var randArray = [];
      var num;
      var count = 11;
      var flag;
      while (count !== 0) {
        flag = true;
        num = Math.floor(Math.random() * 11);
        randArray.forEach(function (val) {
          if (val === num) {
            flag = false;
          }
        })
        if (flag) {
          randArray.push(num);
          count--;
        }
        // console.log(randArray);
      }
      return randArray;
    }
    // console.log(this);
    var data = datafade.getData;
    var randArray = rand();
    // console.log(datafade);
    var b = [];
    for (var i = 0; i < 11; i++) {
      (function a() {
        var ans = data[randArray[i]];
        // console.log(ans);
        b.push({
          itemAbout: ans.itemAbout,
          ques: ans.ques,
          ans: ans.ans,
          ex: ans.ex,
          about: ans.about
        });
      })(i)
    }
    this.setData({
      story: b})
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
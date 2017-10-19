// pages/thought/thought.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    story:[{
      name:"豆子",
      time:"9小时前",
      con:"哀吾生之须臾，羡长河之无穷啊！哀吾生之须臾，羡长河之无穷啊！哀吾生之须臾，羡长河之无穷啊！哀吾生之须臾，羡长河之无穷啊！哀吾生之须臾，羡长河之无穷啊！哀吾生之须臾，羡长河之无穷啊！哀吾生之须臾，羡长河之无穷啊！哀吾生之须臾，羡长河之无穷啊！哀吾生之须臾，羡长河之无穷啊！哀吾生之须臾，羡长河之无穷啊！",
      trans:"1",
      bul:"32",
      plus:"141",
      wei:'wei'
    }, {
      name: "豆子",
      time: "9小时前",
      con: "哀吾生之须臾，羡长河之无穷啊！",
      trans: "1",
      bul: "32",
      plus: "141",
      wei:''
    }],
    ex: 0
  },
  shou: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  },
  market: function () {
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
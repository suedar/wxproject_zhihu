// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ex: 0,

  },
  thought:function () {
    wx.redirectTo({
      url: '../thought/thought',
    })
  },
  shou:function () {
    // console.log(222);
    wx.redirectTo({
      url: '../index/index',
    })
  },
  notice:function () {
    wx.redirectTo({
      url: '../notice/notice',
    })
  },
  more:function () {
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
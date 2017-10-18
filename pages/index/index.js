// pages/index/index.js
// var datafade = require('../../data/data.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    firstContent: {
      src: "/image/6.jpg",
      itemFrom: "柠檬黄赞同了答案",
      ques: "有哪些不起眼却非常赚钱的行业？",
      ans: "拍毕业照 现在的高校学生拍毕业照都喜欢穿一些类似民国时期的衣服/jk制服/还有穿婚纱的 等等 反正要提供三套服装以上+人手一本相册 类似于这样 图片 来自于网络 图侵删 【图片】 就我身边一个",
      agreeNum: "9赞同",
      command: "12评论",
      then: "关注问题"
    },
    liveContent:[{
      src:"/image/2.jpg",
      text:"物联网,前端工程师的新蓝海",
      name:"啊花",
      guess:"大家都在看"
    },{
      src: "/image/3.jpg",
      text: "程序员：如何在整个职业生涯中保持竞...",
      name: "vincross",
      guess: "受欢迎Live"
      },{
        src: "/image/4.jpg",
        text: "阿里流形，大数据浪潮下的前端工程师",
        name: "康康",
        guess: "来自「前端开发」"
    },{
      src: "/image/5.jpg",
      text: "影视字幕是怎样炼成的",
      name: "Roc Lee",
      guess: "猜你喜欢"
    }],
    storyContent:[{
      src:"/image/6.jpg",
      itemFrom:"柠檬黄赞同了答案",
      ques:"有哪些不起眼却非常赚钱的行业？",
      ans:"拍毕业照 现在的高校学生拍毕业照都喜欢穿一些类似民国时期的衣服/jk制服/还有穿婚纱的 等等 反正要提供三套服装以上+人手一本相册 类似于这样 图片 来自于网络 图侵删 【图片】 就我身边一个",
      agreeNum:"9",
      command:"12",
      then:"关注问题"
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  hot:function(){
    // console.log(this.data.resData);
    var a = this.data.resData;
    // a = JSON.stringify(a);
    // console.log(a);
    wx.redirectTo({
      url: '../hot/hot?',
    })
  },
  find:function(){
    wx.redirectTo({
      url: '../find/find',
    })
  },
  onLoad: function (options) {
    wx.request({
      url: "https://www.easy-mock.com/mock/59e0a893ca26b643bbed38a8/zhihu/test#!method=get",
      success:(res)=>{
        this.setData({
          resData : res.data.data.content
        })
        this.setData({
          randArray: rand(this.data.resData)
        })
        var item = this.data.resData[this.data.randArray[0]];
        var nextItem = this.data.resData[this.data.randArray[1]];
        // console.log(nextItem);
        var nextItem1 = this.data.resData[10];
        var nextItem2 = this.data.resData[11];        
        this.setData({
          firstContent:{
            itemFrom: item.itemFrom,
            ques: item.ques,
            ans: item.ans,
            agreeNum: item.agreeNum,
            command: item.command,
            then: item.then
          },
          storyContent: {
            itemFrom: nextItem.itemFrom,
            ques: nextItem.ques,
            ans: nextItem.ans,
            agreeNum: nextItem.agreeNum,
            command: nextItem.command,
            then: nextItem.then
          },
          storyContent1: {
            itemFrom: nextItem1.itemFrom,
            ques: nextItem1.ques,
            ans: nextItem1.ans,
            agreeNum: nextItem1.agreeNum,
            command: nextItem1.command,
            then: nextItem1.then
          }, 
          storyContent2: {
            itemFrom: nextItem2.itemFrom,
            ques: nextItem2.ques,
            agreeNum: nextItem2.agreeNum,
            command: nextItem2.command,
            then: nextItem2.then
          } 
        })
        var that = this;
        var b = [];
        for (var i = 2; i < 10; i++) {
          (function a() {            
            var ans = that.data.resData[that.data.randArray[i]];
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
        // console.log(b);
        this.setData({
          story:b
        })
        // console.log(this.data.story);
        module.exports.getData = this.data.resData;                
      }
    })
    function rand(res) {
      var randArray = [];
      var num;
      var count = 10;
      var flag;
      while(count!==0){
        flag = true;
        num = Math.floor(Math.random() * 10);
        randArray.forEach(function(val){
          if(val === num){
            flag = false;
          }
        })
        if(flag){
          randArray.push(num);
          count--;
        }
        // console.log(randArray);
      }
      return randArray;
    }
    module.exports.rand = rand;                
  },
  cal:function(){
    var b = {};
    this.setData({
      // liveContent.push(b);

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
  // insertNodeTap: function (item) {
  //   var that = this;
  //   var insertData;
  //   if (item.type === "common_about" || item.type === "common_au"){
  //     insertData = '<view class="story"><view class="head"><image src="/image/6.jpg" ></image><text>'+ item.itemFrom + '</text><image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAj0lEQVRIS+2U0QmAMAwFrxO4gk7kCm7gCOoGjuBouoEjSMCKpBRCC/1KP8NrrlxDAo1OaMTBQcWmXZ2r+wzEYdiB8a0ewJZxVJwTkFyeVWMBrapWlRPQDXSq6QkMqlaVy4EuoDeAzDkBiaLFoK4qF4dBmky/YdD/E99RnPMV5CsoWUHFSqwXfeqsppJcM3UPv1Yi2rNsJ3UAAAAASUVORK5CYII=">"></image></view><view>' + item.ques + '</view><view>' + item.ans + '</view><view>' + item.agreeNum + ' · ' + item.command + ' · ' + item.then + '</view></view>';
  //   } else if (item.type === "article_about"){
  //     insertData = '<view class="article"><view class="head"><image src="/image/6.jpg"></image><text>' + item.itemFrom + '</text><image src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAj0lEQVRIS+2U0QmAMAwFrxO4gk7kCm7gCOoGjuBouoEjSMCKpBRCC/1KP8NrrlxDAo1OaMTBQcWmXZ2r+wzEYdiB8a0ewJZxVJwTkFyeVWMBrapWlRPQDXSq6QkMqlaVy4EuoDeAzDkBiaLFoK4qF4dBmky/YdD/E99RnPMV5CsoWUHFSqwXfeqsppJcM3UPv1Yi2rNsJ3UAAAAASUVORK5CYII=" > "></image></view><view><image src="/image/5.png"></image></view><view>' + item.ques + '</view><view>' + item.ans + '</view><view> ' + item.agreeNum + ' · ' + item.command + ' · '+ item.then +'</view></view>';
  //   } else {
  //     insertData = '<view class="mark"><view class="head"><image src="/image/6.jpg"></image><text>' + item.itemFrom + '</text><image src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAj0lEQVRIS+2U0QmAMAwFrxO4gk7kCm7gCOoGjuBouoEjSMCKpBRCC/1KP8NrrlxDAo1OaMTBQcWmXZ2r+wzEYdiB8a0ewJZxVJwTkFyeVWMBrapWlRPQDXSq6QkMqlaVy4EuoDeAzDkBiaLFoK4qF4dBmky/YdD/E99RnPMV5CsoWUHFSqwXfeqsppJcM3UPv1Yi2rNsJ3UAAAAASUVORK5CYII=" > "></image></view><view>' + item.ques + '</view><view>' + item.agreeNum + ' · ' + item.command + ' · ' + item.then + '</view></view>';
  //   }
  //   WxParse.wxParse('insertData', 'html', insertData, that);          
  // },
  onPageScroll:function(e){
    // console.log(this.data.resData);
    // console.log(e);
    // var y = 116;
    // var yNum = 50
    // var num = 2;
    // if(e.scrollTop > yNum&& num!= 11){
    //   var item = this.data.resData[this.data.randArray[num]];      
    //   this.insertNodeTap(item);
    //   num++;
    //   y+=136;
    //   yNum = y/2;
    // }
  }
})
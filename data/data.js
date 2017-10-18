function getData(url) {
  var a;
  wx.request({
    url: "https://www.easy-mock.com/mock/59e0a893ca26b643bbed38a8/zhihu/test#!method=get",
    success:(res)=>{
      // var a = res;
      // console.log(res);
      return res;
    }
  })
}
function getFadeData(){
  return getData();
}
function rand(res) {
  var randArray = [];
  var num;
  var count = 10;
  var flag;
  while (count !== 0) {
    flag = true;
    num = Math.floor(Math.random() * 10);
    randArray.forEach(function (val) {
      if (val === num) {
        flag = false;
      }
    })
    if (flag) {
      randArray.push(num);
      count--;
    }
  }
  return randArray;
}
module.exports.getFadeData = getFadeData;
module.exports.rand = rand;
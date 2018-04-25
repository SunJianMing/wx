// pages/user/user.js
Page({
  data: {
    userImg:'',
    userName:'未知'
  },
  onLoad(){
    wx.getUserInfo({
      success:(res)=>{
        this.setData({
          userImg: res.userInfo.avatarUrl,
          userName:res.userInfo.nickName
        })
      }
    })
  }
  
})
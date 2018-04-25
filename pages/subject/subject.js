// pages/subject/subject.js
Page({
  data: {
    types:[
      {
        name:'喜剧',
        img:'/assets/image/xiju.png'
      },
      {
        name: '动作',
        img: '/assets/image/dongzuo.png'
      },
      {
        name: '爱情',
        img: '/assets/image/aiqing.png'
      },
      {
        name: '动画',
        img: '/assets/image/donghua.png'
      }, {
        name: '科幻',
        img: '/assets/image/kehuan.png'
      }
    ]
  },
  typeHandler(e){
    const {type} = e.currentTarget.dataset;
   
    wx.navigateTo({
      url: '../subject-details/subject-details?type='+type,
    })
  }
})
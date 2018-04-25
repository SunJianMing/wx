// pages/movies-details/movies-details.js
Page({
  data:{
    movie:{}
  },
  onLoad(options){
    const { id } = options 
    // const id = '5ab3925bc87d18388fe49fe4'

    console.log(id)
    wx.showLoading({
      title: '',
    })
    
    wx.request({
      url: `https://db.miaov.com/doubanapi/v0/movie/detail/${id}`,
      success:(res)=>{
        const movie = res.data.data
        console.log(movie)
        this.setData({
          movie,
          video:movie.video,
          cove: movie.coverUrl,
          time: movie.pubdate,
          country: movie.country
          })
        wx.hideLoading()
      }
    })
  }
})
// pages/index/index.js
Page({
  data: {
    movies: [],
    page: 1,
    size: 6,
    loading: true,
    type:''
  },
  onLoad(options) {
    const {type} = options
    this.setData({type})
    this.loadMovies()
    wx.setNavigationBarTitle({
      title: type,
    })
  },
  loadMovies() {
    console.log('ll')
    const { page, size, type } = this.data
    this.setData({ loading: true })
    wx.request({
      url: `https://db.miaov.com/doubanapi/v0/movie/list?base=true&type=${type}&page=${page}&size=${size}`,
      success: (res) => {
        const { data } = res.data
        const movies = this.data.movies

        for (let i = 0; i < data.length; i += 2) {
          movies.push([data[i], data[i + 1] ? data[i + 1] : null])
        }
        this.setData({ movies, loading: false })
      }
    })
  },
  scrollHander() {
    const { page } = this.data
    this.setData({ page: page + 1 })
    this.loadMovies()
  },
  gotoDetailsHandler(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: '../movies-details/movies-details?id=' + id,
    })
  }
})
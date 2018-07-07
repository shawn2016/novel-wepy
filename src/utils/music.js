const operation = {
  getMusicData: function() {
    return new Promise((resolve, reject) => {
      wx.getBackgroundAudioPlayerState({
        success: function(res) {
          resolve(res)
        },
        fail: function(err) {
          reject(err)
        }
      })
    })
  },
  // 播放音乐 参数:url title 图片url
  playMusic: function(url, autoplay) {
    return new Promise((resolve, reject) => {
      console.log('222222222222')
      const innerAudioContext = wx.getBackgroundAudioManager()
      innerAudioContext.src = url
      innerAudioContext.autoplay = autoplay
      innerAudioContext.onPlay(() => {
        resolve({
          status: true,
          innerAudioContext
        })
      })
      // {
      //   dataUrl: url,
      //   title: title,
      //   coverImgUrl: pic,
      //   onPlay: function() {
      //     resolve({
      //       status: true,
      //       innerAudioContext
      //     })
      //   },
      //   fail: function() {
      //     reject(new Error('播放错误'))
      //   }
      // }
    })
  },
  asyncGetStorage: function(key) {
    return new Promise((resolve, reject) => {
      wx.getStorage({
        key: key,
        success: function(res) {
          resolve(res.data)
        },
        fail: function(err) {
          reject(err)
        }
      })
    })
  }
}
module.exports = operation

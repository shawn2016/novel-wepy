const timer = {}
timer.s_to_h = s => {
  /**
   * 将秒转换为 分:秒
   * s int 秒数
   */
  // 计算分钟
  // 算法：将秒数除以60，然后下舍入，既得到分钟数
  let h
  s = s.toFixed(0)
  h = Math.floor(s / 60)
  // 计算秒
  // 算法：取得秒%60的余数，既得到秒数
  s = s % 60
  // 将变量转换为字符串
  h += ''
  s += ''
  // 如果只有一位数，前面增加一个0
  h = h.length === 1 ? '0' + h : h
  s = s.length === 1 ? '0' + s : s
  return h + ':' + s
}
module.exports = timer

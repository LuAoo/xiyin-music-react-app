/* 
[03:56.390]每次失望也不会太过悲伤，
*/
/* 歌词的解析 */
export function parseLyric(data) {
  // 设定正则切割规则
  const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
  // 切割歌词字符串
  const lineStrings = data.split("\n");
  const lyrics = []
  for (const str of lineStrings) {
    if (str) {
      // 使用正则匹配时间和内容
      let result = parseExp.exec(str);
      // 拿到相应的时间转为ms
      if (!result) {
        continue
      }
      const time1 = result[1] * 60 * 1000
      const time2 = result[2] * 1000
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10
      const content = str.replace(parseExp, '').trim()
      const time = time1 + time2 + time3
      const lineObj = { time, content };
      lyrics.push(lineObj)
    }
  }
  return lyrics
}
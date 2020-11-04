import { Box } from 'viviui'

import SeriesLine from '../test/seriesLine' // 折線圖測試用
import SeriesBar from '../test/seriesBar' // 柱狀圖測試用

import SeriesGoAway from '../echarts/seriesGoAway' // 離開時間圖
import SeriesEnter from '../echarts/seriesEnter' // 進館時間圖
import SeriesEntryAndExit from '../echarts/seriesEntryAndExit'// 進出館時間圖

const Home = () => {
  return (
    <Box id='root'>
      {/* <SeriesLine /> */}
      {/* <SeriesBar /> */}
      {/* <SeriesGoAway /> */}
      {/* <SeriesEnter /> */}
      <SeriesEntryAndExit />
    </Box>
  )
}

export default Home

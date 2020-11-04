import { Box } from 'viviui'

import SeriesLine from '../echarts/seriesLine' // 折線圖
import SeriesBar from '../echarts/seriesBar' // 柱狀圖

const Home = () => {
  return (
    <Box id='root'>
      <SeriesLine />
      <SeriesBar />
    </Box>
  )
}

export default Home

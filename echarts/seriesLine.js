import React from 'react'
import ReactEcharts from 'echarts-for-react'

const SeriesLine = () => {
  const getOption = () => {
    return (
      {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
    )
  }
  return (
    <ReactEcharts
      option={getOption()}
      style={{ height: '80vh', left: 50, top: 50, width: '90vw' }}
      opts={{ renderer: 'svg' }}
    />
  )
}

export default SeriesLine

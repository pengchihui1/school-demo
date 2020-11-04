import React from 'react'
import ReactEcharts from 'echarts-for-react'
import _ from 'lodash'

const data1 = [100, 120, 30, 45, 60, 50, 56, 80, 150, 200, 30, 50, 100, 120, 30, 45, 60, 50, 56, 80, 150, 200, 30, 50]

var arrOfObj = _.map(data1, function (name, index) {
  return {
    value: name,
    xAxis: index,
    yAxis: name
  }
})

const SeriesEnter = () => {
  const option = {
    title: {
      text: '進館時間圖'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    xAxis: [
      {
        type: 'category',
        data: ['1點', '2點', '3點', '4點', '5點', '6點', '7點', '8點', '9點', '10點', '11點', '12點', '13點', '14點', '15點', '16點', '17點', '18點', '19點', '20點', '21點', '22點', '24點']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '人數',
        min: 0,
        max: 500,
        position: 'left',
        axisLine: {
          lineStyle: {
            // color: colors[2]
          }
        }

      }
    ],
    visualMap: {
      tip: 20,
      right: 50,
      top: 40,
      Dieces: [{
        gt: 0,
        lte: 50,
        color: '#096'
      },
      {
        gt: 50,
        lte: 100,
        color: '#ffde33'
      },
      {
        gt: 100,
        lte: 150,
        color: '#ff9933'
      },
      {
        gt: 150,
        lte: 200,
        color: '#cc0033'
      },
      {
        gt: 200,
        lte: 300,
        color: '#660099'
      },
      {
        gt: 300,
        color: '#7e0023'
      },
      {
        gt: 0,
        lte: 50,
        color: '#ffde33'
      },
      {
        gt: 0,
        lte: 50,
        color: '#ffde33'
      }
      ]
    },
    series: [
      {
        name: '時間段',
        type: 'bar',
        data: arrOfObj,
        markPoint: {
          symbol: 'pin', // 标记类型
          data: arrOfObj
        }
      }
    ]
  }

  return (
    <>
      <ReactEcharts
        option={option}
        style={{ height: '80vh', left: 50, top: 50, width: '90vw' }}
        opts={{ renderer: 'svg' }}
      />
    </>
  )
}

export default SeriesEnter

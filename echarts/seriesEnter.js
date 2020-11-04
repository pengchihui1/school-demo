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
  var colors = ['#5793f3', '#d14a61', '#675bba']

  const option = {
    color: colors,
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
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
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
            color: colors[2]
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
        data: arrOfObj
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

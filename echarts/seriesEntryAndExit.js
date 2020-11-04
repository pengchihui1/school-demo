import React from 'react'
import ReactEcharts from 'echarts-for-react'
import _ from 'lodash'
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody
} from 'viviui'

const data1 = [20, 49, 70, 232, 256, 767, 136, 122, 326, 200, 64, 33, 26, 59, 90, 264, 287, 707, 176, 182, 487, 188, 60, 23]
const data2 = [26, 59, 90, 264, 287, 707, 176, 182, 487, 188, 60, 23, 20, 49, 70, 232, 256, 767, 136, 122, 326, 200, 64, 33]

var arrOfObj1 = _.map(data1, function (name, index) {
  return {
    value: name,
    xAxis: index,
    yAxis: name
  }
})

var arrOfObj2 = _.map(data2, function (name, index) {
  return {
    value: name,
    xAxis: index,
    yAxis: name
  }
})

const SeriesGoAway = () => {
  var colors = ['#5793f3', '#d14a61']

  const option = {
    color: colors,
    title: {
      text: '進出館人數統計',
      subtext: '詳細數據'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['進入人數', '離開人數'],
      legendSize: 50
    },
    textStyle: {
      // fontSize: 12   //全部字体大小
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {
          show: true,
          readOnly: false,
          optionToContent: function (opt) {
            var axisData = opt.xAxis[0].data
            var series = opt.series
            var table = '<table class="layui-table" style="width:100%;text-align:center"><tbody><tr>' +
              '<td>时间</td>' +
              '<td>' + series[0].name + '</td>' +
              '<td>' + series[1].name + '</td>' +
              '</tr>'
            for (var i = 0, l = axisData.length; i < l; i++) {
              table += '<tr>' +
                '<td>' + axisData[i] + '</td>' +
                '<td>' + series[0].data[i] + '</td>' +
                '<td>' + series[1].data[i] + '</td>' +
                '</tr>'
            }
            table += '</tbody></table>'
            return table
          }
        }, // 數據視圖
        magicType: { show: true, type: ['line', 'bar'] }, // 折線圖 柱狀圖
        restore: { show: true }, // 還原
        saveAsImage: { show: true } // 下載svg圖片
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: ['1點', '2點', '3點', '4點', '5點', '6點', '7點', '8點', '9點', '10點', '11點', '12點', '13點', '14點', '15點', '16點', '17點', '18點', '19點', '20點', '21點', '22點', '24點']
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 1000
      }
    ],
    series: [
      {
        name: '進入人數',
        type: 'bar',
        data: data1,
        markPoint: {
          // data: [
          //   { type: 'max', name: '最大值' },
          //   { type: 'min', name: '最小值' }
          // ]
          symbol: 'pin', // 标记类型
          // symbolSize: 50, // 图形大小
          data: arrOfObj1
        }
      },
      {
        name: '離開人數',
        type: 'bar',
        data: data2,
        markPoint: {
          // data: [
          //   { type: 'max', name: '最大值' },
          //   { type: 'min', name: '最小值' }
          // ]
          symbol: 'pin', // 标记类型
          // symbolSize: 50, // 图形大小
          data: arrOfObj2
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

export default SeriesGoAway

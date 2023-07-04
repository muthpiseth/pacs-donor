import React from 'react';
import ReactEcharts from "echarts-for-react";

export default function Lines() {
    const option = {
        title: {
            text: 'Donor Growth Curves',
            subtext: 'Donor Number',
          },
        tooltip: {
          trigger: 'axis'
        },       
        grid: {
          left: '0%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'line',
            data: [67, 44, 10, 13, 9, 23, 21 , 25, 35, 37, 35, 60]
          },
          {
            type: 'line',
            data: [22, 18, 19, 23, 59, 13, 8, 39, 32, 32, 23, 100]
          },
          {
            type: 'line',
            data: [15, 70, 20, 15, 80, 39, 19, 29, 54, 54, 62, 20]
          },
          {
            type: 'line',
            data: [52, 2, 8, 39, 49, 3, 30, 46, 42, 73, 14, 40]
          },
          {
            type: 'line',
            data: [1, 27, 59, 19, 30, 13, 13, 53, 61, 13, 45, 80]
          }
        ]
      };
  return (
    <div>
      <ReactEcharts option={option}/>
    </div>
  )
}

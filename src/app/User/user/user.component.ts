import { Component } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
ngOnInit()
{
this.initChart();
} 

initChart(): void {
  const chartDom = document.getElementById('main')!;
  const myChart = echarts.init(chartDom);
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  option && myChart.setOption(option);
}
}

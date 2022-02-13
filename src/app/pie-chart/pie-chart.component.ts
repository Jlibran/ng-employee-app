import { Component, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @ViewChild(BaseChartDirective) 
chart: BaseChartDirective | undefined;

//add the following configurations to your pie chart
public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
        display: 'true',
        backgroundColor: '#eeeeee',
      },
    }
  };
// add the data to your pie chart
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Marketing',' Specialist' ], [ 'QA' ], [ 'Developer' ],[ 'CEO' ], [ 'CFO' ] ],
    datasets: [ {
    data: [ 2, 3, 5, 1, 1 ],
    hoverOffset: 4
    },
   ]
  }
  ;
//specify what kind of chart you are creating
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];

// when the mouse hovers over a color an event message will open
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor() { }
}

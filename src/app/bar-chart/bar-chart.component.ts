import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @ViewChild(BaseChartDirective)
  chart: BaseChartDirective | undefined;

  // add the following configurations to your chart
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        max: 10
      }
    },
    plugins: {
      legend: {
        display: true
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };

  // specify the type of chart you are creating here
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  // enter the data for your bar chart
  public barChartData: ChartData<'bar'> = {
    labels: ['Gender'],
    datasets: [
      { data: [8], label: 'Male' },
      { data: [4], label: 'Female' }
    ],
  };

  // when the mouse hovers over a color an event message will open
  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  constructor() { }

  ngOnInit(): void {
  }

}


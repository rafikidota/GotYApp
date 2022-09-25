import { Component, OnDestroy, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/result';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit, OnDestroy {

  results: Result[] = [
    {
      "name": "Dota 2",
      "value": 33
    },
    {
      "name": "LoL",
      "value": 20
    },
    {
      "name": "Call of Duty",
      "value": 25
    },
    {
      "name": "Battlefield",
      "value": 21
    }
  ];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Games';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votes';

  colorScheme = 'nightLights';

  interval: any;

  constructor() {
  }

  ngOnInit(): void {
    this.updateChart();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  updateChart() {

    this.interval = setInterval(() => {
      console.log('tick');
      const newResults: Result[] = [...this.results];
      newResults.forEach(result => {
        result.value = Math.round(Math.random() * 500);
      });
      this.results = newResults;
    }, 3000);

  }


  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}

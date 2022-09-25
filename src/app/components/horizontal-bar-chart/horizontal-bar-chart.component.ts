import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit {

  results: any[] = [
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

  constructor() { }

  ngOnInit(): void { }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}

import { Component, OnInit } from '@angular/core';
import { GradeStatisticsService } from './grade-statistics.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-grade-statistics',
  templateUrl: './grade-statistics.component.html',
  styleUrls: ['./grade-statistics.component.css']
})
export class GradeStatisticsComponent implements OnInit {

  responseData: any = [];
  parseComplete = false;

  seriesData = [];
  seriesOveral = [];
  categories = [];
  categoriesOveral = [];

  constructor(private service: GradeStatisticsService) {

  }


  ngOnInit() {

    setTimeout(() => {
      this.getMasterData()

    });


  }

  createColumnChart() {
    console.log("series: ", this.seriesData);

    Highcharts.chart('mainChart', {
      chart: {
        type: 'column',
        backgroundColor: '#3A428D'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.categories,

        labels: {
          style: {
            color: 'white'
          }
        },
      },
      yAxis: {
        title: {
          text: ''
        },
        gridLineColor: 'grey',
        gridLineWidth: 1,
        gridLineDashStyle: 'Dot',
        labels: {
          style: {
            color: 'white'
          }
        },
      },
      plotOptions: {
        column: {
          borderRadius: 10,
          pointWidth: 20,
          borderWidth: 0,
          borderColor: 'transparent',
        }
      },
      legend: {
        enabled: false
      },
      colors: ['#1ad81a', 'orange', 'yellow'],
      series: this.seriesData

    });
  }

  createColumnChart2() {

    console.log("here----: ", this.seriesOveral);

    Highcharts.chart('secondChart', {
      chart: {
        type: 'column',
        backgroundColor: '#3A428D'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.categoriesOveral,

        labels: {
          style: {
            color: 'white'
          }
        },
      },
      yAxis: {
        title: {
          text: ''
        },
        gridLineColor: 'grey',
        gridLineWidth: 1,
        gridLineDashStyle: 'Dot',
        labels: {
          style: {
            color: 'white'
          }
        },
      },
      plotOptions: {
        column: {
          borderRadius: 10,
          pointWidth: 20,
          borderWidth: 0,
          borderColor: 'transparent',
          grouping: false,
          minPointLength: 1
        }
      },
      legend: {
        enabled: false
      },
      colors: ['#1ad81a', 'orange', 'yellow'],
      series: this.seriesOveral

    });
  }




  getMasterData() {

    this.service.getGradeData().subscribe(res => {

      // months.push(d.toLocaleString('default', { month: 'long' }));
      this.mapAndFormatData(res);

    });
    this.service.getOveralGrades().subscribe(res => {
      this.mapAndFormatData2(res);
    });

  }

  mapAndFormatData(res: any) {
    if (res) {
      let cats = [];
      let gradesA = [];
      let gradesB = [];
      let gradesC = [];
      let series = [];
      res.forEach(rec => {
        let d = new Date(rec['releasedOn']);
        cats.push(d.toLocaleString('default', { month: 'long' }));
        gradesA.push(Number(rec['A']));
        gradesB.push(Number(rec['B']));
        gradesC.push(Number(rec['C']));

      });
      series.push({
        type: 'column',
        name: 'A',
        data: gradesA,
      })
      series.push({
        type: 'column',
        name: 'B',
        data: gradesB,
      })
      series.push({
        type: 'column',
        name: 'C',
        data: gradesC,
      })
      this.categories = cats;
      this.seriesData = series;
      this.parseComplete = true

      setTimeout(() => {
        this.createColumnChart();
      });
    }
  }

  mapAndFormatData2(res: any) {
    this.categoriesOveral = Object.keys(res);

    this.seriesOveral.push({
      type: 'column',
      name: 'A',
      data: [Number(res['A']), 0, 0]
    })
    this.seriesOveral.push({
      type: 'column',
      name: 'B',
      data: [0, Number(res['B']), 0]
    })
    this.seriesOveral.push({
      type: 'column',
      name: 'C',
      data: [0, 0, Number(res['C'])]
    })

    setTimeout(() => {
      this.createColumnChart2()
    });

  }
}

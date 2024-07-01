import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { DashboardService } from '../services/dashboard.service';
import { PieChartModel } from '../models/pie.chart.model';
import { LineChartModel } from '../models/line.chart.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private dashService: DashboardService) {}

  pieChartValues: PieChartModel = {
    surconsommation: 0,
    sans_facture_reelle: 0
  };

  dataPie = [0, 0];

  dataLineChart: LineChartModel[] = [];
  dataLineChartMonths: string[] = [];
  dataLineChartKwh: number[] = [];
  dataLineChartTnd: number[] = [];



  dataWidgets= [
    {
      btKwh : 0,
      btTnd : 0,
    },
    {
      mtKwh : 0,
      mtTnd : 0,
    }
  ]


  dataTotalConsommation = {
    consommationTotalKwh : 0,
    consommationTotalTnd : 0
  }

  ngOnInit(): void {
    this.getPieChartValues();
    this.getValuesLineChart();
    this.getWidgetsValuesStat();
    this.getTotalConsommation();
  }

  /*******  line chart consommation */

  public lineChartData2: ChartConfiguration<'line'>['data'] = {
    labels: this.dataLineChartMonths,
    datasets: [
      {
        data: this.dataLineChartKwh,
        label: 'Consommation en Kwh',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,78,0,0.3)'
      },
      {
        data: this.dataLineChartTnd,
        label: 'Montant Consommation en TND',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255, 255, 0, 0.3)'
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  /***** pie chart */

  public pieChartLabels = ["Surconsommation d'énergie", "Site sans facturation réelle"];

  public pieChartDatasets = [
    {
      data: this.dataPie
    }
  ];

  public pieChartLegend = true;

  public pieChartOptions2: ChartOptions<'pie'> = {
    responsive: true,  // Make the chart responsive
    maintainAspectRatio: false,  // Maintain the aspect ratio
    plugins: {
      legend: {
        display: true,  // Show legend
        position: 'top',  // Legend position (top, left, bottom, right)
        align: 'center',  // Align legend horizontally
        labels: {
          padding: 20,  // Padding between legend and chart
          boxWidth: 20,  // Width of the colored box
          font: {
            size: 14,  // Font size for legend labels
            family: 'Arial',  // Font family for legend labels
          },
          color: 'black',  // Font color for legend labels
        }
      },
      title: {
        display: true,  // Show title
        text: 'Les Alerts Systéme',  // Title text
        padding: {
          top: 10,
          bottom: 30
        },
        font: {
          size: 18,
          family: 'Arial'
        },
        color: 'black'
      },
      tooltip: {
        enabled: true,  // Enable tooltips
        backgroundColor: 'rgba(0, 0, 0, 0.8)',  // Tooltip background color
        titleFont: {
          size: 16,
          family: 'Arial'
        },
        bodyFont: {
          size: 14,
          family: 'Arial'
        },
        padding: 10
      }
    }
  };

  /************************  api pie chart */
  getPieChartValues() {
    this.dashService.getValuesPieChart().subscribe({
      next: (response: any) => {
        console.log('response pie chart = ', response);
        this.pieChartValues = response.body;
        this.updatePieChartData();
      },
      error: (error: any) => {
        console.log('error pie chart values ', error);
      }
    });
  }

  updatePieChartData() {
    this.dataPie = [this.pieChartValues.surconsommation, this.pieChartValues.sans_facture_reelle];
    this.pieChartDatasets = [
      {
        data: this.dataPie
      }
    ];
  }

  /********************** api line chart  */
  getValuesLineChart() {
    this.dashService.getValuesLineChart().subscribe({
      next: (response: any) => {
        if (response && response.body && Array.isArray(response.body)) {
          this.dataLineChart = response.body.map((item: any) => new LineChartModel(
            item[0],  // Assurez-vous que ces index correspondent à votre réponse API
            item[1],
            item[2],
            item[3]
          ));

          this.dataLineChartMonths = this.dataLineChart
          .sort((a, b) => {
            if (a.year === b.year) {
              return a.month - b.month;
            } else {
              return a.year - b.year;
            }
          })
          .map((x) => this.getDate(x.month, x.year));
          this.dataLineChartKwh = this.dataLineChart.map((x) => x.consommationkwh);
          this.dataLineChartTnd = this.dataLineChart.map((x) => this.convertToDinar(x.consommationtnd));
          this.updateLineChartData();
        } else {
          console.error('Invalid response body', response);
        }
        console.log('line chart array = ', this.dataLineChart);
      },
      error: (error: any) => {
        console.log('line chart error ', error);
      }
    });
  }

  updateLineChartData() {
    this.lineChartData2 = {
      labels: this.dataLineChartMonths,
      datasets: [
        {
          data: this.dataLineChartKwh,
          label: 'Consommation en Kwh',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(255,78,0,0.3)'
        },
        {
          data: this.dataLineChartTnd,
          label: 'Montant Consommation en TND',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(255, 255, 0, 0.3)'
        }
      ]
    };
  }


  /**** widgets stats */
  getWidgetsValuesStat(){
    this.dashService.getValuesForWidgets().subscribe({
      next : (response :any ) => {
        console.log('response widgets stat ', response);
        this.dataWidgets[0].btKwh = response.body[0][0];
        this.dataWidgets[0].btTnd = this.convertToDinar(response.body[0][1]);

        this.dataWidgets[1].mtKwh = response.body[1][0];
        this.dataWidgets[1].mtTnd = this.convertToDinar(response.body[1][1]);
      }
    })
  }



  /*** total consommation */
  getTotalConsommation(){
    this.dashService.getTotalConsommationDepuisPremierJanvier().subscribe({
      next : (response :any) => {
        console.log('total cons ', response);
        this.dataTotalConsommation = {
          consommationTotalKwh : response.body[0][0],
          consommationTotalTnd : this.convertToDinar(response.body[0][1])
        }
      },
      error : (error : any) => {
        console.log('error dashboard total consommation  ', error);
      }
    })
  }



  /** utils */
  getDate(month : number, year : number) : string{
    var monthString = '';
    switch(month){
      case 1 : monthString = "Janvier/"+year; break;
      case 2 : monthString = "Février/"+year; break;
      case 3 : monthString = "Mars/"+year; break;
      case 4 : monthString = "Avril/"+year; break;
      case 5 : monthString = "Mai/"+year; break;
      case 6 : monthString = "Juin/"+year; break;
      case 7 : monthString = "Juillet/"+year; break;
      case 8 : monthString = "Aout/"+year; break;
      case 9 : monthString = "Septembre/"+year; break;
      case 10 : monthString = "Octobre/"+year; break;
      case 11 : monthString = "Novembre/"+year; break;
      default : monthString = "Décembre/"+year; break;
    }
    return monthString;
  }


  convertToDinar(montant : number){
    return montant / 1000;
  }

}

export class LineChartModel
{
  consommationkwh : number;
  consommationtnd : number;
  month : number;
  year : number ;


  constructor(consommationkwh : number,consommationtnd : number, month : number, year : number){
    this.consommationkwh = consommationkwh;
    this.consommationtnd = consommationtnd;
    this.month = month;
    this.year = year
  }


  getConsommationKwh(): number{
    return this.consommationkwh;
  }

  getConsommationTnd(): number{
    return this.consommationtnd;
  }

  getMonth(): number{
    return this.month;
  }

  getYear(): number{
    return this.year;
  }
}

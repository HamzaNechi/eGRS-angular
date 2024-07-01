export interface AlertModel{
  alertVisitId: number,
  site : {
    siteCode : string
  },
  alertTypes : {
    description : string
  },
  requiredConsommation :number,
  stegEstConsommation : number,
  difference : number,
  dateAlert : Date
}

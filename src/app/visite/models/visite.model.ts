export interface VisiteModel{
  visiteId: number,
  indexCompteur : number,
  photoCompteur: string,
  dateInsertion: Date,
  commentaire :string,
  login :{
    login: string,
  },
  site : {
    siteCode : string
  },
  otn: number,
  oo: number,
  tt: number,
  indexTT : number,
  indexOO: number
}

export interface ItemFacture{
  itemId : number,
  itemType : number,
  itemDate : Date;
  consumptionKwh? : number;
  consumptionAmount? : number;
  credit? : number;
  tva? : number;
  finalSale : number;
  invoice : {
    invoiceId : number,
    year : number,
    month : number
  }
}

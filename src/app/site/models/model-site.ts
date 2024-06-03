export interface SiteModel
{
  siteId? : number;
  elecType : number;
  siteCode? : string;
  elecMeterRef : string;
  directionId? : {
    directionId : number,
    description : string
  };
  statusId : {
    statusId : number,
    description : string
  };
  networkTypeId? : {
    networkTypeId : number,
    description : string
  };
  configuration? : string;
  estimatedConsumption? : number;
  siteName? : string;
  isSharing : number;
}

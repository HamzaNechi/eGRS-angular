export interface ReclamationModel{
  reclamationId: number,
  objet: string,
  probleme: String,
  description :string,
  login :{
    login: string,
  },
  dateInsertion : Date
}

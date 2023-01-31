export interface ICurrentSportEventUser {
  idUser: number;
  sportEvent: {
    country: string
    match: string
    region: string
    stadium: string
    start: string
    tournament: string
  }
}
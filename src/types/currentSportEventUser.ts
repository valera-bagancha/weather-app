export interface ICurrentSportEventUser {
  userId: number;
  sportEvent: {
    country: string
    match: string
    region: string
    stadium: string
    start: string
    tournament: string
  }
}
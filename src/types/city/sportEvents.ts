export interface ICricket{
  country: string;
  match: string;
  region: string;
  stadium: string;
  start: string;
  tournament: string;
}

export interface IFootball {
  country: string;
  match: string;
  region: string;
  stadium: string;
  start: string;
  tournament: string;
  [key: string]: string;
}

export interface IGolf{
  country: string;
  match: string;
  region: string;
  stadium: string;
  start: string;
  tournament: string;
}

export interface ISportEvents {
  userId: number
  cricket: ICricket[];
  football: IFootball[];
  golf: IGolf[]
}

export interface ISport {
  userId: number
  sportEvent: {
    country: string;
    match: string;
    region: string;
    stadium: string;
    start: string;
    tournament: string;
  }
}
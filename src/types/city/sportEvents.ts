export interface ICricket{
  country: string;
  match: string;
  region: string;
  stadium: string;
  start: string;
  tournament: string;
  [key: string]: any
}

export interface IFootball {
  country: string;
  match: string;
  region: string;
  stadium: string;
  start: string;
  tournament: string;
  [key: string]: any
}

export interface IGolf{
  country: string;
  match: string;
  region: string;
  stadium: string;
  start: string;
  tournament: string;
  [key: string]: any
}

export interface ISportEvents {
  cricket: ICricket[];
  football: IFootball[];
  golf: IGolf[]
}
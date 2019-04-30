export interface ICoord {
    lat: number;
    lon: number;
}

export interface ICity {
    id: number;
    name: string;
    coord: ICoord;
    country: string;
    population: number;
}
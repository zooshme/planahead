import { IWeatherDetails } from "./IWeatherDetails"
import { ICity } from './ICity'

export interface IData {
    cod: string;
    message: number;
    cnt: number;
    list: IWeatherDetails[];
    city: ICity;
}
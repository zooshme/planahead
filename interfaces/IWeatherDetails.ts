export interface IMainInfo {
    temp:number;
    temp_min:number;
    temp_max:number;
    pressure:number;
    sea_level:number;
    grnd_level:number;
    humidity:number;
    temp_kf:number;
}

export interface ISnowInfo {
    ['3h']:number;
}

export interface IRainInfo {
    ['3h']:number;
}

export interface ICloudsInfo {
    all:number;
}

export interface IWindInfo {
    speed:number;
    deg:number;
}

export interface IWeatherInfo {
    id:number;
    main:string;
    description:string;
    icon:string;
}

export interface ISys {
    pod: string;
}

export interface IWeatherDetails {
    dt: number;
    main:IMainInfo;
    weather:IWeatherInfo[];
    clouds:ICloudsInfo;
    wind:IWindInfo;
    rain?:IRainInfo;
    snow?:ISnowInfo;
    sys: ISys;
    dt_txt: string;
}
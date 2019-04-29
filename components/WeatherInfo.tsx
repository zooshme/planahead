import React from 'react'

interface IMain {
    temp:string;
    temp_min:string;
    temp_max:string;
    pressure:string;
    sea_level:string;
    grnd_level:string;
    humidity:string;
    temp_kf:string;
}

interface ISnow {
    ['3h']:string;
}

interface IRain {
    ['3h']:string;
}

interface IClouds {
    all:string;
}

interface IWind {
    speed:string;
    deg:string;
}

interface IWeather {
    id:string;
    main:string;
    description:string;
    icon:string;
}

interface IProps {
    main:IMain;
    weather:IWeather[];
    clouds:IClouds;
    wind:IWind;
    rain?:IRain;
    snow?:ISnow;
}


const WeatherInfo:React.StatelessComponent<IProps> = ({ 
    main: { 
        temp, 
        temp_min, 
        temp_max, 
        pressure, 
        sea_level, 
        grnd_level, 
        humidity, 
        temp_kf 
    }, 
    weather: [{
        id, 
        main: weatherMain, 
        description, 
        icon 
    }], 
    clouds: { all: cloudsAll }, 
    wind: { speed, deg }, 
    rain,
    snow
}) => {
        return (
            <div>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} />
                {temp}  
                <span>{weatherMain} - {description}</span>
                <span>{speed} {deg}</span>
                <span>{cloudsAll}</span>
                {rain && (<span>{rain['3h']}</span>)}
                {snow && (<span>{snow['3h']}</span>)}
            </div>
        )
    }

export default WeatherInfo
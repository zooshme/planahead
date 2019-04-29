import React from 'react'
import { convertKelvinToCelsius } from '~/helpers'
import { rem, vars } from '~/shared'

interface IMain {
    temp:number;
    temp_min:number;
    temp_max:number;
    pressure:number;
    sea_level:number;
    grnd_level:number;
    humidity:number;
    temp_kf:number;
}

interface ISnow {
    ['3h']:number;
}

interface IRain {
    ['3h']:number;
}

interface IClouds {
    all:number;
}

interface IWind {
    speed:number;
    deg:number;
}

interface IWeather {
    id:string;
    main:string;
    description:string;
    icon:string;
}

export interface IWeatherInfo {
    main:IMain;
    weather:IWeather[];
    clouds:IClouds;
    wind:IWind;
    rain?:IRain;
    snow?:ISnow;
}


const WeatherInfo:React.StatelessComponent<IWeatherInfo> = ({ 
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
            <div className="weather-info">
                <img data-id="icon" className="icon" src={`http://openweathermap.org/img/w/${icon}.png`} />
                <div id="description" data-id="description" className="description">{description}</div>
                <div data-id="humidity" className="humidity">Humidity: {humidity}%</div>
                <div data-id="temperature" className="temperature">Temperature: {Math.round(convertKelvinToCelsius(temp))}{'\u00b0'}C</div>  
                <div data-id="wind" className="wind">Wind: {speed} {deg}</div>
                <div data-id="clouds" className="clouds">Clouds: {cloudsAll}%</div>
                {rain && (<div data-id="rain" className="rain">Rain Volume: {rain['3h']}mm/3h</div>)}
                {snow && (<div data-id="snow" className="snow">Snow Volume: {snow['3h']}</div>)}

                <style jsx>{`
                    .weather-info {
                        height: ${rem(200)};
                    }
                    .description {
                        font-size: ${rem(26)};
                        font-family: ${vars.headingFont};
                        font-weight: 600;
                        line-height: ${rem(30)};
                        margin-bottom: ${rem(10)};
                        text-transform: capitalize;
                    }    
                `}</style>
            </div>
        )
    }

export default WeatherInfo
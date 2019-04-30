import React from 'react'
import { convertKelvinToCelsius } from '~/helpers'
import { rem, vars } from '~/shared'
import Celsius from './Celsius'
import { IWeatherDetails } from '~/interfaces'

const WeatherDetails:React.StatelessComponent<IWeatherDetails> = ({ 
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
                <div data-id="temperature" className="temperature">Temperature: <Celsius temp={temp} />{'\u00b0'}C</div>  
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

export default WeatherDetails
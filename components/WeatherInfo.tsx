import React from 'react'
import { rem, vars } from '~/shared'
import { IWeatherInfo } from '~/interfaces'
import Celsius from './Celsius'

interface IProps extends IWeatherInfo {
    temp: number;
}

const WeatherInfo:React.StatelessComponent<IProps> = 
    ({ description, icon, temp }) => {
        return (
            <div className="weather-info">
                <div className="icon-wrapper">
                    <img data-id="icon" className="icon" src={`http://openweathermap.org/img/w/${icon}.png`} />
                </div>
                <div className="info">
                    <h4 data-id="title" className="title"><Celsius temp={temp} /></h4>
                    <div data-id="description" className="description">{description}</div>
                </div>

                <style jsx>{`
                    .weather-info {
                        display: flex;
                        align-items: center;
                    }
                    .icon-wrapper {
                        flex: 1;
                    }
                    .info {
                        flex: 2;
                    }
                    .title {
                        font-size: ${rem(26)};
                        font-family: ${vars.headingFont};
                        font-weight: 600;
                        line-height: ${rem(30)};
                        margin-bottom: ${rem(10)};
                        text-transform: uppercase;
                    }

                    .description {
                        text-transform: capitalize;
                    }    
                `}</style>
            </div>
        )
    }

export default WeatherInfo
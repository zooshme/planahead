import { StatelessComponent, HTMLAttributes } from 'react'

import { vars, rem } from '~/shared'
import Slot from './Slot'
import WeatherInfo from './WeatherInfo'
import { daysOfWeek } from '~/fixtures'
import { IWeatherDetails } from '~/interfaces'

interface IProps {
    date: any;
    value: any;
}

const Day: StatelessComponent<IProps & HTMLAttributes<HTMLDivElement>> = ({ className, date, value }) => {
    console.log(date)
    const day = new Date(date)
    const dayOfWeek = daysOfWeek[day.getDay()]
    
    return (
        <div className={`day ${className}`}>
            <h3 className="title">{dayOfWeek}</h3>
            {value
                .map((details: IWeatherDetails, i: number) => (
                    <Slot key={i}>
                        <WeatherInfo {...details.weather[0]} temp={details.main.temp} />
                    </Slot>
                ))}
    
            <style jsx>{`
                .day {
                    flex: 1;
                    padding: ${rem(10)} ${rem(16)};
                }
    
                .title {
                    font-family: ${vars.headingFont};
                    font-weight: 600;
                    text-transform: uppercase;
                    font-size: ${rem(26)};
                    line-height: ${rem(30)};
                }	
            `}</style>
        </div>
    )
} 

export default Day
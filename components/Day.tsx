import { vars, rem } from '~/shared'
import Slot from './Slot'
import WeatherInfo from './WeatherInfo'
import { daysOfWeek } from '~/fixtures'

const Day = ({ className, date, value }) => {
    console.log(date)
    const day = new Date(date)
    const dayOfWeek = daysOfWeek[day.getDay()]
    
    return (
        <div className={`day ${className}`}>
            <h3 className="title">{dayOfWeek}</h3>
            {value
                .map((weatherInfo, i) => (
                    <Slot key={i}>
                        <WeatherInfo {...weatherInfo} />
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
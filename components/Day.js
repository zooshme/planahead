import { vars, rem } from '~/shared'
import Slot from './Slot'

const Day = ({ className, date, value: { main, weather, clouds, wind, rain } }) => {
    const day = new Date(date)
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day.getDay()]
    return (
        <div className={`day ${className}`}>
            <h3 className="title">{dayOfWeek}</h3>
            {[0, 3, 6, 9, 12, 3, 6, 9]
                .map((slot, i) => <Slot slot={slot} key={i} weather={weather} />)}
    
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
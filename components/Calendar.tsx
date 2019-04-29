import { vars } from '~/shared'

const Calendar = ({ children }) => (
    <div className="calendar">
        {children}

        <style jsx>{`
            .calendar {
                background-color: white;
            }    
        `}</style>
    </div>
)

export default Calendar
import { FC } from 'react'

import { vars } from '~/shared'

const Calendar: FC<{}> = ({ children }) => (
    <div className="calendar">
        {children}

        <style jsx>{`
            .calendar {
                background-color: ${vars.white};
            }    
        `}</style>
    </div>
)

export default Calendar
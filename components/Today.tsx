import { StatelessComponent } from 'react'

import { rem } from '~/shared'
import WeatherDetails from './WeatherDetails'
import Centred from './Centred'

interface IProps {
    value: any;
}

const Today: StatelessComponent<IProps> = ({ children, value }) => (
    <header className="today">
        {children}

        <Centred horizontal vertical>
            <WeatherDetails {...value} />
        </Centred>

        <style jsx>{`
            .today {
                height: 300px;
                background: linear-gradient(green, blue);
            }    
        `}</style>
    </header>
)

export default Today
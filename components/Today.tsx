import { StatelessComponent } from 'react'

import { rem } from '~/shared'
import WeatherInfo from './WeatherInfo'
import Centred from './Centred'

interface IProps {
    value: any;
}

const Today: StatelessComponent<IProps> = ({ children, value }) => (
    <header className="today">
        {children}

        <Centred horizontal vertical>
            <WeatherInfo {...value} />
        </Centred>

        <style jsx>{`
            .today {
                height: 300px;
                background: linear-gradient(green, blue);
                margin-bottom: ${rem(20)};
            }    
        `}</style>
    </header>
)

export default Today
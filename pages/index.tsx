import { StatelessComponent, useEffect, useReducer } from 'react'
import axios from 'axios'

import { IStatelessPage } from '~/interfaces'
import { Container, Layout, Day, Row, Today, Calendar } from '~/components'
import { groupByDate } from '~/getters'
import { fetchWeather } from '~/api'
import reducer from '~/reducers'

const initialState = {
    city: 'Glasgow',
    country: 'uk',
    weather: { list: [] }
}

interface IProps {
    data?: any;
    error?: any;
}

const Page: IStatelessPage<IProps> = ({ data = { list: [] }, error }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    if (error) {
        return (
            <Layout>
                <div>{error.message}</div>
            </Layout>
        )
    } else {
        const days = groupByDate(data.list)
        return (
            <Layout>
                <Today value={data.list[0]} />
                <Container>
                    <Calendar>
                        <Row>
                            {Object.entries(days)
                                .map(([date, value], i) => 
                                    <Day key={i} date={date} value={value} />
                            )}
                        </Row>
                    </Calendar>
                </Container>
            </Layout>
        )
    }

} 

Page.getInitialProps = async () => {
    const response = await fetchWeather({ city: 'Glasgow', country: 'uk' })
    return { error: response.error, data: response.data }
}

export default Page
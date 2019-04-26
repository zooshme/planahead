import { useEffect, useReducer } from 'react'
import axios from 'axios'

import { Container, Layout, Day, Row, Today, Calendar } from '~/components'
import { groupByDate } from '~/getters'
import { fetchWeather } from '~/api'

const initialState = {
    city: 'Glasgow',
    country: 'uk',
    weather: { list }
}

const IndexPage = ({ data: { list }, err = null }) => {
    const days = groupByDate(list)
    
    return (
        <Layout>
            <Today />
            <Container>
                <Calendar>
                    <Row>
                        {Object.entries(days)
                            .map(([date, value], i) => <Day key={i} date={date} value={value} />)}
                    </Row>
                </Calendar>
            </Container>
        </Layout>
    )
}

IndexPage.getInitialProps = async () => {
    return fetchWeather({ city: 'Glasgow', country: 'uk' })
}

export default IndexPage
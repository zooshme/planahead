import { useEffect, useReducer } from 'react'
import axios from 'axios'

import { Container, Layout, Day, Row, Today, Calendar } from '~/components'
import { groupByDate } from '~/getters'
import { fetchWeather } from '~/api'

const initialState = {
    city: 'Glasgow',
    country: 'uk',
    weather: { list: [] }
}

const IndexPage = ({ data = {}, error }) => {
    if (error) {
        return (
            <Layout>
                <div>Error</div>
            </Layout>
        )
    } else {
        const days = groupByDate(data.list)
        console.log(data, data.list, days)
        return (
            <Layout>
                <Today />
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

IndexPage.getInitialProps = async () => {
    const response = await fetchWeather({ city: 'Glasgow', country: 'uk' })
    console.log('response from initialProps', response)
    return { error: response.error, data: response.data }
}

export default IndexPage
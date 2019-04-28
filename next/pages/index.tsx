import { StatelessComponent, useEffect, useReducer } from 'react'

import { AppContextProvider } from '~/contexts'
import { Container, Layout, Day, Row, Today, Calendar, ErrorMessage, Loading } from '~/components'
import { groupByDate } from '~/getters'
import { fetchWeather } from '~/api'
import { updateWeather, updateError, updateLoading } from '~/actions'
import reducer from '~/reducers'

const initialState = {
    city: 'Glasgow',
    country: 'uk',
    data: { list: [] },
    error: null,
    loading: false
}

const Page: StatelessComponent<{}> = () => {
    const [{ city, country, data, error, loading }, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch(updateLoading(true))
        fetchWeather({ city, country })
            .then(({ data }) => {
                dispatch(updateWeather(data.data))
                dispatch(updateLoading(false))
            })
            .catch((error) => {
                dispatch(updateError(error))
                dispatch(updateLoading(false))
            })
    }, [0])

    const days = groupByDate(data.list)


    return (
        <AppContextProvider>
            <Layout>
                {loading 
                ? <Container><Loading /></Container>
                : error
                ? (
                    <Container>
                        <ErrorMessage>{error.message}</ErrorMessage>
                    </Container>
                )
                : (
                    <div>
                        {data.list[0] && <Today value={data.list[0]} />}
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
                    </div>
                )}
            </Layout>
        </AppContextProvider>
    )
}

export default Page
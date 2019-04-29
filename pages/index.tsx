import { useEffect, useReducer } from 'react'

import { AppContextProvider } from '~/contexts'
import { Container, Layout, Day, Row, Today, Calendar, ErrorMessage, Loading } from '~/components'
import { groupByDate } from '~/getters'
import { fetchWeather } from '~/api'
import { updateWeather, updateError, updateLoading } from '~/actions'
import reducer from '~/reducers'
import { IStatelessPage } from '~/interfaces'

const initialState = {
    city: 'Glasgow',
    country: 'uk',
    data: { list: [] },
    error: null,
    loading: false,
    isOverlayVisible: false
}

interface IProps {
    environment?: string;
}

const Page: IStatelessPage<IProps> = () => {
    const [{ 
        city, 
        country, 
        data, 
        error, 
        loading, 
        isLocationFormVisible 
    }, dispatch] = useReducer(reducer, initialState)

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
        <AppContextProvider
            value={{
                dispatch,
                city,
                country,
                isLocationFormVisible
            }}
        >
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
                            <Calendar>
                                <Row>
                                    {Object.entries(days)
                                        .map(([date, value], i) => 
                                            <Day key={i} date={date} value={value} />
                                    )}
                                </Row>
                            </Calendar>
                    </div>
                )}
            </Layout>
        </AppContextProvider>
    )
}

Page.getInitialProps = () => {
    return new Promise((resolve) => {
        const { NODE_ENV } = process.env
        resolve({ environment: NODE_ENV })
    })
}

export default Page
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_COUNTRY = 'UPDATE_COUNTRY'
export const UPDATE_WEATHER = 'UPDATE_WEATHER'
export const UPDATE_ERROR = 'UPDATE_ERROR'
export const LOAD_WEATHER = 'LOAD_WEATHER'
export const UPDATE_LOADING = 'LOADING'

export const updateCity = (city) => ({
    type: UPDATE_CITY,
    payload: { city }
})

export const updateCountry = (country) => ({
    type: UPDATE_COUNTRY,
    payload: { country }
})

export const updateWeather = (data) => ({
    type: UPDATE_WEATHER,
    payload: { data }
})

export const updateError = (error) => ({
    type: UPDATE_ERROR,
    payload: { error }
})

export const updateLoading = (loading) => ({
    type: UPDATE_LOADING,
    payload: { loading }
})

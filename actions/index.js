export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_COUNTRY = 'UPDATE_COUNTRY'
export const UPDATE_WEATHER = 'UPDATE_WEATHER'

export const updateCity = (city) => ({
    type: UPDATE_CITY,
    payload: { city }
})

export const updateCountry = (country) => ({
    type: UPDATE_COUNTRY,
    payload: { country }
})

export const updateWeather = (weather) => ({
    type: UPDATE_WEATHER,
    payload: { weather }
})

// export const loadWeather = () => ({
//     type: 
// })
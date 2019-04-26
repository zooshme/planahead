import { 
    UPDATE_CITY, 
    UPDATE_COUNTRY, 
    UPDATE_WEATHER, 
    LOADING
} from '~/actions'

export default (state, { type, payload }) => {
    switch(type) {
        case UPDATE_CITY: 
            return {
                ...state,
                city: payload.city
            }

        case UPDATE_COUNTRY:
            return {
                ...state,
                country: payload.country
            }

        case UPDATE_WEATHER:
            return {
                ...state,
                weather: payload.weather
            }
            
        case LOADING:
            return {
                ...state,
                loading: payload.loading
            }
            
        default:
            return state
    }
}
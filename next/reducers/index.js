import { 
    UPDATE_CITY, 
    UPDATE_COUNTRY, 
    UPDATE_WEATHER, 
    UPDATE_LOADING,
    UPDATE_ERROR,
    TOGGLE_LOCATION_FORM
} from '~/actions'

export default (state, { type, payload }) => {
    console.log(state, type, payload )
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
                data: payload.data
            }

        case UPDATE_ERROR: 
            return {
                ...state,
                error: payload.error
            }
            
        case UPDATE_LOADING:
            return {
                ...state,
                loading: payload.loading
            }

        case TOGGLE_LOCATION_FORM:
            return {
                ...state,
                isLocationFormVisible: payload.isLocationFormVisible
            }
            
        default:
            return state
    }
}
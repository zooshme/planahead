import { FC, useContext, FormEvent, useState } from 'react'
import { AppContext } from '~/contexts'
import InputField from './InputField'
import SelectField from './SelectField'
import Button from './Button'
import { 
    updateCity, 
    updateCountry, 
    updateWeather, 
    updateLoading,
    updateError
} from '~/actions'
import { fetchWeather } from '~/api'
import { countries } from '~/fixtures'

interface IProps {
    close: () => any;
}

const LocationForm: FC<IProps> = ({ close }) => {
    const { city, country, dispatch } = useContext(AppContext)
    const [newCity, setCity ] = useState(city)
    const [newCountry, setCountry ] = useState(country)

    const onSubmitHandler = (e: FormEvent) => {
        e.preventDefault()
        dispatch(updateLoading(true))
        fetchWeather({ city: newCity, country: newCountry })
            .then(({ data }) => {
                dispatch(updateLoading(false))
                dispatch(updateWeather(data.data))
                dispatch(updateCity(newCity))
                dispatch(updateCountry(newCountry))
                close()
            })
            .catch((error) => {
                dispatch(updateLoading(false))
                updateError(error)
                close()
            })
        close()
    }

    return (
        <form className="form" onSubmit={onSubmitHandler}>
            <InputField 
                label="City"
                type="text" 
                name="city" 
                id="city"
                placeholder="City"
                value={newCity}
                onChange={(value) => setCity(value) }
            />
            <SelectField
                id="country"
                name="country"
                label="Country"
                value={newCountry}
                options={countries}
                placeholder={'Select a country'}
                onChange={(value) => setCountry(value)}
            />
            <Button type="submit" text="Get weather forecast" />
        </form>
    )
}

export default LocationForm
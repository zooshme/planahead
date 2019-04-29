import { FC, useContext, SyntheticEvent } from 'react'
import { AppContext } from '~/contexts'
import { toggleLocationForm } from '~/actions';
import Modal from './Modal'
import LocationForm from './LocationForm'

const Location: FC<{}> = () => {
    const { 
        city, 
        country, 
        dispatch, 
        isLocationFormVisible 
    } = useContext(AppContext)

    const onClickHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(toggleLocationForm(true))
    }

    const close = () => dispatch(toggleLocationForm(false))

    return (
        <div className="location">
            <span>{city}</span>
            <span>, </span>
            <span>{country.toUpperCase()}</span>
            <a 
                className="change-location" 
                href="#"
                onClick={onClickHandler}
            >Change location</a>

            {isLocationFormVisible && (
                <Modal close={close}>
                    <LocationForm close={close} />
                </Modal>
            )}

            <style jsx>{`
                .location {

                }

                .change-location {

                }
            `}</style>
        </div>
    )
}

export default Location
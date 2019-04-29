import { useContext, FC } from 'react'

import { AppContext } from '~/contexts'
import AppHeader from './AppHeader'
import Overlay from './Overlay'

const Layout: FC<{}> = ({ children }) => {
    const { isOverlayVisible } = useContext(AppContext)
    return (
        <div>
            <AppHeader />
            {children}

            {isOverlayVisible && <Overlay />}
        </div>
    )
}

export default Layout
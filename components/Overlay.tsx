import { FC } from 'react'

import { vars } from '~/shared'

export interface IOverlay {
    close: () => void;
}

const Overlay: FC<IOverlay> = ({ children, close }) => (
        <div className="overlay" onClick={() => close()}>
            {children}
            
            <style jsx>{`
                .overlay {
                    background-color: ${vars.overlay};
                    position: fixed;
                    height: 100%;
                    width: 100%;
                    top: 0;
                    left: 0
                }    
            `}</style>
        </div>
    )

export default Overlay
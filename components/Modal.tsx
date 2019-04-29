import { FC, MouseEvent } from 'react'

import { rem, vars } from '~/shared'
import Overlay, { IOverlay } from './Overlay'
import Centred from './Centred'

interface IModal extends IOverlay {

}

const Modal: FC<IModal> = ({ children, close }) => {
    const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    return (
        <Overlay close={close}>
            <Centred horizontal vertical>
                <div className="modal" onClick={onClickHandler}>
                    {children}
                </div>
            </Centred>
    
            <style jsx>{`
                .modal {
                    background-color: ${vars.white};
                    padding: ${rem(20)} ${rem(26)};
                    max-width: $rem(600);
                    border-radius: 12px;
                    box-shadow: 0 7px 24px ${vars.overlay};
                }    
            `}</style>
        </Overlay>
    )
} 

export default Modal
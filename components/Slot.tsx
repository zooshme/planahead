import { StatelessComponent } from 'react'

import { rem, vars } from '~/shared'

const Slot: StatelessComponent = ({ slot, children }) => (
    <div className="slot">
        <div className="slot__inner">
            {slot}
            {children}
        </div>
        <style jsx>{`
            .slot {
                padding: 2px;
            }

            .slot__inner {
                background-color: ${vars.paperColor};
                padding: ${rem(10)};
                border-radius: 4px;
            }    
        `}</style>
    </div>   
)

export default Slot
import { rem } from '~/shared/css'

const Slot = ({ slot, children }) => (
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
                background-color: grey;
                color: white;
                padding: ${rem(10)};
                border-radius: 4px;
            }    
        `}</style>
    </div>   
)

export default Slot
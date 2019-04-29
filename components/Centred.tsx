import { FC } from 'react'

interface IProps {
    vertical?: boolean;
    horizontal?: boolean
}

const Centred: FC<IProps> = ({ children, vertical, horizontal }) => (
    <div className="centred">
        {children}

        <style jsx>{`
            .centred {
                display: flex;
                width: 100%;
                height: 100%;
                ${vertical ? 'align-items: center;' : '' }
                ${horizontal ? 'justify-content: center;' : '' }
            }    
        `}</style>
    </div>
)

export default Centred
import { FC } from 'react'


const Field: FC<{}> = ({ children }) => (
    <div className="field">
        {children}
        
        <style jsx>{`
            .field {
                
            }    
        `}</style>
    </div>
)

export default Field
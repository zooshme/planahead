import { rem } from '~/shared'

const Today = ({ children }) => (
    <header className="today">
        {children}

        <style jsx>{`
            .today {
                height: 300px;
                background: linear-gradient(green, blue);
                margin-bottom: ${rem(20)};
            }    
        `}</style>
    </header>
)

export default Today
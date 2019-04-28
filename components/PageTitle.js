import { rem, vars } from '~/shared/css'

const PageTitle = ({ className, children }) => (
    <h1 className={`page-title ${className}`}>
        {children}

        <style jsx>{`
            .page-title {
                font-size: ${rem(42)};
                font-family: ${vars.headingFont};
                font-weight: 600;
            }    
        `}</style>
    </h1>
)

export default PageTitle
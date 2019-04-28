import Logo from './Logo'
import Container from './Container'

const Layout = ({ children }) => (
	<div className="layout">
		<Container>
			<Logo />
		</Container>
        {children}
        
        <style jsx>{`
            .layout {
                
            }    
        `}</style>
	</div>
)

export default Layout
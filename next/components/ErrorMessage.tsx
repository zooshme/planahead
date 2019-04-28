import { StatelessComponent } from 'react'

const ErrorMessage: StatelessComponent<{}> = ({ children }) => (
	<div className="error-message">
		{children}
		<style jsx>{`
			.error-message {

			}	
		`}</style>
	</div>
)

export default ErrorMessage
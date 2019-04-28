import { StatelessComponent } from 'react'

const Row: StatelessComponent<React.HTMLAttributes<HTMLDivElement>> = ({ className, children }) => (
	<div className={`row ${className}`}>
		{children}

		<style jsx>{`
			.row {
				display: flex;
			}	
		`}</style>
	</div>
)

export default Row
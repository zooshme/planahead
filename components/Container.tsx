import { StatelessComponent } from 'react'

const Container: StatelessComponent<React.HtmlHTMLAttributes<HTMLDivElement>> = ({ className, children }) => (
	<div className={`container ${className}`}>
		{children}

		<style jsx>{`
			.container {
				max-width: 1300px;
				margin-left: auto;
				margin-right: auto;
			}
		`}
		</style>
	</div>
)

export default Container
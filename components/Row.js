const Row = ({ className, children }) => (
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
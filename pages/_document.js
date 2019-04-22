import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<title>Plan Ahead</title>
					<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/611456/6413412/css/fonts.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
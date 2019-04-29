import { FC } from 'react'
import Container from './Container'

const Loading: FC<{}> = () => (
    <Container>
        <div className="loading">Loading...</div>
    </Container>
)

export default Loading
import { FC, HTMLAttributes } from 'react'

interface IProps {
    htmlFor: string;
}

const Label: FC<IProps & HTMLAttributes<HTMLLabelElement>> = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor}>
        {children}
    </label>
)

export default Label
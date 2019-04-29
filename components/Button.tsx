import { FC } from 'react'

interface IProps {
    type?:  'submit' | 'reset' | 'button';
    text: string;
}

const Button: FC<IProps> = ({ type, text }) => (
    <button className="button" type={type}>
        {text}
        <style jsx>{`
            .button {

            }
        `}</style>
    </button>
)

export default Button


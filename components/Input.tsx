import { FC, ChangeEvent } from 'react'

export interface IInput {
    type: string;
    name: string;
    id: string;
    value: string;
    placeholder: string;
    onChange: (value:string) => void;
}

const Input: FC<IInput> = ({ onChange, ...rest }) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        e.preventDefault()
        onChange(e.target.value)
    }
    return (
        <input {...rest} onChange={onChangeHandler}/>
    )
}

export default Input
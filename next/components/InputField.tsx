import { FC } from 'react'

import Field from './Field'
import Label from './Label'
import Input, { IInput } from './Input'

interface IProps extends IInput {
    label: string;
}

const InputField: FC<IProps> = ({ 
    label,
    ...rest
}) => {
    return (
        <Field>
            <Label htmlFor={name}>{label}</Label>
            <Input {...rest} />
        </Field>
    
    )
}

export default InputField
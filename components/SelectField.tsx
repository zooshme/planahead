import { FC } from 'react'
import Field from './Field'
import Label from './Label'
import Select, { ISelect } from './Select'

interface IProps extends ISelect {
    label?: string;
}

const SelectField: FC<IProps> = ({ 
    id, 
    label,
    ...rest
}) => (
    <Field>
        {label && <Label htmlFor={id}>{label}</Label>}
        <Select id={id} {...rest} />
    </Field>
)

export default SelectField
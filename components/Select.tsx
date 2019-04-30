import { FC, ChangeEvent } from 'react'

export interface IOption {
    value: string;
    label: string;
}

export interface ISelect {
    id: string;
    name: string;
    options: IOption[];
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

const Select: FC<ISelect> = ({ 
    id, 
    name, 
    options, 
    value, 
    placeholder,
    onChange
}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        onChange(e.target.value)
    }

    return (
        <select 
            id={id}
            name={name}
            onChange={onChangeHandler}
            value={value}
        >
            {placeholder && <option>{placeholder}</option>}
            {options.map(({ value, label }: IOption, i: number) => (
                <option 
                    key={i} 
                    value={value}
                >{label}</option>
            ))}
        </select>
    )
} 

export default Select
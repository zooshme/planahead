import { FC } from 'react'

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
    value: selectedValue, 
    placeholder,
    onChange
}) => {
    const onChangeHandler = (e) => {
        e.preventDefault()
        onChange(e.target.value)
    }

    return (
        <select 
            id={id}
            name={name}
            onChange={onChangeHandler}
        >
            {placeholder && <option>{placeholder}</option>}
            {options.map(({ value, label }: IOption, i: number) => (
                <option 
                    key={i} 
                    value={value}
                    selected={value === selectedValue}
                >{label}</option>
            ))}
        </select>
    )
} 

export default Select
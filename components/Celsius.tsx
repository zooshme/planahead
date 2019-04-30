import { FC } from 'react'

import { convertKelvinToCelsius } from "~/helpers"

interface IProps {
    temp: number;
}

const Celsius: FC<IProps & React.HtmlHTMLAttributes<HTMLDivElement>> = 
    ({ className, temp }) => (
        <span data-id="celsius" className={`celsius ${className}`}>
            <span data-id="value" className="value">{Math.round(convertKelvinToCelsius(temp))}</span>
            <span data-id="degree" className="degree">&deg;</span>
            <span data-id="unit" className="unit">C</span>
        </span>
    )

export default Celsius
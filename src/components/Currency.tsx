import { FC } from "react"

/*
    Компонент отовечающий за отображение отдельной валюты
*/

export type PropsCurrency = {
    currencyName: string
    rate: string
    changeRate: string
}

export const Currency: FC<PropsCurrency> = ({ currencyName, rate, changeRate }) => {
    return (
        <div className="currency-card">
            <h4>{currencyName}</h4>
            <div className="rate-container" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <span className="exchange-rate">{rate}</span> {/* Значение курса */}
                <span className="change-rate">{changeRate}</span> {/* Изменение курса */}
            </div>
        </div>
    )
};
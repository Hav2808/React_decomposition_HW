import { FC } from "react"
import { ModuleAside } from "../modules/ModuleAside"

/*
    Специальный Компонент отовечающий за отображение погодного блока
*/

export type PropsWeatherCard = {
    imgWeather: string
    current: string
    morningForecast: string
    dayliForecast: string
}

export const WeatherCard: FC<PropsWeatherCard> = ({imgWeather, current, morningForecast, dayliForecast}) => {
    return (
        <ModuleAside>
            <p>Погода</p>
            <div className="weather-card">
                <img src={imgWeather} alt="" />
                <p className="bolt">{current}</p>
                <div className="forecast">
                    <p>Утром {morningForecast}</p>
                    <p>Днем {dayliForecast}</p>
                </div>
            </div>
        </ModuleAside>
    )
}
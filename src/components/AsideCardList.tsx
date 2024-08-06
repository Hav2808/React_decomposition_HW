import { FC } from "react"
import { ModuleAside } from "../modules/ModuleAside"
import { PropsWeatherCard, WeatherCard } from "./WeatherCard"
import { AsideElement, PropsAsideElement } from "./AsideElement"

/*
    Собирательный Компонент отовечающий за отображение дополнительных блоков
    Погодный блок и остальные блоки
*/

export type PropsAsideCardList = {
    weatherParam: PropsWeatherCard
    asideCards: PropsAsideElement[][]
}

export const AsideCardList: FC<PropsAsideCardList> = ({weatherParam, asideCards}) => {
    const {imgWeather, current, morningForecast, dayliForecast} = weatherParam
    return (
        <div className="aside-block">
            <WeatherCard imgWeather={imgWeather} current={current} morningForecast={morningForecast} dayliForecast={dayliForecast}/>
            {asideCards.map( (card, i) => (
                <ModuleAside key={i}>
                    {card.map( (element, index) => (
                        <AsideElement 
                            key={index}
                            toText={element.toText} 
                            text={element.text} 
                            afterText={element.afterText}
                        />
                    ))}

                </ModuleAside>
            ))}
        </div>
    )
}
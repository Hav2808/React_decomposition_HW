import { FC } from "react"

/*
    Компонент отовечающий за отображение блока рекламы самого сайта
*/

export type PropYaView = {
    url: string
    title: string
    text: string
}

export const YaView: FC<PropYaView> = ({url, title, text}) => {
    return (
        <div className="ya-view">
            <img src={url} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}
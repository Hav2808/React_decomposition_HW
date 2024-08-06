import { FC } from "react"
import { ModuleNews } from "../modules/ModuleNews"
import { NewsList, PropNewsList } from "./NewsList"

import { PropYaView, YaView } from "./YaView"

/*
    Компонент отовечающий за отображение блока новостей и блока рекламы
*/

type PropsNewsContainer = {
    dataNews: PropNewsList
    dataYaView: PropYaView
}

export const NewsContainer:FC<PropsNewsContainer> = ({dataNews, dataYaView}) => {
    const {titles, listNews, date, currencyList} = dataNews
    const {url, title, text} = dataYaView
    return (
        <ModuleNews>
            <div className="news-block">
                <NewsList titles={titles} listNews={listNews} date={date} currencyList={currencyList}/>
            </div>
            <YaView url={url} title={title} text={text} /> 
        </ModuleNews>
    )
}
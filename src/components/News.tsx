import { FC } from "react"

/*
    Компонент отовечающий за отображение отдельной новости
*/

export type PropsNews = {
    urlNews: string
    textNews: string
}

export const News: FC<PropsNews> = ({urlNews, textNews}) => {
    return (
        <div className="news">
            <img src={urlNews} alt=""/>
            <p>{textNews}</p>
        </div>
    )
}
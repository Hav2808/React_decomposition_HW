import { FC } from "react"
import { ModuleTaitle } from "../modules/ModuleTaitle"
import { News, PropsNews } from "./News"
import { Currency, PropsCurrency } from "./Currency"
import { Title } from "./Title"

/*
    Компонент отовечающий за отображение тайтлов, новостей и курса валют
*/

export type PropNewsList = {
    titles: string[]
    listNews: PropsNews[]
    date: string
    currencyList: PropsCurrency[]
}

export const NewsList: FC<PropNewsList> = ({titles, listNews, date, currencyList}) => {
    return (
        <>
            <ModuleTaitle> 
                {titles.map( (title, i) => (
                    <Title key={i} title={title} nameClass="news"/>
                ))}
                <div className="date">{date}</div>
            </ModuleTaitle>
            
            <div className="news-list">
                {listNews.map( (news, i) => (
                    <News key={i} urlNews={news.urlNews} textNews={news.textNews}/>
                ))}
            </div>

            <div className="currency-list">
                {currencyList.map( (currency, i) => (
                    <Currency 
                        key={i}
                        currencyName={currency.currencyName} 
                        rate={currency.rate} 
                        changeRate={currency.changeRate}
                    />
                ))}
                <p>...</p>
            </div>
        </>
    )
}
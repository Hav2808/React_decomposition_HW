import { FC } from "react"
import { ModuleTaitle } from "../modules/ModuleTaitle"
import { ModuleYaContentList } from "../modules/ModuleYaContentList"
import { Title } from "./Title"
import { SearchTab } from "./SearchTab"
import { AsideCardList, PropsAsideCardList } from "./AsideCardList"

/*
        Компонент отовечающий за отображение блока логотипа и блока основного контента(Поисковая строка и другие сервисы) 
    и дополнительного контента
*/

type PropYaContentList = {
    titles: string[]
    urlBanner: string
    sloganText: string
    paramAsideThemes: PropsAsideCardList
}

export const YaContentList: FC<PropYaContentList> = ({titles, urlBanner, sloganText, paramAsideThemes}) => {
    const {weatherParam, asideCards} = paramAsideThemes

    return (
        <>
        <ModuleYaContentList>
            <ModuleTaitle>
                {titles.map( (title, i) => (
                    <Title key={i} title={title} nameClass="tab"/>
                ))}
            </ModuleTaitle>

            <SearchTab />

            <div className="slogan">
                <a href="#"> Найдется всё.Например,{sloganText} </a>
            </div>

            <div className="banner">
                <img src={urlBanner} alt="" />
            </div>

            <AsideCardList weatherParam={weatherParam} asideCards={asideCards}/>
        </ModuleYaContentList>
        </>
    )
}
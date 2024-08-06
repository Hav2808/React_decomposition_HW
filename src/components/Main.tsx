import { ModuleMain } from "../modules/ModuleMain"
import { ModuleYaContent } from "../modules/ModuleYaContent"
import { NewsContainer } from "./NewsContainer"

import dataNews from "../data/dataNews.json"
import dataYaView from "../data/dataYaView.json"

import { YaContentList } from "./YaContentList"

import dataWeather from "../data/dataWeather.json"
import dataAsideThemes from "../data/dataAsideThemes.json"

/*
    Главный компонент где отрисовываются основные блоки страницы
*/

const paramAsideThemes = {
    weatherParam: dataWeather,
    asideCards: dataAsideThemes

}

export const Main = () => {
    return (
        <>
            <ModuleMain>
                <NewsContainer dataNews={dataNews} dataYaView={dataYaView}/>
                
                <ModuleYaContent>
                    <div className="logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Yandex.svg/200px-Yandex.svg.png" alt="" />
                    </div>
                    <YaContentList 
                        titles={['Видео', 'Картинки', 'Новости', 'Маркет', 'Переводчик', 'Эфир', 'еще']} 
                        urlBanner="https://pixy.org/src/474/4740509.jpg" 
                        sloganText="ФАЗА" 
                        paramAsideThemes={paramAsideThemes}
                    />
                </ModuleYaContent>
            </ModuleMain>
        </>
    )
}
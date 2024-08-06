import { PropsWithChildren } from "react";

/*
    Модалка которая собирает дополнительные сервисы, поисковую строку, баннер и дополнительный контент 
    (Формирует яндекс контен)
*/

export const ModuleYaContentList = ({children}: PropsWithChildren) => {
    return (
        <div className="ya-content-list">
            {children}
        </div>
    )
}
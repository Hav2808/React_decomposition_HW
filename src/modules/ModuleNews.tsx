import { PropsWithChildren } from "react";

/*
    Модалка которая собирает блок новостей и рекламы сайта
*/

export const ModuleNews = ({children}: PropsWithChildren) => {
    return (
        <div className="news-main-container">
            {children}
        </div>
    )
}
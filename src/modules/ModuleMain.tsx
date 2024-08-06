import { PropsWithChildren } from "react"

/*
    Главная собирательная Модалка, которая собирает страницу
*/

export const ModuleMain = ({children}: PropsWithChildren) => {
    return (
        <div className="main-page">
            {children}
        </div>
    )
}
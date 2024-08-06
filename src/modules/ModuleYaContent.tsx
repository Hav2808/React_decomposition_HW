import { PropsWithChildren } from "react"

/*
    Модалка которая собирает логотип, и Яндекс Контент
*/

export const ModuleYaContent = ({children}: PropsWithChildren) => {
    return (
        <div className="ya-main-content">
            {children}
        </div>
    )
}
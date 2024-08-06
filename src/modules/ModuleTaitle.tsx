import { PropsWithChildren } from "react"

/*
    Модалка которая собирает список тайтлов
*/

export const ModuleTaitle = ({children}: PropsWithChildren, name:string) => {
    return (
        <div className={`title-container ${name}`}>
            {children}
        </div>
    )
}
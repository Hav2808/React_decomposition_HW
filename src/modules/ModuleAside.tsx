import { PropsWithChildren } from "react"

/* 
    Модалка отвечающая за создание блоков дополнительных элементов
*/

export const ModuleAside = ({children}: PropsWithChildren) => {
    return (
        <div className="aside-card">
            {children}
        </div>
    )
}
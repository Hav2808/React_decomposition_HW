import { FC } from "react";

/*
    Компонент отовечающий за отображение отдельнойго тайтла
*/

type PropsTitle = {
    title: string
    nameClass: string
}

export const Title: FC<PropsTitle> = ({title, nameClass}) => {
    return (
        <div className={`title ${nameClass}`}>
            {title}
        </div>
    )
}
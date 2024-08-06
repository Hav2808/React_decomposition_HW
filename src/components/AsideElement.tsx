import { FC } from "react"

/*
    Компонент отовечающий за отображение элемент блока с дополнительной информацией
*/

export type PropsAsideElement = {
    toText?: string
    text: string
    afterText?: string
}

export const AsideElement: FC<PropsAsideElement> = ({toText, text, afterText}) => {
    return (
        <div className="text-aside-element">
            {toText && <p>{ toText }</p>}
            <p>{ text }</p>
            {afterText && <p>{ afterText }</p>}
        </div>
    )
}
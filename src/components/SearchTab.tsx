import { FC } from "react"

/*
    Компонент отовечающий за отображение поисковой строки
*/

export const SearchTab: FC = () => {
    return (
        <div className="search">
            <form action="">
                <input type="text" />
                <button>Найти</button>
            </form>
        </div>
    )
}
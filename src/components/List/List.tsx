import React from "react";

interface ListProps {
    listItem: {
        items: { item: React.ReactNode, className?: string }[],
    }
    id?: string,
    className?: string
}

const List = (props: ListProps) => {

    return (
        <ul className={props.className} id={props.id}>
            {props.listItem.items.map(function (item) {
                return (
                    <li className={item.className}>
                        {item.item}
                    </li>
                )
            })}
        </ul>
    )
}

export default List
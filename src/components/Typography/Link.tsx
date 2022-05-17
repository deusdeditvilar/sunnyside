import React from "react";
import { globalProps } from "../../utils/GlobalProps";

export default function Link(props:globalProps) {
    
    const { className, children, href, id } = props
    return (
        <a href={href} id={id} className={className}>{children}</a>
    )
}
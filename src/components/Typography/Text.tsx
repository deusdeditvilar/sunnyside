import React from "react";

import { globalProps } from "../../utils/GlobalProps";

export default function Text(props: globalProps) {
    
    const { className, children, id, style } = props
    return (
        <p className={className} style={style} id={id}>{children}</p>
    )
}
import React from "react";
import { globalProps } from "../../utils/GlobalProps";
import Div from "../Div/Div";
import classNames from "classnames";

export default function Divider(props: globalProps) {
    var dividerClasses = classNames({
        'divider': true,
        'flex': true,
        'flex-column-reverse@m': props.reverse,
        'flex-column@m': props.column
    });
    return (
        <Div className={dividerClasses}>
            {props.children}
        </Div>
    )
}
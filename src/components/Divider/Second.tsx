import React from "react";
import classNames from "classnames";
import { globalProps } from "../../utils/GlobalProps";
import Div from "../Div/Div";

export default function Second(props: globalProps) {
    var secClasses = classNames({
        'second': true,
        [props.className!]: props.className !== undefined
    });
    return (
        <Div className={secClasses}>
            {props.children}
        </Div>
    )
}
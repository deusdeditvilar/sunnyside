import React from "react";
import classNames from "classnames";
import Div from "../Div/Div";
import { globalProps } from "../../utils/GlobalProps";

export default function First(props: globalProps) {
    var firstClasses = classNames({
        'first': true,
        [props.className!]: props.className !== undefined
    });
    return (
        <Div className={firstClasses}>
            {props.children}
        </Div>
    )
}
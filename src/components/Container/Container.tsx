import React from "react";
import classNames from "classnames";

interface contProps {
    ctLarge?: boolean,
    className?: string,
    children: React.ReactNode 
}

export default function Container(props: contProps) {
    const { ctLarge, className, children } = props;
    var contClasses = classNames({
        'container': true,
        'container-large': ctLarge,
        [className!]: className !== undefined
    });
 
    return (
        <div className={contClasses}>
            {children}
        </div>
    )
}
import React from "react";
import classNames from "classnames";
import Div from "../Div/Div";

interface sectionProps {
    secLarge?: boolean,
    htFull?: boolean,
    className?: string,
    children?: React.ReactNode,
    id?: string
}


const Section: React.FC<sectionProps> = ({
        secLarge,
        htFull,
        className,
        children,
        id
      }) => {
    var sectionClasses = classNames({
        'section': true,
        'section-large': secLarge,
        'height-full': htFull,
        [className!]: className !== undefined,
    });

    return (
        <Div className={sectionClasses} id={id}>
            {children}
        </Div>
    )
}

export default Section
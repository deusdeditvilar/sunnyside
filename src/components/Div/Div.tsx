import React from "react";
import classNames from "classnames";

interface divProps {
    htFull?: boolean, 
    txtCenter?: boolean, 
    txtCenterm?: boolean, 
    paddingTB?: boolean, 
    marginAuto?: boolean, 
    widthSm?: boolean, 
    flexBetween?: boolean, 
    flex?: boolean, 
    flexAC?: boolean,
    flexACm?: boolean, 
    flexJC?: boolean, 
    flexCol?: boolean,
    flexColm?: boolean,
    padSides?: boolean, 
    className?: string, 
    id?: string,
    children?: React.ReactNode
}

// export default function Div(props: any) {
const Div: React.FC<divProps> = ({
    htFull,
    txtCenter,
    txtCenterm,
    paddingTB,
    marginAuto,
    widthSm,
    flexBetween,
    flex,
    flexAC,
    flexACm,
    flexJC,
    flexCol,
    flexColm,
    padSides,
    className,
    id,
    children
      }) => {
    var divClasses = classNames({
        'height-full': htFull,
        'text-center': txtCenter,
        'padding-top-bottom': paddingTB,
        'margin-auto': marginAuto,
        'width-small@m': widthSm,
        'text-center@m' : txtCenterm,
        'padding-side@s': padSides,

        'flex': flex,
        'flex-between': flexBetween,
        'flex-justify-center': flexJC,
        'flex-column': flexCol,
        'flex-align-center': flexAC,
        'flex-align-center@m': flexACm,
        'flex-column@m': flexColm,
        [className!]: className !== undefined,
    });
    return (
        <div className={divClasses} id={id}>
            {children}
        </div>
    )
}

export default Div
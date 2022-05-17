import React from "react";

interface picProps {
    mobile: string,
    desktop: string,
    alt?: string
}

export default function Picture(props: picProps) {
    const { mobile, desktop, alt } = props
    return (
        <picture>
            <source media="(max-width: 480px)" srcSet={mobile} />
            <source media="(min-width: 481px)" srcSet={desktop} />

            <img alt={alt} src={desktop} style={{width: "100%",height: "100%"}} />
        </picture>
    )
}